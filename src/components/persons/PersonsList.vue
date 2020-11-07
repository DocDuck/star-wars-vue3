<template>
  <div class="persons-list">
    <List @onClick="onClickHandler" :list="getList"/>
  </div>
</template>
<script>
import List from '@/components/List'
import { mapGetters, mapActions } from 'vuex'
import { getIdFromUrlField } from '@/utils/helpers.js'
export default {
  name: 'PersonList',
  components: {
    List
  },
  computed: {
    ...mapGetters('persons', ['getList'])
  },
  methods: {
    ...mapActions('persons', ['setCurrentPersonId']),
    onClickHandler (person) {
      const personId = getIdFromUrlField(person.url)
      this.setCurrentPersonId(personId)
      this.$router.push('/persons/info')
    },
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