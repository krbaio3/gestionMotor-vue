import IntervenentsEconomicDataController from './intervenentsEconomicData.controller';

// const templateUrl = require('ngtemplate-loader!html-loader!./intervenentsEconomicData.html');
const templateUrl = require('./intervenentsEconomicData.html');

require('./intervenentsEconomicData.scss');

const transclude = true;
const controllerAs = 'vm';

const IntervenentsEconomicDataComponent = {
  templateUrl,
  transclude,
  controllerAs,
  IntervenentsEconomicDataController,
};

export default IntervenentsEconomicDataComponent;
