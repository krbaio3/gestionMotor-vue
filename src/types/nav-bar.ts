import { namespace } from '@/utils/namespace';
import { ITypes } from './types.interface';

const navBar: ITypes = {
    getters: [
        'modalState',
        'modalType',
    ],
    actions: [
        'changeModalState',
        'modalType',
    ],
    mutations: [
        'openModal',
        'closeModal',
        'modalType',
    ],
};

export default namespace('nav-bar', navBar);
