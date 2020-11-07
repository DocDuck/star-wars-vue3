<template>
    <ul class="list overflow-y-scroll">
        <li v-for="(item, key) in list" :key="item+key" @click="$emit('on-click', item)" class="list__item">
            {{ item.name }}
        </li>    
    </ul>     
</template>

<script>
    export default {
        name: 'List',
        props: {
            list: {
                type: Array,
                default: function () { return [] }
            }
        }
    }    
</script>

<style lang="scss">
    .list {
        display: flex;
        flex-direction: column;
        width: 100%;
        padding: 16px;
        &__item {
            display: flex;
            align-items: center;
            padding: 16px 4px;
            font-size: 16px;
            cursor: pointer;
        }
    }
</style>