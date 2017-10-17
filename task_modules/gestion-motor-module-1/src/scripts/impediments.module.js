import ImpedimentsService from './impediments.service';
import ImpedimentsComponent from './impediments.component';

require('../styles/main.scss');

export const Impediments = angular.module('prueba.impediments', [
  ClUiFlows,
  CCC,
  Document,
  'atmira.ui.select'
])
.component('impediments', ImpedimentsComponent)
.service('IntervenentsEconomicDataService', ImpedimentsService)
.name;
