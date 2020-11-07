import Api from '@/api/starApiService'

let apiPlugin = (store) => {
    const dispatch = store.dispatch
    const getter = store

    const api = new Api()

    store.subscribe( async (mutation) => {
        const payload = mutation.payload
        const type = mutation.type
        // обзервер для перехвата мутаций обращения к апи
        if (type === 'api/SET_SOURCE_NAME') {
            dispatch('api/setLoading', true)  
            if (payload === 'persons') {
                try {
                    const response = await api.getAllPersons()
                    const list = response?.results || []
                    dispatch('persons/setList', list)
                } catch {
                    // TODO экран ошибки
                } finally {
                    dispatch('api/setLoading', false)
                }

            }
            if (payload === 'person') {
                try {
                    const response = await api.getPerson(getter['persons/getCurrentPersonId'])
                    if (response?.name) dispatch('persons/setInfo', response)
                } catch {
                    // TODO экран ошибки
                } finally {
                    dispatch('api/setLoading', false)
                }

                dispatch('api/setLoading', false)
            }
            // TODO обработать остальные запросы (планеты, корабли)
        }
    })
}

export default apiPlugin