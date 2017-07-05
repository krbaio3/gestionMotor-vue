import SipController from './sip.controller';

require('./sip.scss');

const template = require('ngtemplate-loader!html-loader!./sip.html');

function SipRouting($stateProvider) {
  'ngInject';

  $stateProvider.state('sip', {
    url: '/sip',
    templateUrl: template,
    controller: SipController,
    controllerAs: 'vm',
  });
}

export default SipRouting;
