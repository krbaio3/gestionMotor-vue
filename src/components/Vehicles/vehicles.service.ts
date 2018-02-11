// // atob() is used to convert base64 encoded PDF to binary-like data.
// // (See also https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/
// // Base64_encoding_and_decoding.)
// let pdfData = atob(
//   'JVBERi0xLjcKCjEgMCBvYmogICUgZW50cnkgcG9pbnQKPDwKICAvVHlwZSAvQ2F0YWxvZwog' +
//   'IC9QYWdlcyAyIDAgUgo+PgplbmRvYmoKCjIgMCBvYmoKPDwKICAvVHlwZSAvUGFnZXMKICAv' +
//   'TWVkaWFCb3ggWyAwIDAgMjAwIDIwMCBdCiAgL0NvdW50IDEKICAvS2lkcyBbIDMgMCBSIF0K' +
//   'Pj4KZW5kb2JqCgozIDAgb2JqCjw8CiAgL1R5cGUgL1BhZ2UKICAvUGFyZW50IDIgMCBSCiAg' +
//   'L1Jlc291cmNlcyA8PAogICAgL0ZvbnQgPDwKICAgICAgL0YxIDQgMCBSIAogICAgPj4KICA+' +
//   'PgogIC9Db250ZW50cyA1IDAgUgo+PgplbmRvYmoKCjQgMCBvYmoKPDwKICAvVHlwZSAvRm9u' +
//   'dAogIC9TdWJ0eXBlIC9UeXBlMQogIC9CYXNlRm9udCAvVGltZXMtUm9tYW4KPj4KZW5kb2Jq' +
//   'Cgo1IDAgb2JqICAlIHBhZ2UgY29udGVudAo8PAogIC9MZW5ndGggNDQKPj4Kc3RyZWFtCkJU' +
//   'CjcwIDUwIFRECi9GMSAxMiBUZgooSGVsbG8sIHdvcmxkISkgVGoKRVQKZW5kc3RyZWFtCmVu' +
//   'ZG9iagoKeHJlZgowIDYKMDAwMDAwMDAwMCA2NTUzNSBmIAowMDAwMDAwMDEwIDAwMDAwIG4g' +
//   'CjAwMDAwMDAwNzkgMDAwMDAgbiAKMDAwMDAwMDE3MyAwMDAwMCBuIAowMDAwMDAwMzAxIDAw' +
//   'MDAwIG4gCjAwMDAwMDAzODAgMDAwMDAgbiAKdHJhaWxlcgo8PAogIC9TaXplIDYKICAvUm9v' +
//   'dCAxIDAgUgo+PgpzdGFydHhyZWYKNDkyCiUlRU9G');

// // Disable workers to avoid yet another cross-origin issue (workers need
// // the URL of the script to be loaded, and dynamically loading a cross-origin
// // script does not work).
// // PDFJS.disableWorker = true;

// // The workerSrc property shall be specified.
// PDFJS.workerSrc = '//mozilla.github.io/pdf.js/build/pdf.worker.js';

// // Using DocumentInitParameters object to load binary data.
// let loadingTask = PDFJS.getDocument({ data: pdfData });
// loadingTask.promise.then(function (pdf) {
//   console.log('PDF loaded');
  
//   // Fetch the first page
//   let pageNumber = 1;
//   pdf.getPage(pageNumber).then(function (page) {
//     console.log('Page loaded');
    
//     const scale = 1.5;
//     const viewport = page.getViewport(scale);

//     // Prepare canvas using PDF page dimensions
//     const canvas = document.getElementById('the-canvas');
//     const context = canvas.getContext('2d');
//     canvas.height = viewport.height;
//     canvas.width = viewport.width;

//     // Render PDF page into canvas context
//     const renderContext = {
//       canvasContext: context,
//       viewport,
//     };
//     const renderTask = page.render(renderContext);
//     renderTask.then(function () {
//       console.log('Page rendered');
//     });
//   });
// },                       function (reason) {
//   // PDF loading error
//   console.error(reason);
// });

interface ISelect {
  value: string | null;
  text: string;
  disabled?: boolean;
}

let inicio = { value: null, text: '-----' };

export const tipoCombustible : ISelect[] = [
  inicio,
    { value: 'g', text: 'Gasolina' },
    { value: 'd', text: 'Diesel' },
    { value: 'h', text: 'Hibrido' },
    { value: 'e', text: 'Electrico' },
    { value: 'o', text: 'Otros', disabled: true },
];

export const powerCodMotor: ISelect[] = [
  inicio,
    { text: '150', value: 'B205E' },
    { text: '154', value: 'B204E' },
    { text: '185', value: 'B204L' },
    { text: '200', value: 'B205/4R' },
    { text: '215', value: 'Maptum St1' },
    { text: '235', value: 'Maptum St2' },
];

export const cilindrada: ISelect[] = [
  inicio,
    { value: '1000', text: '1.0' },
    { value: '1200', text: '1.2' },
    { value: '1400', text: '1.4' },
    { value: '1500', text: '1.5' },
    { value: '1600', text: '1.6' },
    { value: '2000', text: '2.0' },
];
