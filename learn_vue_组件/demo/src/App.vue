<script setup>
    import { reactive, ref } from 'vue'
    import Header from './components/header.vue'

    // 响应式数据才会影响页面渲染
    const web = reactive({
        user: 10,
        url: "google.com"
    })

    const emitsGetWeb = (data) => {
        console.log(data)
        web.url = data.url
    }

    const emitsUserAdd = (data) => {
        console.log(data)
        web.user += data
    }
</script>

<template>
    <Header @getWeb="emitsGetWeb" @userAdd="emitsUserAdd"/>

    {{ web.url }} - {{ web.user }}
</template>

<style scoped>

</style>