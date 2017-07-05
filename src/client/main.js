require('../modules.manifest.json');

function requireAll(rc) { return rc.keys().map(rc); }
const modules = requireAll(require.context('../task_modules', true, /^\.\/.*\.(js|html|css)$/));

import { Gaccancela } from './app/modules/app.module';

angular.bootstrap(document, [Gaccancela]);
