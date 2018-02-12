import { OPEN_TOPIC_OVERVIEW, CLOSE_TOPIC_OVERVIEW } from '../mutation-constants'

const state = {
  visable: false
}

const mutations = {
  [OPEN_TOPIC_OVERVIEW] (state) {
    state.visable = true
  },
  [CLOSE_TOPIC_OVERVIEW] (state) {
    state.visable = false
  }
}

const actions = {
  openTopicOverview ({commit}) {
    commit(OPEN_TOPIC_OVERVIEW)
  },
  closeTopicOverview ({commit}) {
    commit(CLOSE_TOPIC_OVERVIEW)
  }
}

export default {
  state,
  mutations,
  actions
}
