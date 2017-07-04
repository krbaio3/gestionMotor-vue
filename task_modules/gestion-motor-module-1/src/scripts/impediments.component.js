import controller from './impediments.controller';

const templateUrl = require('../views/impediments.component.html');

const transclude = true;
const controllerAs = 'vm';

const ImpedimentsComponent = {
  controller,
  templateUrl,
  transclude,
  controllerAs,
};

export default ImpedimentsComponent;
