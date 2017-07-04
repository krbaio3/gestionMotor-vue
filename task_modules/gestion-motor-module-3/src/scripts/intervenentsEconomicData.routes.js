function IntervenerRouting($stateProvider) {
  'ngInject';

  $stateProvider.state('intervenentsEconomicData', {
    url: '/intervenentsEconomicData',
    templateUrl: 'intervenentsEconomicData.component.html',
    controller: 'intervenentsEconomicDataController',
    controllerAs: 'vm',
  });
}

export default IntervenerRouting;
