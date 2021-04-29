export const state = () => ({
  serachParam: {
    state: "",
    district: "",
    category: ""
  }
});

export const getters = {
  getSerachParam: state => state.serachParam,
};

export const mutations = {
  SET_SEARCH(state, payload) {
    state.serachParam = payload;
  }
};

export const actions = {

};
