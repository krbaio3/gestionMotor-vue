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


const Sip = angular.module('gaccancela.sip', [
  ocLazyLoad,
  AngularBootstrap,
  ngSanitize,
])
    .config(SipRoutes)
    .service('SipService', SipService)
    .name;

export default Sip;
