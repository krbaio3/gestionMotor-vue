// import { FieldValidationResult } from 'lc-form-validation';

export interface vehicleModel {
  license: string;
  brand: string;
  model: string;
  version: string;
  gas: string;
  power: string;
  codEngine: string;
  km: Number;
  make: Date;
  VIN: string;
  ITV: Date;
  ficha: string;
  obser: string;
}

export const createEmptyLicenseEntity = (): vehicleModel => ({
  license: '',
  brand: '',
  model: '',
  version: '',
  gas: '',
  power: '',
  codEngine: '',
  km: 0,
  make: null,
  VIN: '',
  ITV: null,
  ficha: '',
  obser: '',
});

// export interface LicenseError {
//   login: FieldValidationResult;
//   password: FieldValidationResult;
// }

// export const createEmptyLoginError = (): LoginError => ({
//   login: {
//     key: 'login',
//     succeeded: true,
//     errorMessage: '',
//     type: '',
//   },
//   password: {
//     key: 'password',
//     succeeded: true,
//     errorMessage: '',
//     type: '',
//   },
// });
