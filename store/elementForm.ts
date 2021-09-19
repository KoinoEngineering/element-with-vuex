import { ActionTree, GetterTree, MutationTree } from "vuex/types";

const namespaced = true;

interface ElementFormState {
    user: string;
    region: string;
}

function initialState (): ElementFormState {
    return {
        user: "default",
        region: "",
    };
}

const state = () => initialState();

const getters: GetterTree<ElementFormState, ElementFormState> = {
    user: state => state.user,
    region: state => state.region,
};

const mutations: MutationTree<ElementFormState> = {
    updateUser: (state, user) => {
        state.user = user;
    },
};

const actions: ActionTree<ElementFormState, ElementFormState> = {
    updateUser: ({ commit }, user) => {
        commit("updateUser", user);
    },
};

export default {
    namespaced,
    state,
    getters,
    mutations,
    actions,
};
