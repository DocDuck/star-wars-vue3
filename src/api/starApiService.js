export default class starApiService {
    _baseUrl = 'https://swapi.dev/api'

    // возвращает ресурс
    async getResource(url) {
        const result = await fetch(`${this._baseUrl}/${url}`)

        if (!result.ok) {
            throw new Error(`Не могу получить данные из ${url}, получен ответ ${result.status}`)
        }

        return await result.json()
    }

    // возвращает список всех персонажей SW
    getAllPersons() {
        return this.getResource(`people`)
    }

    // возвращает персонажа по айди
    getPerson(id) {
        if (!(id && Number(id) >= 0 && (Number(id)^0) === Number(id))) { throw new Error(`Вызов должен содержать натуральночисленный параметр id`) }
        return this.getResource(`people/${id}`)
    }

}