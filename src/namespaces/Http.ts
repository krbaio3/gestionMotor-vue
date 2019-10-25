import Vue from 'vue';
import { AxiosRequestConfig, AxiosResponse, AxiosInstance, AxiosStatic } from 'axios';

declare module 'vue/types/vue' {
    interface VueConstructor {
        axios: AxiosStatic;
        $log: any;
    }
}

export namespace Http {
    export class ApiJWTService {
        constructor() {
            this.request();
            this.response();
        }

        protected request() {
            Vue.axios.interceptors.request.use((config: AxiosRequestConfig) => {
                // tslint:disable-next-line:no-console
                Vue.$log.debug('Axios resquest');
                return config;
            }, (error: any) => {
                // tslint:disable-next-line:no-console
                Vue.$log.error('Axios resquest Error');
                return Promise.reject(error);
            });
        }
        protected response() {
            Vue.axios.interceptors.response.use((response: AxiosResponse) => {
                // tslint:disable-next-line:no-console
                Vue.$log.debug('Axios resquest');
                return response;
            }, (error: any) => {
                // tslint:disable-next-line:no-console
                Vue.$log.error('Axios resquest Error');
                return Promise.reject(error);
            });
        }
    }
}
