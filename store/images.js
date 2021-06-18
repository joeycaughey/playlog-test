import axios from 'axios'

export const state = () => ({
  list: [],
  pinned: []
})

export const getters = {
  list (state) {
    return state.list.filter((image)=>{
      return !_.find(state.pinned, (o) => { return o.id == image.id })
    })
  },
  pinned (state) {
    return state.pinned
  }
}

export const mutations = {
  POPULATE (state, values) {
    state.list = values
  },
  TOGGLE_PIN (state, image) {
    var index = state.pinned.indexOf(image);
    if (index == -1) {
      state.pinned.push(image)
    } else {
      state.pinned.splice(index, 1);
    }
  },
  UPDATE (state, values) {
    state.list = values
  },
  PINNED_UPDATE (state, values) {
    state.pinned = values
  }
}

export const actions = {
  async init ({ commit, state }) {
    if (state.list.length==0) { 
      await axios.get('https://api.unsplash.com/photos?client_id=83f9a6b38b36d72265f59f61eab14ea71b38156bed47876d4452f88b336472e2&page=1&per_page=1000').then((response) => {
        commit('POPULATE', response.data)
      })
    }
  }
}
