export default {
    namespaced: true,
    state: {
        list: null,
        info: null,
        id: null 
    },
    actions: {
        setList: ({ commit }, payload) => commit('SET_LIST', payload),
        setInfo: ({ commit }, payload) => commit('SET_INFO', payload),
        setCurrentPersonId: ({ commit }, payload) => commit('SET_CURRENT_PERSON_ID', payload)
    },
    mutations: {
        'SET_LIST': (state, payload) => {
            state.list = JSON.parse(JSON.stringify([].concat(payload)))
        },
        'SET_INFO': (state, payload) => { state.info = Object.assign({}, state.info, payload) },
        'SET_CURRENT_PERSON_ID': (state, payload) => { state.id = payload }
    },
    getters: {
        getList: state => state.list,
        getInfo: state => state.info,
        getCurrentPersonId: state => state.id
    }
}