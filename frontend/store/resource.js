export const state = () => ({
  resources: []
});

export const getters = {
  getResources: state => state.resources
};

export const mutations = {
  SET_RESOURCES(state, payload){
    state.resources = payload
  }
};

export const actions = {
  setResources({commit}, data){
    commit('SET_RESOURCES', data);
  }
}
