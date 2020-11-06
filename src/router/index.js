import { createRouter, createWebHistory } from 'vue-router'
// views
import Persons from '../views/Persons.vue'
import Planets from '../views/Planets.vue'
import Starships from '../views/Starships.vue'
// person
import PersonsList from '../components/persons/PersonsList.vue'
import PersonInfo from '../components/persons/PersonInfo.vue'
// Planets
import PlanetsList from '../components/planets/PlanetsList.vue'
import PlanetInfo from '../components/planets/PlanetInfo.vue'
// Starships
import StarshipsList from '../components/starships/StarshipsList.vue'
import StarshipInfo from '../components/starships/StarshipInfo.vue'

const routes = [
  { 
    path: '/',
    redirect: '/persons'
  },
  {
    path: '/persons',
    name: 'Persons',
    component: Persons,
    children: [
      {
        path: '/persons/list',
        name: 'PersonsList',
        component: PersonsList
      },
      {
        path: '/persons/info',
        name: 'PersonInfo',
        component: PersonInfo
      }
    ]
  },
  {
    path: '/planets',
    name: 'Planets',
    component: Planets,
    children: [
      {
        path: '/planets/list',
        name: 'PlanetsList',
        component: PlanetsList
      },
      {
        path: '/planets/info',
        name: 'PlanetInfo',
        component: PlanetInfo
      }
    ]
  },
  {
    path: '/starships',
    name: 'Starships',
    component: Starships,
    children: [
      {
        path: '/starships/list',
        name: 'StarshipsList',
        component: StarshipsList
      },
      {
        path: '/starships/info',
        name: 'StarshipInfo',
        component: StarshipInfo
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
