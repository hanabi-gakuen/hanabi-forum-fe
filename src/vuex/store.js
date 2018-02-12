import Vue from 'vue'
import Vuex from 'vuex'
// Bring in our constants (those we need in this file)
import { USER_ID } from './mutation-constants'
// Here's where we import the messages module
import topicOverview from './modules/topic-overview'

// Set a debug boolean flag
const debug = process.env.NODE_ENV !== 'production'

// Use vuex
Vue.use(Vuex)
Vue.config.debug = debug

export default new Vuex.Store({

  // rootstate just contains our clientId
  state: {
    userId: null
  },

  // An action to set the clientId
  actions: {
    setUserId ({commit, state}, id) {
      commit(USER_ID, id)
    }
  },

  // A getter for the clientId
  getters: {
    getUserId: (state) => {
      return state.userId
    }
  },

  // We've moved most of the mutations out to the module(s). You can
  // learn more about namespace concerns, constants and more in the
  // messages module, the mutation-constants file or the blog post for
  // this demo.
  //
  // This mutation is commited by our setClientId action
  mutations: {
    [USER_ID] (state, id) {
      state.userId = id
    }
  },

  // This is where the messages module gets added to the Vuex store
  modules: {
    topicOverview
  },

  // Use strict mode?
  strict: debug

})
