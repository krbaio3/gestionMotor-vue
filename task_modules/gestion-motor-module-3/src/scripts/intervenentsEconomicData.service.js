class IntervenentsEconomicDataService {
  constructor($q) {
    'ngInject';

    this.$q = $q;
    this.simulation = {
      amount: '5000000',
      commission: '75',
      net: '49.900',
      success: '25',
    };

    this.reportsArray = ['OTROS MOTIVOS', 'POR DECISIÓN DE LA ENTIDAD'];
    this.intervenersList = [{
      documentTypes: 'DNI',
      docId: '18998768D',
      name: 'ALBERTO FERNÁNDEZ CÓPOLA',
      relationType: 'TITULAR 1',
      relationStatus: 'Pendiente de firma',
      inclusionDate: '11/09/2014',
      expirationDate: '11/09/2018',
      result: 'FLEXIBLE',
    },
    {
      documentTypes: 'DNI',
      docId: '18998768D',
      name: 'ALBERTO FERNÁNDEZ CÓPOLA',
      relationType: 'TITULAR 1',
      relationStatus: 'Pendiente de firma',
      inclusionDate: '11/09/2014',
      expirationDate: '11/09/2018',
      result: 'FLEXIBLE',
    },
    ];
  }

  getReportsArray() {
    return this.$q((resolve, reject) => resolve(this.reportsArray));
  }

  getIntervenersList() {
    return this.$q((resolve, reject) => resolve(this.intervenersList));
  }

  getSimulation() {
    return this.$q((resolve, reject) => resolve(this.simulation));
  }
}

export default IntervenentsEconomicDataService;
