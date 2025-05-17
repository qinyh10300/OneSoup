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
        <!-- <template #url="data"> -->
        <!-- 可以使用data形式 -->
        <template #url="{title, user}">
        <!-- 也可以使用解构形式 -->
            {{ title }}
            {{ user }}
            <a href="www.baidu.com">网址</a>
        </template>
    </Footer>
</template>

<style scoped>

</style>