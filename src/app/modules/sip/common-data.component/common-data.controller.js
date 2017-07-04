// (function() {
//     angular.module('gaccancela.sip').controller('CommonDataController', CommonDataController);

//     function CommonDataController($scope, storageService, tabitService) {
//         'ngInject';

//         const vm = this;
//         vm.data = undefined;
//         vm.entities = tabitService.autowired(tabitService.TABITS.ENTITIES);
//         vm.currencies = tabitService.autowired(tabitService.TABITS.CURRENCIES);

//         $scope.$watch(() => storageService.app.get('commonData'), (newVal, oldVal) => {
//             vm.data = newVal;
//         }, true);
//     }
// }());
class CommonDataController {
  constructor() {
    'ngInject';
  }

}
export default CommonDataController;
