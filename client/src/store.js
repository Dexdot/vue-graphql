import Vue from 'vue';
import Vuex from 'vuex';

import { GET_POSTS, SIGNIN_USER } from './queries';
import { defaultClient as apolloClient } from './main';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    posts: [],
    loading: false
  },
  getters: {
    posts: state => state.posts,
    loading: state => state.loading
  },
  mutations: {
    setPosts: (state, payload) => {
      state.posts = payload;
    },
    setLoading: (state, payload) => {
      state.loading = payload;
    }
  },
  actions: {
    getPosts: ({ commit }) => {
      commit('setLoading', true);

      apolloClient
        .query({
          query: GET_POSTS
        })
        .then(({ data }) => {
          commit('setPosts', data.getPosts);
          commit('setLoading', false);
        })
        .catch(err => {
          commit('setLoading', false);
          console.error(err);
        });
    },
    signinUser: ({ commit }, payload) => {
      apolloClient
        .mutate({
          mutation: SIGNIN_USER,
          variables: payload
        })
        .then(({ data }) => {
          const { token } = data.signinUser;
          localStorage.setItem('token', token);
        })
        .catch(err => {
          console.error(err);
        });
    }
  }
});
