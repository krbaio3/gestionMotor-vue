class ImpedimentsService {
  constructor($q, $log) {
    'ngInject';

    this.$q = $q;
    this.$log = $log;
    this.impedimentsList = [{
      desc: 'Contrato bloqueado',
      import: '10.000,00',
      contract: '000010001200013456',
      relation: '',
      prodFamily: 'Carteras gestionadas',
    }, {
      desc: 'Contrato bloqueado',
      import: '10.000,00',
      contract: '000010001200013456',
      relation: '',
      prodFamily: 'Carteras gestionadas',
    }];
    this.$log.log(this.impedimentsList);
  }

  getImpedimentsList() {
    this.$log.log(this.impedimentsList);
    return this.impedimentsList;
  }

}
export default ImpedimentsService;
