class SipController {
  constructor($sce, sipTaskManagerSrv, sipService, storageService, $log, neodialog, neoService) {
    'ngInject';

    this.$log = $log;
    this.sipTaskManagerSrv = sipTaskManagerSrv;
    this.neoService = neoService;
    this.sipService = sipService;
    this.storageService = storageService;
    this.setStartType = this.setStartType();
    this.leftProcess = this.leftProcess();

    this.setSipServiceHandlers();
    this.addSipMenuOptions();
    this.startProcess();
  }

  $onInit() {
    this.status.loadingApp = true;
    this.sipService.loadContextData();
    this.setStartType();
  }

  setSipServiceHandlers() {
    this.setOnErrorHandler();
    this.setOnLoadingTaskHandler();
    this.setOnTaskLoadedHandler();
    this.setOnTaskEndedHandler();
    this.setOnTaskEndingHandler();
    this.setOnMaxRetriesErrorHandler();
  }

  setOnErrorHandler(error) {
    let brokenFlow = false;
    if (this.sipTaskManagerSrv.getTaskModule()) { // There's a task loaded
      brokenFlow = true; // So we will close it and inform about the error in a popup
     // this.sipTaskManagerSrv.endTask(this.sipTaskManagerSrv.getTaskModule().endTypes.INEXECUTION);
    }
    this.sipTaskManagerSrv.setLoadingSip(false);
    this.status.loadingApp = false;
    this.log(error, brokenFlow);
    // throw new dtoFactory.SipExceptionDto('SipController', error.message, error, brokenFlow);
  }

  setOnLoadingTaskHandler() {
    this.sipTaskManagerSrv.setLoadingSip(true);
  }

  setOnTaskLoadedHandler() {
    if (angular.equals(this.sipTaskManagerSrv.getTaskModule().name, 'managerDocument')) {
      this.sipTaskManagerSrv.setLoadingSip(false);
    }
    this.storageService.app.store({
      SIP: {
        idSubProceso: this.sipTaskManagerSrv.getTaskModule().inputData.metadata.idSubproceso,
      },
    });
        // TODO:
    this.sipTaskManagerSrv.getTaskModule().cancelTaskRequest = this.sipService.cancelTaskRequest;
  }

  setOnTaskEndedHandler() {
    this.sipTaskManagerSrv.setLoadingSip(false);
  }

  setOnTaskEndingHandler() {
    this.sipTaskManagerSrv.onEndingTask(() => {
      this.isEndingTask = true;
      this.status.loadingApp = false;
      this.log('Error en el SIP');
    });
  }

  setOnMaxRetriesErrorHandler() {
    // Define las funcion a ejecutar cuando hay un error de máximo
    // número de reintentos.
    // TODO: Implementar
    this.$log.log('onMaxRetriesError');
    // Ejemplo
    // this.sipTaskManagerSrv.onMaxRetriesError((resolve, reject) => {
    //   const r = confirm('¿Quieres seguir reintentando?');
    //   if (r === true) {
    //     resolve();
    //   } else {
    //     reject();
    //   }
    // });
  }

  setStartType() {
    if (angular.isDefined(this.storageService.app.get('SIP').idProceso)) {
      this.sipService.continueSip((result) => {
        this.status.loadingSip(false);
        this.$log.log(result);
        this.storageService.app.store({
          commonData: {
            productId: result.processContext.datosEntrada.AXtipoProd,
            contractId: result.processContext.variablesProceso.AXidContCartGest,
            idExpDocumental: result.processContext.variablesProceso.AXidExpDocumental,
            firstIntervenerName: result.processContext.datosComunes.AQnombCliePrimTitu,
            productName: result.processContext.datosComunes.AQnomProdComercial,
            currencyId: result.processContext.variablesProceso.AXcodigoMoneda,
            openingDate: result.processContext.variablesProceso.AXfechaApertura,
          },
        });
      });
      this.sipService.loadContextData();
      this.status.loadingApp = false;
    } else {
      this.sipService.startSip((result) => {
        this.status.loadingApp = false;
        this.storageService.app.store({
          SIP: {
            idSubProceso: result.initialTask.idSubproceso,
            idProceso: result.processContext.idProceso,
            codigoProceso: result.processContext.codigoProceso,
          },
        });
                // this.status.loadingSip = false;
      });
    }
  }

  leftProcess() {
    this.sipTaskManagerSrv.getTaskModule().inputData.metadata.estado === 'FI' ? this.sipService.leftProcess() :
            this.neodialog.show({
              html: this.$sce.trustAsHtml('<p>Se perderán los datos no guardados.</p>'),
              type: 'alert',
              buttons: ['Continuar', '-Cancelar'],
            }).result.then((result) => {
              if (result.text === 'Continuar') {
                this.sipService.leftProcess();
              }
            });
  }

  addSipMenuOptions() {
    const cancelLink = {
      type: 'link',
      text: 'Cancelar Proceso',
      name: 'CancelarProcesoLink',
      section: 'left-section',
      context: 'main',
      onClick: this.sipService.endProcess,
      cssClass: 'displayNone',
    };
    const acceptButton = {
      type: 'button',
      text: 'Aceptar',
      name: 'FinalizarTareaButton',
      section: 'right-section',
      context: 'main',
      iconClass: 'bki-success',
      cssClass: 'bk-with-literal disabled-menu-option',
      customize: '+',
      disable: true,
    };
    const cancelButton = {
      type: 'button',
      text: 'Abandonar',
      name: 'AbandonarTareaButton',
      section: 'right-section',
      iconClass: 'bki-error',
      cssClass: 'displayNone',
      customize: '-',
      context: 'main',
      onClick: this.leftProcess,
    };
        // Implementamos el boton cerrar con la llamada que debe de hacer.
        // Por defecto, está oculto
    const closeButton = {
      type: 'button',
      text: 'Cerrar',
      name: 'CerrarButton',
      section: 'right-section',
      iconClass: ['bki-close-btn', 'bki-close-btn-top'],
      customize: '-',
      cssClass: 'displayNone',
      context: 'main',
      onClick() {
        this.sipTaskManagerSrv.endTask(this.sipTaskManagerSrv.getTaskModule().endTypes.INEXECUTION);
      },
    };
    const exitButton = {
      type: 'button',
      text: 'Cerrar',
      name: 'ExitButton',
      section: 'right-section',
      iconClass: ['bki-close-btn', 'bki-close-btn-top'],
      customize: '-',
      cssClass: '',
      context: 'main',
      onClick() {
        this.neoService.closeTab();
      },
    };

    this.sipTaskManagerSrv.addMenuOption(cancelLink);
    this.sipTaskManagerSrv.addMenuOption(acceptButton);
    this.sipTaskManagerSrv.addMenuOption(cancelButton);
    this.sipTaskManagerSrv.addMenuOption(closeButton);
    this.sipTaskManagerSrv.addMenuOption(exitButton);
  }
}

export default SipController;
