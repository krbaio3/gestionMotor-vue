import NEOdialog from 'bankia-neo-ui-dialog';
import ClUiFlows from 'bankia-neo-cl-ui-flows';
import CCC from 'bankia-cl-ui-ccc';
import Document from 'bankia-cl-ui-document';
import BankiaSubProcess from 'bankia-core-subprocesses';
import ImpedimentsService from './impediments.service';
import ImpedimentsComponent from './impediments.component';

require('../../bower_components/bankia-ui-checkbox/dist/checkbox-tpls.js');
require('../../bower_components/bankia-ui-radio/dist/radio-tpls.js');
require('../../bower_components/atmira-ui-select/dist/atmiraSelect.js');
require('../../bower_components/bankia-ui-decimal/dist/decimal.js');

require('../styles/main.scss');

export const Impediments = angular.module('gaccancela.impediments', [
  NEOdialog,
  ClUiFlows,
  CCC,
  Document,
  BankiaSubProcess,
  'atmira.ui.select',
  'bankia.ui.checkbox',
  'bankia.ui.radio',
  'bankia.ui.decimal',
])
.component('impediments', ImpedimentsComponent)
.service('IntervenentsEconomicDataService', ImpedimentsService)
.name;
