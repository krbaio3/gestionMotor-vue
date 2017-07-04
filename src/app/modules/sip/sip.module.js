import AngularBootstrap from 'angular-ui-bootstrap';
import ngSanitize from 'angular-sanitize';

// Session Mock
import '../../../../node_modules/bankia-core-session/dist/session-mock';
// sip-taskmanager
import * as ocLazyLoad from 'oclazyload';
import * as Rx from 'rxjs';

// Dependencias proyecto
import SipService from './sip.service';
import SipRoutes from './sip.routes';



require('./sip.scss');

function sipTaskManagerConfig(sipTaskManagerSrvProvider, $log) {
  'ngInject';

    // @ifdef NODE_ENV='production'
  sipTaskManagerSrvProvider.setApiBaseUrl('/SIP/AdaptadorREST/ejecuta');
    // @endif
    // @ifdef NODE_ENV!='production'
  sipTaskManagerSrvProvider.setApiBaseUrl('http://localhost:3000/AdaptadorREST/ejecuta');
    // @endif
  $log.log('reading manifest');
  sipTaskManagerSrvProvider.setModulesManifestPath('./modules.manifest.json');
  sipTaskManagerSrvProvider.setAnchorName('DefaultAnchor');
}

function sipTaskManagerSrvDecorator($provide) {
  'ngInject';

  $provide.decorator('sipTaskManagerSrv', ($delegate) => {
    let viewLocked = false;
    let loadingSip = false;
    this.$delegate.isLoadingSip = () => loadingSip;
    this.$delegate.setLoadingSip = bol => (loadingSip = bol);
    this.$delegate.isViewLocked = () => viewLocked;
    this.$delegate.setViewLocked = bol => (viewLocked = bol);

    return $delegate;
  });
}

const Sip = angular.module('gaccancela.sip', [
  ocLazyLoad,
  AngularBootstrap,
  ngSanitize,
])
    // .config(sipTaskManagerSrvDecorator)
    .config(sipTaskManagerConfig)
    .config(SipRoutes)
    .service('SipService', SipService)
    .name;

export default Sip;
