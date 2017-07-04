import CCC from 'bankia-cl-ui-ccc';
import Document from 'bankia-cl-ui-document';
import Flows from 'bankia-neo-cl-ui-flows';
import NEODialog from 'bankia-neo-ui-dialog';
import IntervenentsEconomicDataComponent from './intervenentsEconomicData.component';
import IntervenentsEconomicDataService from './intervenentsEconomicData.service';


require('imports-loader?$=jquery,jQuery=jquery,angular!../../../../bower_components/bankia-ui-radio/dist/radio-tpls.js');
require('imports-loader?$=jquery,jQuery=jquery,angular!../../../../bower_components/bankia-ui-checkbox/dist/checkbox-tpls.js');
require('imports-loader?$=jquery,jQuery=jquery,angular!../../../../bower_components/bankia-ui-decimal/dist/decimal.js');
require('imports-loader?$=jquery,jQuery=jquery,angular!../../../../bower_components/bankia-cl-ui-multiproduct/dist/multiproduct-tpls.js');

export const IntervenentsEconomicData = angular.module('gaccancela.intervenentsEconomicData', [
  CCC,
  Document,
  Flows,
  'bankia-cl-ui-multiproduct',
  'bankia.ui.checkbox',
  'bankia.ui.radio',
  NEODialog,
  'bankia.ui.decimal',
])
.component('intervenentsEconomicData', IntervenentsEconomicDataComponent)
.service('IntervenentsEconomicDataService', IntervenentsEconomicDataService)
.name;
