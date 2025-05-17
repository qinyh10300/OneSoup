<script setup>
    import { ref, provide } from 'vue'
    import Header from './components/header.vue'

    // 响应式数据才会影响页面渲染
    const web = {
        name: "秦一骅",
        url: "google.com"
    }
    provide("provideWeb", web)
    // provide-inject方式可以跨组件传递，但是只能通过父组件传递给子组件，不能从子组件传递给父组件

    const user = ref(0)
    provide("provideUser", user)

    const userAdd = () => {
        user.value++
    }
    provide("provideFuncUserAdd", userAdd)
</script>

<template>
    <h3>App.vue-Top组件</h3>

    user: {{ user }}

    <Header/>
</template>

<style scoped>

</style>