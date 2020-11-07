<template>
    <ul class="list overflow-y-scroll">
        <li v-for="item in list" :key="item+key" class="list__item">
            {{ item }}
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
        }
    }
</style>