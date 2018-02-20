import { SWITCH_TOPIC } from '../mutation-constants'

const state = {
  visable: {
    topic: false
  },
  data: {
    topicId: '0'
  }
}

function switchVisable (val) {
  for (let i in state.visable) {
    state.visable[i] = false
  }
  if (state.visable[val] === false) {
    state.visable[val] = true
  }
}

const mutations = {
  [SWITCH_TOPIC] (state, topicId) {
    switchVisable('topic')
    state.data['topicId'] = topicId
  }
}

const actions = {
  switchTopic ({commit}, topicId) {
    commit(SWITCH_TOPIC, topicId)
  }
}

export default {
  state,
  mutations,
  actions
}
