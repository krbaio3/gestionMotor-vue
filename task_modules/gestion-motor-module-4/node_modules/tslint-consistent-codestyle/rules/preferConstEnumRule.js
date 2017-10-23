"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var ts = require("typescript");
var Lint = require("tslint");
var tsutils_1 = require("tsutils");
var Rule = (function (_super) {
    tslib_1.__extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        return this.applyWithFunction(sourceFile, walk);
    };
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
function walk(ctx) {
    var seen = new Set();
    var enums = [];
    var declarations = [];
    var variables = tsutils_1.collectVariableUsage(ctx.sourceFile);
    variables.forEach(function (variable, identifier) {
        if (identifier.parent.kind !== ts.SyntaxKind.EnumDeclaration || seen.has(identifier))
            return;
        var track = {
            name: identifier.text,
            isConst: tsutils_1.hasModifier(identifier.parent.modifiers, ts.SyntaxKind.ConstKeyword),
            declarations: [],
            members: new Map(),
            canBeConst: !variable.inGlobalScope && !variable.exported,
            uses: variable.uses,
        };
        for (var _i = 0, _a = variable.declarations; _i < _a.length; _i++) {
            var declaration = _a[_i];
            seen.add(declaration);
            if (declaration.parent.kind !== ts.SyntaxKind.EnumDeclaration) {
                track.canBeConst = false;
            }
            else {
                track.declarations.push(declaration.parent);
                declarations.push({
                    track: track,
                    declaration: declaration.parent
                });
            }
        }
        enums.push(track);
    });
    declarations.sort(function (a, b) { return a.declaration.pos - b.declaration.pos; });
    for (var _i = 0, declarations_1 = declarations; _i < declarations_1.length; _i++) {
        var _a = declarations_1[_i], track = _a.track, declaration = _a.declaration;
        for (var _b = 0, _c = declaration.members; _b < _c.length; _b++) {
            var member = _c[_b];
            var isConst = track.isConst ||
                member.initializer === undefined ||
                isConstInitializer(member.initializer, track.members, findEnum);
            track.members.set(tsutils_1.getPropertyName(member.name), {
                isConst: isConst,
                stringValued: isConst && member.initializer !== undefined && isStringValued(member.initializer, track.members, findEnum),
            });
            if (!isConst)
                track.canBeConst = false;
        }
    }
    for (var _d = 0, enums_1 = enums; _d < enums_1.length; _d++) {
        var track = enums_1[_d];
        if (track.isConst || !track.canBeConst || !onlyConstUses(track))
            continue;
        for (var _e = 0, _f = track.declarations; _e < _f.length; _e++) {
            var declaration = _f[_e];
            ctx.addFailure(declaration.name.pos - 4, declaration.name.end, "Enum '" + track.name + "' can be a 'const enum'.", Lint.Replacement.appendText(declaration.name.pos - 4, 'const '));
        }
    }
    function findEnum(name) {
        for (var _i = 0, enums_2 = enums; _i < enums_2.length; _i++) {
            var track = enums_2[_i];
            if (track.name !== name.text)
                continue;
            for (var _a = 0, _b = track.uses; _a < _b.length; _a++) {
                var use = _b[_a];
                if (use.location === name)
                    return track;
            }
        }
    }
}
function onlyConstUses(track) {
    for (var _i = 0, _a = track.uses; _i < _a.length; _i++) {
        var use = _a[_i];
        if (use.domain & 2 || use.domain === 1)
            continue;
        if (use.domain & 8)
            return false;
        var parent = use.location.parent;
        switch (parent.kind) {
            default:
                return false;
            case ts.SyntaxKind.ElementAccessExpression:
                if (parent.argumentExpression === undefined ||
                    parent.argumentExpression.kind !== ts.SyntaxKind.StringLiteral)
                    return false;
                break;
            case ts.SyntaxKind.PropertyAccessExpression:
        }
    }
    return true;
}
function isConstInitializer(initializer, members, findEnum) {
    return (function isConst(node, allowStrings) {
        switch (node.kind) {
            case ts.SyntaxKind.Identifier:
                var member = members.get(node.text);
                return member !== undefined && member.isConst && (allowStrings || !member.stringValued);
            case ts.SyntaxKind.StringLiteral:
                return allowStrings;
            case ts.SyntaxKind.NumericLiteral:
                return true;
            case ts.SyntaxKind.PrefixUnaryExpression:
                return isConst(node.operand, false);
            case ts.SyntaxKind.ParenthesizedExpression:
                return isConst(node.expression, allowStrings);
        }
        if (tsutils_1.isPropertyAccessExpression(node)) {
            if (!tsutils_1.isIdentifier(node.expression))
                return false;
            var track = findEnum(node.expression);
            if (track === undefined)
                return false;
            var member = track.members.get(node.name.text);
            return member !== undefined && member.isConst && (allowStrings || !member.stringValued);
        }
        if (tsutils_1.isElementAccessExpression(node)) {
            if (!tsutils_1.isIdentifier(node.expression) || node.argumentExpression === undefined || !tsutils_1.isStringLiteral(node.argumentExpression))
                return false;
            var track = findEnum(node.expression);
            if (track === undefined)
                return false;
            var member = track.members.get(node.argumentExpression.text);
            return member !== undefined && member.isConst && (allowStrings || !member.stringValued);
        }
        if (tsutils_1.isBinaryExpression(node))
            return node.operatorToken.kind !== ts.SyntaxKind.AsteriskAsteriskToken &&
                node.operatorToken.kind !== ts.SyntaxKind.AmpersandAmpersandToken &&
                node.operatorToken.kind !== ts.SyntaxKind.BarBarToken &&
                !tsutils_1.isAssignmentKind(node.operatorToken.kind) &&
                isConst(node.left, false) && isConst(node.right, false);
        return false;
    })(initializer, true);
}
function isStringValued(initializer, members, findEnum) {
    return (function stringValued(node) {
        switch (node.kind) {
            case ts.SyntaxKind.ParenthesizedExpression:
                return stringValued(node.expression);
            case ts.SyntaxKind.Identifier:
                return members.get(node.text).stringValued;
            case ts.SyntaxKind.PropertyAccessExpression:
                return findEnum(node.expression)
                    .members.get(node.name.text).stringValued;
            case ts.SyntaxKind.ElementAccessExpression:
                return findEnum(node.expression)
                    .members.get(node.argumentExpression.text).stringValued;
            default:
                return true;
        }
    })(initializer);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlZmVyQ29uc3RFbnVtUnVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInByZWZlckNvbnN0RW51bVJ1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsK0JBQWlDO0FBQ2pDLDZCQUErQjtBQUMvQixtQ0FHaUI7QUFFakI7SUFBMEIsZ0NBQXVCO0lBQWpEOztJQUlBLENBQUM7SUFIVSxvQkFBSyxHQUFaLFVBQWEsVUFBeUI7UUFDbEMsTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUNMLFdBQUM7QUFBRCxDQUFDLEFBSkQsQ0FBMEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEdBSWhEO0FBSlksb0JBQUk7QUF5QmpCLGNBQWMsR0FBMkI7SUFDckMsSUFBTSxJQUFJLEdBQUcsSUFBSSxHQUFHLEVBQWlCLENBQUM7SUFDdEMsSUFBTSxLQUFLLEdBQVksRUFBRSxDQUFDO0lBQzFCLElBQU0sWUFBWSxHQUFtQixFQUFFLENBQUM7SUFDeEMsSUFBTSxTQUFTLEdBQUcsOEJBQW9CLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3ZELFNBQVMsQ0FBQyxPQUFPLENBQUMsVUFBQyxRQUFRLEVBQUUsVUFBVTtRQUNuQyxFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsTUFBTyxDQUFDLElBQUksS0FBSyxFQUFFLENBQUMsVUFBVSxDQUFDLGVBQWUsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ2xGLE1BQU0sQ0FBQztRQUNYLElBQU0sS0FBSyxHQUFVO1lBQ2pCLElBQUksRUFBRSxVQUFVLENBQUMsSUFBSTtZQUNyQixPQUFPLEVBQUUscUJBQVcsQ0FBQyxVQUFVLENBQUMsTUFBTyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQztZQUM5RSxZQUFZLEVBQUUsRUFBRTtZQUNoQixPQUFP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