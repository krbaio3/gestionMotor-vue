// // import { searchLicense } from '@/models';
// import mockData from './mockData';

// // const fetchLicense = () => new Promise((resolve, reject) => {
// //   window.setTimeout(() => {
// //     // ¡Cumplimos la promesa!
// //     resolve(mockLicense.json());
// //   }, Math.random() * 2000);
// // });

// const fetchLicense = () => new Promise((resolve) => {
//   window.setTimeout(() => {
//     // ¡Cumplimos la promesa!
//     resolve(JSON.parse(mockData.mockLicense));
//   }, Math.random() * 2000);
// });

// export default fetchLicense;

import { vehicleModel } from '../../models/';

export const licenseRequest = (license: vehicleModel): Promise<boolean> => (
  isValidLicense(license) ?
    Promise.resolve(true) :
    Promise.reject('Not valid login')
);

const isValidLicense = (license: vehicleModel) => (
  license.license === ('m3928nb').toUpperCase()
);
