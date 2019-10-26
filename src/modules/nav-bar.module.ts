// tslint:disable: variable-name
// tslint:disable: no-shadowed-variable
import Vue from 'vue';
import navBarTypes from '@/types/nav-bar';
import { State } from './state.interface';

const state: State = {
    modalState: false,
    modalType: null,
};
const getters = {
    [navBarTypes.getters.modalState]: (state: State) => state.modalState,
    [navBarTypes.getters.modalType]: (state: State) =>
        state.modalType,
};
const actions = {
    [navBarTypes.actions.changeModalState]: ({ commit }: any) => {
        // Si la modal esta abierta
        if (state.modalState) {
            commit(navBarTypes.mutations.closeModal);
        } else {
            // si la modal esta cerrada
            commit(navBarTypes.mutations.openModal);
        }
    },
    [navBarTypes.actions.modalType]: ({ commit }: any, type: string) => {
        commit(navBarTypes.mutations.modalType, type);
    },
};
const mutations = {
    [navBarTypes.mutations.openModal]: (state: State) => {
        if (!state.modalState) {
            state.modalState = true;
        }
    },
    [navBarTypes.mutations.closeModal]: (state: State) => {
        if (state.modalState) {
            state.modalState = false;
        }
    },
    [navBarTypes.mutations.modalType]: (state: State, type: string) => {
        state.modalType = type;
    },
};

export const navBarModule = {
    state,
    getters,
    actions,
    mutations,
};
