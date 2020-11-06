export default {
    namespaced: true,
    state: {
        list: null,
        info: null        
    },
    actions: {
        setList: ({ commit }, payload) => commit('SET_LIST', payload),
        setInfo: ({ commit }, payload) => commit('SET_INFO', payload),
    },
    mutations: {
        'SET_LIST': (state, payload) => { state.list = payload },
        'SET_INFO': (state, payload) => { state.info = payload },
    },
    getters: {
        getList: state => state.list,
        getInfo: state => state.info,
    }
}