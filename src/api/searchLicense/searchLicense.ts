// import { searchLicense } from '@/models';
import mockData from './mockData';

// const fetchLicense = () => new Promise((resolve, reject) => {
//   window.setTimeout(() => {
//     // ¡Cumplimos la promesa!
//     resolve(mockLicense.json());
//   }, Math.random() * 2000);
// });

const fetchLicense = () => new Promise((resolve) => {
  window.setTimeout(() => {
    // ¡Cumplimos la promesa!
    resolve(mockData.json());
  },                Math.random() * 2000);
});


// https://my.api.mockaroo.com/vehiculos.json?key=daa3d0e0


export default fetchLicense;
