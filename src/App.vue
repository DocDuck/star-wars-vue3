<template>
  <main class="container flex flex-col px-10 h-full lg:container lg:mx-auto">
    <div class="container__header mb-4 flex flex-col items-center centered">
      <img class="container__header__logo h-40 p-3" alt="SW logo" src="@/assets/logo.png">
      <div class="container__header__links text-xl font-bold text-gray-300">
        <router-link class="container__header__link" to="/persons/list">Персонажи</router-link> |
        <router-link class="container__header__link" to="/planets/list">Планеты</router-link> |
        <router-link class="container__header__link" to="/starships/list">Корабли</router-link>
      </div>
    </div>
    <Loader v-if="getLoading"></Loader>
    <router-view v-else class="container__content flex-grow overflow-hidden"/>
  </main> 
</template>

<script>
  import Loader from '@/components/Loader.vue'
  import { mapGetters } from 'vuex'

  export default {
    name: 'PersonList',
    components: {
      Loader
    },
    computed: {
      ...mapGetters('api', ['getLoading'])
    }
  }
</script>

<style lang="scss">
  #app {
    width: 100vw;
    height: 100vh;    
  }
</style>
