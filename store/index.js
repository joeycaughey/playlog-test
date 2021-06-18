export const strict = false

export const state = () => ({

})

export const mutations = {

}

export const actions = {
  nuxtServerInit ({ commit, dispatch }, {app, req, redirect}) {
    console.log('RUNNING GLOBAL SERVER INIT.')
  },
  nuxtClientInit ({ commit, dispatch }, {app, req, redirect}) {
    console.log('RUNNING GLOBAL CLIENT INIT.')
    dispatch('images/init')
  }
}
