import { PositionType } from '@/api/common'

const state = {
  position: []
}

const mutations = {
  SET_LOCATION: (state: any, val: PositionType) => {
    state.position = val
  }
}

const actions = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
