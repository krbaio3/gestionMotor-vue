// import { searchLicense } from '@/models';
import { mockLicense } from './mockData';

// const fetchLicense = () => new Promise((resolve, reject) => {
//   window.setTimeout(() => {
//     // ¡Cumplimos la promesa!
//     resolve(mockLicense.json());
//   }, Math.random() * 2000);
// });

const fetchLicense = () => new Promise((resolve) => {
  window.setTimeout(() => {
    // ¡Cumplimos la promesa!
    resolve(mockLicense.json());
  }, Math.random() * 2000);
});

export default fetchLicense;
