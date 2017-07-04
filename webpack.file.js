module.exports = () => {
    /* INPUT*/

  const src = './src/';
  const app = './src/app/';
  const modules = './src/app/modules/';
  const assets = './src/app/assets/';
  const sass = './src/app/sass/';
  const root = './';
  const mainJs = './main.js';
  const mainHtml = './index.html';

    /* OUTPUT*/

  const dist = './dist/';
  const assetsDist = './dist/assets/';
  const fonts = './dist/assets/fonts/';
  const bundleJS = './dist/bundle.js';
  const bundleCSS = './dist/bundle.css';
  const indexDist = './dist/index.html';

    /* Variables*/
  const LOCAL = 'local';

  const config = {
        /** INPUT*/
    src,
    app,
    modules,
    assets,
    sass,
    root,
    mainJs,
    mainHtml,
        /** OUTPUT */
    dist,
    assetsDist,
    fonts,
    bundleJS,
    bundleCSS,
    indexDist,
    /* Variables */
    LOCAL,
  };

  return config;
};
