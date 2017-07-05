module.exports = () => {
/**
 * Estas son las variables que hay que modificar con cada proyecto:
 *  - rootHtml : fichero por el que se va a arrancar la aplicación
 *  - namejs: nombre del javascript de la tarea a distribuir
 *  - namecss: nombre del css de la tarea a distribuir
 *  - namehtml: nombre del html de la tarea a distribuir
 *  - port: puerto para desarrollar en local
 *  - mockPort: url donde se levanta el servidor de mocks (expressJS)
 */
  const rootHtml = '/impediments.html';
  const namejs = 'bankia-module-impediments.js';
  const namecss = 'bankia-module-impediments.css';
  const namehtml = 'bankia-module-impediments.html';
  const port = 8088;
  const mockPort = 'http://localhost:9004/';
/**
 * FIN de variables a modificar
 */
  const src = './src';
  const scripts = './scripts';
  const styles = './styles';
  const assets = './assets';
  const views = './views';
  const root = './';
  const parentDirectory = '..';
  const dist = 'dist';
  const distRoot = './dist/';
  const specRunnerFile = 'specs.html';
  const indexJs = '/index.js';
  const indexHtml = 'index.html';
  const mainJs = './main.js';
  const mainScss = '/main.scss';
  const bowerComponents = 'bower_components';
  const nodeModules = 'node_modules';

  const config = {
    rootHtml,
    scripts,
    styles,
    views,
    port,
    mockPort,
    src,
    assets,
    root,
    specRunnerFile,
    dist,
    distRoot,
    namecss,
    namehtml,
    namejs,
    indexHtml,
    mainJs,
    nodeModules,
    bowerComponents,
    parentDirectory,
    appStyles: styles + mainScss,
    copyHtmlFrom: views + rootHtml,
    copyHtmlTo: namehtml,
    entryDevelop: mainJs,
    entryProduction: scripts + indexJs,
  };

  return config;
};
