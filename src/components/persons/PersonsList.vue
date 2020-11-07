<template>
  <div class="persons-list">
    <List :list="personsNames"/>
  </div>
</template>
<script>
import List from '@/components/List'
import { mapGetters } from 'vuex'
export default {
  name: 'PersonList',
  components: {
    List
  },
  computed: {
    ...mapGetters('persons', ['getList']),
    personsNames () {
      return this.getList.map(item => item.name)
    }
  }
  
}
</script>

<style lang="scss">
  .persons-list {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
</style>