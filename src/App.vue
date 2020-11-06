<template>
  <main class="main">
    <div class="main__header">
      <img class="main__header__logo" alt="SW logo" src="@/assets/logo.png">
      <div class="main__header__links">
        <router-link class="main__header__link" to="/persons/list">Персонажи</router-link> |
        <router-link class="main__header__link" to="/planets/list">Планеты</router-link>
        <router-link class="main__header__link" to="/starships/list">Корабли</router-link>
      </div>
    </div>
    <router-view class="main__content"/>
  </main> 
</template>

<style lang="scss">
  .main {
    &__header {
      &__logo {
        width: 360px;
      }
      
    }  
  }
</style>
