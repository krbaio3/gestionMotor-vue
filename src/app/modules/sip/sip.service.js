class SipService {
  constructor($log, sipTaskManagerSrv, storageService, TerminalSessionSrv, neoService, $sce) {
    'ngInject';

    this.processDto = {
      codigoProceso: 'AX000001',
      versionProceso: '01',
    };
    this.$log = $log;
    this.$sce = $sce;
    this.sipTaskManagerSrv = sipTaskManagerSrv;
    this.TerminalSessionSrv = TerminalSessionSrv;
    this.neoService = neoService;
    this.storageService = storageService;
  }

  startSip(callback) {
    const processData = this.updateProcessDto();
    this.$log.debug('sipService : Starting SIP process with this params', processData);
    this.sipTaskManagerSrv.startProcess(processData, callback);
  }

  continueSip(callback) {
    const processData = this.updateProcessDto();
    processData.idProceso = this.storageService.app.get('SIP').idProceso;
    this.$log.debug('sipService : Continue SIP process with this params', processData);
    this.sipTaskManagerSrv.continueProcess(processData, callback);
  }

  leftProcess() {
    this.readModeButtons();
        // Sobreescribimos estos botones
        // //Oculto el boton cerrar.
    this.sipTaskManagerSrv.updateMenuOption({
      name: 'CerrarButton',
      cssClass: 'displayNone',
    });
        // Muestro el boton salir
    this.sipTaskManagerSrv.updateMenuOption({
      name: 'ExitButton',
      cssClass: '',
    });
    this.sipTaskManagerSrv.endTask(this.sipTaskManagerSrv.getTaskModule().endTypes.INEXECUTION);
  }

    // Revisar este método y poner subprocess
  endProcess() {
    const bodyArgs = {
      identificadorContratoOrigen: this.storageService.app.get('commonData').contractId,
      idInstanciaProceso: this.storageService.app.get('SIP').idProceso,
    };
    this.$log.log(bodyArgs);
    // cancelContractSBP.init(bodyArgs)
    //         .success((response) => {
    //           const dialog = neodialog.show({
    //             text: '¿Deseas anular el proceso?',
    //             type: 'alert',
    //             buttons: ['+Aceptar', '-Cancelar'],
    //           });
    //           dialog.result.then((selected) => {
    //                 // El idx 0 corresponde a aceptar
    //             if (selected.idx === 0) {
    //               const bodyParams = {
    //                 codEstadoCierreExpediente: 'CS',
    //                 idInstanciaProceso: this.storageService.app.get('SIP').idProceso,
    //               };
    //               $log.debug(bodyParams);
    //                     // TODO: Es muy posible que le falten campos a esta llamada. Comprobar cuando se pueda probar.
    //               cancelContractSBP.execute('aceptarAnular', bodyParams)
    //                         .success((sbpResponse) => {
    //                           if (sbpResponse.data.mensajeError) {
    //                             throw new dtoFactory.SbpExceptionDto('CancelContractSBP', sbpResponse.data.mensajeError);
    //                           } else {
    //                             neoService.closeTab();
    //                           }
    //                         });
    //             }
    //           });
    //         });
  }
  // fin

    // when you change task, ask us if we "close" the task, but if it's closed, change
  cancelTaskRequest() {
    this.sipTaskManagerSrv.getTaskModule().inputData.metadata.estado === 'FI' ? this.sipTaskManagerSrv.endTask(this.sipTaskManagerSrv.getTaskModule().endTypes.INEXECUTION) : this.neodialog.show({
      html: this.$sce.trustAsHtml('<p>Se perderán los datos no guardados.</p>'),
      type: 'alert',
      buttons: ['+Aceptar', '-Cancelar'],
    }).result.then((result) => {
      if (result.idx === 0) {
        this.sipTaskManagerSrv.endTask(this.sipTaskManagerSrv.getTaskModule().endTypes.INEXECUTION);
      }
    });
  }

  loadContextData() {
    this.TerminalSessionSrv.get().then((session) => {
      const data = {
        commonData: {},
      };
      if (session.tipoOrigen === '73') {
        data.commonData.entityId = session.uorTerminal.sociedad;
        data.commonData.officeId = session.uorTerminal.oficina;
      } else if (session.tipoOrigen === '17') {
        data.commonData.entityId = session.uorOperaciones.sociedad;
        data.commonData.officeId = session.uorOperaciones.oficina;
      }
      this.storageService.app.store(data);
    }, (data) => {
      this.$log.error(data.message);
    });
  }

  editModeButtons() {
        // Ocultamos el boton cerrar.
    this.sipTaskManagerSrv.updateMenuOption({
      name: 'CerrarButton',
      cssClass: 'displayNone',
    });
        // Ocultamos el boton salir.
    this.sipTaskManagerSrv.updateMenuOption({
      name: 'ExitButton',
      cssClass: 'displayNone',
    });
        // Muestro el boton abandonar.
    this.sipTaskManagerSrv.updateMenuOption({
      name: 'AbandonarTareaButton',
      cssClass: 'bk-button-danger',
    });
        // Muestro el boton Aceptar
    this.sipTaskManagerSrv.updateMenuOption({
      name: 'FinalizarTareaButton',
      cssClass: 'bk-with-literal disabled-menu-option',
    });
        // Muestro el enlace
    this.sipTaskManagerSrv.updateMenuOption({
      name: 'CancelarProcesoLink',
      cssClass: '',
    });
  }

  readModeButtons() {
        // Deshabilito el enlace
    this.sipTaskManagerSrv.updateMenuOption({
      name: 'CancelarProcesoLink',
      cssClass: 'displayNone',
    });

        // Deshabilito el boton finalizar
    this.sipTaskManagerSrv.updateMenuOption({
      name: 'FinalizarTareaButton',
      cssClass: 'displayNone',
    });

        // Quito el boton abandonar
    this.sipTaskManagerSrv.updateMenuOption({
      name: 'AbandonarTareaButton',
      cssClass: 'displayNone',
    });

        // volvemos actualizar el boton
    this.sipTaskManagerSrv.updateMenuOption({
      name: 'ExitButton',
      cssClass: 'displayNone',
    });

        // Oculto el boton cerrar.
    this.sipTaskManagerSrv.updateMenuOption({
      name: 'CerrarButton',
      cssClass: '',
      onClick() {
                // Cerramos en ejecucion
        this.sipTaskManagerSrv.endTask(this.sipTaskManagerSrv.getTaskModule().endTypes.INEXECUTION);
                // volvemos actualizar el boton
        this.sipTaskManagerSrv.updateMenuOption({
          name: 'ExitButton',
          cssClass: '',
        });
                // ocultamos el cerrar
        this.sipTaskManagerSrv.updateMenuOption({
          name: 'CerrarButton',
          cssClass: 'displayNone',
        });
      },
    });
  }

  taskClosedModeButtons() {
    this.readModeButtons();
        // //Oculto el boton cerrar.
    this.sipTaskManagerSrv.updateMenuOption({
      name: 'CerrarButton',
      cssClass: 'displayNone',
    });
        // Muestro el boton salir
    this.sipTaskManagerSrv.updateMenuOption({
      name: 'ExitButton',
      cssClass: '',
    });
  }

    // //////////////////////////////////

  clientsToInterveners(clients) {
    this.$log.log(this.processDto);
    let interveners = '';
    angular.forEach(clients, (client) => {
      if (angular.isString(client)) {
        let intervener = client;
        while (intervener.length < 9) {
          intervener = `0${intervener}`;
        }
        interveners += `${intervener};`;
      }
    });
    return interveners;
  }

  updateProcessDto() {
    const updatedProcessDto = angular.extend(this.processDto, {});
    updatedProcessDto.datosComunes = {
      AQclienPrimerTitul: this.storageService.app.get('commonData').firstIntervenerId,
      AQcodProdComercial: this.storageService.app.get('commonData').productId,
      AQnumeroExpendiente: this.storageService.app.get('commonData').contractId,
      AQlistaIntervinien: this.clientsToInterveners([this.storageService.app.get('commonData').firstIntervenerId]),
      AQnombCliePrimTitu: this.storageService.app.get('commonData').firstIntervenerName,
      AQnomProdComercial: this.storageService.app.get('commonData').productName,
    };
    updatedProcessDto.datosEspecificos = {
      AXidCliente: this.storageService.app.get('commonData').firstIntervenerId,
      AXtipoProd: this.storageService.app.get('commonData').productId,
    };

    return updatedProcessDto;
  }

}

export default SipService;
