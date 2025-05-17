<script setup>
    import { reactive } from 'vue'
    import Header from './components/header.vue'
    import Footer from './components/footer.vue'

    // 响应式数据才会影响页面渲染
    const propsWeb = reactive({
        user: 10,
        url: "google.com"
    })

    const userAdd = () => {
        propsWeb.user++
        console.log(propsWeb.user);
    }
</script>

<template>
    <Header propsName="秦一骅" propsUrl="google.com"/>
    秦一骅
    <h1>秦一骅</h1>

    <button @click="userAdd">添加用户</button>

    <Footer :="propsWeb"/>
</template>

<style scoped>

</style>