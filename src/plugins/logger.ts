import Vue from 'vue';
import VueLogger from 'vuejs-logger';

const isProduction = process.env.NODE_ENV === 'production';
const options = {
    isEnabled: true,
    logLevel: isProduction ? 'error' : 'debug',
    // logLevel: process.env.VUE_APP_LOGGING_LEVEL,
    stringifyArguments: false,
    showLogLevel: true,
    showMethodName: true,
    separator: '|',
    showConsoleColors: true,
};

Vue.use(VueLogger, options);
