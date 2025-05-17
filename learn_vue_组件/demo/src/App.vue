<script setup>
import Header from './components/header.vue'
import Footer from './components/footer.vue'
</script>

<template>
    <h3>App.vue</h3>

    <Header>
        <!-- 匿名插槽 -->
        <a href="qinyh10300.github.io">秦一骅</a>
    </Header>

    <Footer>
        <!-- 具名插槽 -->
        <!-- <template v-slot:url> -->
        <template #url>
            <a href="www.baidu.com">网址</a>
        </template>
    </Footer>
</template>

<style scoped>

</style>