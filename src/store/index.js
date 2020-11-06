import { createStore } from 'vuex'
// modules
import api from './modules/api'
import persons from './modules/persons'
import planets from './modules/planets'
import starships from './modules/starships'
// plugins
import apiPlugin from './plugins/apiPlugin'

export default createStore({
  strict: true,
  modules: {
    api,
    persons,
    planets,
    starships
  },
  plugins: [
    apiPlugin
  ]
})
