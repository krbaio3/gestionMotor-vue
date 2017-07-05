import Commoncontroller from './common-data.controller';

require('/commom-data.component.scss');

const bindings ={};
const controllerAs = 'vm';
const templateUrl = require('ngtemplate-loader!html-loader!./common-data.component.html');

const atCommonData = {
  Commoncontroller,
  bindings,
  controllerAs,
  templateUrl,
};

export default atCommonData;
