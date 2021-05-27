export const state = () => ({
  rstate: "West Bengal",
  district: "",
  category: ""
});

export const getters = {
  getState: state => state.rstate,
  getDistrict: state => state.district,
  getCategory: state => state.category
};

export const mutations = {
  SET_STATE(state, payload) {
    state.rstate = payload;
  },
  SET_DISTRICT(state, payload) {
    state.district = payload;
  },
  SET_CATEGORY(state, payload) {
    state.category = payload;
  }
};

export const actions = {};
