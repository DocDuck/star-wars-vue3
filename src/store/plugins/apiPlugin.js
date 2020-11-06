import Api from '@/api/starApiService'

let apiPlugin = (store) => {
    const dispatch = store.dispatch
    // const getter = store.getters

    const api = new Api()

    store.subscribe( async (mutation) => {
        const payload = mutation.payload
        const type = mutation.type
        // обзервер для перехвата мутаций обращения к апи
        if (type === 'app/SET_SOURCE_NAME') {
                if (payload === 'persons') {
                    const list = await api.getAllPersons()
                    dispatch('persons/setList', list)
                    dispatch('api/setLoading', false)  
                }        
        }
    })
}

export default apiPlugin