<script setup>
// 导入子组件
import Header from "@/components/header.vue"
import Footer from "@/components/footer.vue"
</script>

<template>
    <!-- 共享的组件，不需要进行路由的嵌套 -->
    <Header/>

    <!-- 需要在父节点渲染路由，根据不同的子路由加载不同的子页面 -->
    <router-view />

    <Footer/>
</template>

<style scoped>

</style>