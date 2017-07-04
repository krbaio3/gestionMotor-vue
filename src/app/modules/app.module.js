import 'bankia-core-session/dist/session-mock';
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Core from '../core/core.module';
import AppRoutes from './app.routes';
import Sip from './sip/sip.module';

//TODO: quitar router, limpiar bien. sólo dejar SIP

// sip-taskmanager
import BankiaCoreSipTaskManager from 'bankia-core-siptaskmanager';
// bk-tasklist
import BankiaTasklist from 'bankia-ui-tasklist';

require('../sass/main.scss');

function configApp($compileProvider, $logProvider) {
  'ngInject';

    // @ifdef NODE_ENV='production'
    // $compileProvider.debugInfoEnabled(false);
    // $logProvider.debugEnabled(false);
    // @endif
}
function storeUrlParams($location, $log, storageService) {
  'ngInject';

  const petitionData = $location.search();
  if (angular.isObject(petitionData) && Object.keys(petitionData).length !== 0) {
    $log.debug('appModule : Application loaded with params:', petitionData);
    storageService.app.store({
      commonData: {
        firstIntervenerId: petitionData.IdCliente,
        firstIntervenerName: petitionData.AQnombCliePrimTitu,
        productId: petitionData.tipoProductoComercial,
        productName: petitionData.AQnomProdComercial,
        contractId: petitionData.idContrato,
        state: petitionData.state,
      },
      apiHeaders: {
        applicationCode: petitionData['x-j_gid_cod_app'],
      },
    });
  }
}

export const GacCancela = angular
  .module('gaccancela', [
   uiRouter,
   BankiaCoreSipTaskManager,
   BankiaTasklist,
   AppRoutes,
   Sip
  ])
    .component('gacCancela', {
      template: '<ui-view></ui-view>',
    })
    .config(configApp)
    .config(['$httpProvider', ($httpProvider) => {
      $httpProvider.defaults.headers.common['x-j_gid_cod_app'] = 'e2';
      $httpProvider.defaults.headers.common.TGT = '';
    }])
    .run(storeUrlParams)
    .name;


// Función publica necesaria para que NEO se comunique con nuestra aplicación:
function getIDProceso() {
  if (angular.isDefined(window.browserId)) {
    return window.browserId;
  }
  return null;
}
