export default {
    namespaced: true,
    state: {
        isLoading: false,
        sourceName: null
    },
    actions: {
        setLoading: ({ commit }, payload) => commit('SET_LOADING', payload),
        setSourceName: ({ commit }, payload) => commit('SET_SOURCE_NAME', payload),
    },
    mutations: {
        SET_LOADING: (state, payload) => { state.isLoading = payload },
        SET_SOURCE_NAME: (state, payload) => { state.sourceName = payload }
    },
    getters: {
        getLoading: state => state.isLoading,
        getSourceName: state => state.sourceName
    }
}