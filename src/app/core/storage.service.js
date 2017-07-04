class StorageService {
  constructor($window, $log) {
    'ngInject';

    const service = {};
    /*  SessionStorage
  Client window.sessionStorage. Ment to store TABITs, and used by views to get the
  text value of various id's. IE: Relation ID
  Data stored/retrived is properly serialized.
  The Controller attached to the view should expose this.

  Way to store data: storageService.session.store('stuff', {things: {thangs: 'thongs'}});
  Way to acess data: storageService.session.get('stuff').things.thangs; */
    const sessionStorage = $window.sessionStorage;

  /*  ApplicationStorage
  Ment to server as a session context where different data can be stored and retrived
  in different modules/components. It's structure is rigid (can't store anything not
  present in 'dataStructure'), and shouldn't be modified without a good reason.
  Stores and retrieves data by value and not by reference

  Way to store data: storageService.app.store({stuff: {things: {thangs: 'thongs'}}});
  Way to access data: storageService.app.get('stuff').things.thangs;	*/
    const appStorage = new ApplicationStorage();
    service.session = {
      get,
      store };

    service.app = {
      get: appStorage.get,
      store: appStorage.store,
    };

    sessionStorage.clear();
  }
  get(key) {
    return angular.fromJson(sessionStorage[key]);
  }
  store(key, value) {
    const oldData = get(key) || {};
    sessionStorage[key] = angular.toJson(value, true);
  }
  ApplicationStorage() {
    const dataStructure = {
      apiHeaders: {
        applicationCode: null,
      },
      SIP: {
        instanciaSIP: null,
      },
      commonData: {
        contractId: null,
        firstIntervenerName: null,
        firstIntervenerId: null,
        productId: null,
        productName: null,
        currencyId: null,
        openingDate: null,
        officeId: null,
        entityId: null,
        state: null,
      },
    };
    StorageObject.call(this, dataStructure, true);
  }

  StorageObject(objData) {
    const data = angular.copy(objData);
    this.store = (obj) => {
      objectToStorage(obj, data);
      $log.debug('storageService : Stored data', obj, data);
    };
    this.get = function (property) {
      if (angular.isUndefined(property)) {
        return data;
      } else if (angular.isUndefined(data[property])) {
          $log.debug('storageService : Data doesnt exist in the Storage', property);
          return undefined;
        } else if (data[property] === null) {
          return undefined;
        }
      return angular.copy(data[property]);
    };
  }

  objectToStorage(obj, storage) {
    angular.forEach(obj, (value, key) => {
      if (angular.isFunction(value)) {
        $log.debug('storageService | Cant store Functions.');
      } else if (!storage.hasOwnProperty(key)) {
          $log.error('storageService | Cant store data not present in dataStructure', key, value);
        } else if (angular.isObject(value) && !angular.isArray(value)) {
          objectToStorage(value, storage[key]);
        } else {
          storage[key] = angular.copy(value);
        }
    });
  }
}

export default StorageService;
