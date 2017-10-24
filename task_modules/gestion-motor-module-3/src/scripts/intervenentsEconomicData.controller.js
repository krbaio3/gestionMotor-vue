class IntervenentsEconomicDataController {
  constructor(NEODialog, IntervenentsEconomicDataService, $sce) {
    'ngInject';

    this.NEODialog = NEODialog;
    this.intervenentsEconomicDataService = IntervenentsEconomicDataService;
    this.$sce = $sce;
    this.intervenersList = [];
    this.simulation = [];
    this.$onInit = () => {
      this.intervenentsEconomicDataService.getReportsArray().then((response) => {
        this.reportsArray = response;
      });
      this.intervenentsEconomicDataService.getIntervenersList().then((response) => {
        this.intervenersList = response;
      });
      this.intervenentsEconomicDataService.getSimulation().then((response) => {
        this.simulation = response;
      });
    };
  }
  showHtml() {
    const dialog = this.neodialog.show({
      html: this.$sce.trustAsHtml('<h2>Cancelación por decisión de la Entidad</h2>Las causas para la cancelación unilateral por la Entidad pueden ser:<br/><ul><li>Impago de las comisiones</li><li>Riesgo de crédito con el cliente</li><li>Incumplimiento de la nomativa de blanqueo de capitales o de abuso de mercado</li></ul>Se procederá al envío de una carta al cliente, comunicando con preaviso de un mes, por correo certificado con acuse de recibo, la decisión de la Entidad de cancelar el contrato.<br/><br/>Si transcurrido el plazo de un mes del envío de carta el cliente no se persona para anular la cancelación o cancelar el contrato, se procederá a la cancelación automática'),
      type: 'alert',
      buttons: ['+Aceptar', '-Cancelar'],
    });
    dialog.result.then((selected) => {
      this.dialog6Selected = selected.text;
    });
  }
}

export default IntervenentsEconomicDataController;
