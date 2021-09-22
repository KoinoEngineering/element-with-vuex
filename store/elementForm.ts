import { ActionTree, GetterTree, MutationTree } from "vuex/types";

const namespaced = true;
interface Form {
    user: string;
    region: string;
}
interface ElementFormState {
    form: Form;
}

function initialState (): ElementFormState {
    return {
        form: {
            user: "default",
            region: "",
        },
    };
}

const state = () => initialState();

const getters: GetterTree<ElementFormState, ElementFormState> = {
    state: state => state.form,
};

const mutations: MutationTree<ElementFormState> = {
    updateState: (state, data: Partial<Form>) => {
        state.form = {
            ...state.form,
            ...data,
        };
    },
};

const actions: ActionTree<ElementFormState, ElementFormState> = {
    updateState: ({ commit }, data: Partial<Form>) => {
        commit("updateState", data);
    },
};

export default {
    namespaced,
    state,
    getters,
    mutations,
    actions,
};
