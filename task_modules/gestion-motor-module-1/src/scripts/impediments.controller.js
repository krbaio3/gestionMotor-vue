class ImpedimentsController {

  constructor(IntervenentsEconomicDataService, $sce) {
    'ngInject';

    // console.log(DialogSrv);
    this.intervenentsEconomicDataService = IntervenentsEconomicDataService;
    this.$sce = $sce;
    this.impedimentsList = this.intervenentsEconomicDataService.getImpedimentsList();
    // this.prueba = 'esto es una prueba';
    // this.lista = IntervenentsEconomicDataService.getImpedimentsList();
  }

  $onInit() {
    this.isChecked = false;
    this.isChecked2 = false;
  }

  removeRow(i) {
    this.impedimentsList.splice(i, 1);
  }

  showHtml() {
    if (this.isChecked === true) {
      const dialog = this.modal.show({
        html: this.$sce.trustAsHtml('<h2>El cliente se ha personado en la oficina</h2>No será necesario esperar al vencimiento del plazo de preaviso al cliente para resolver los impedimentos y cancelar el contrato.<br/><br/>Se deberá recoger la firma del cliente en la tarea de Documentación y firma.<br/><br/>¿Confirmas que el cliente se ha personado en la oficina?'),
        type: 'alert',
        buttons: ['+Aceptar', '-Cancelar'],
      });
      dialog.result.then((selected) => {
        this.dialog6Selected = selected.text;
      });
    }
  }

  showHtml2() {
    if (this.isChecked2 === true) {
      const dialog = this.neodialog.show({
        html: this.$sce.trustAsHtml('<h2>Anular cancelación</h2>No es posible resolver alguno de los impedimentos por lo que la cancelación no se puede ejecutar.<br/>Comprueba que se han realizado todas las actuaciones establecidas en la Guía SOS Cancelación de cuentas por decisión de la entidad. Si decides continuar, el sistema enviará una notificación al director de la oficina para informarle que el producto no se ha podido cancelar porque existen impedimentos que no se pueden resolver.<br/><br/>Si lo deseas, puedes cancelar esta acción y volver a la pantalla de impedimentos'),
        type: 'alert',
        buttons: ['+Aceptar', '-Cancelar'],
      });
      dialog.result.then((selected) => {
        this.dialog6Selected = selected.text;
      });
    }
  }

}

export default ImpedimentsController;
