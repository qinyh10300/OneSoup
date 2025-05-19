<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goTo = () => {
    // router.push("/content?id=100&titile=秦一骅")
    router.push({name:'number', params:{id:20, name:'秦骅'}})
}
</script>

<template>
    首页 - yihuacode.com <hr>

    <router-link to="/content?id=100&titile=秦一骅">查询字符串传参</router-link> <br>
    <router-link to="/user/007/name/yihua">路径传参</router-link> <br>

    <router-link :to="{path:'/content', query:{id:200, title:'vue3'}}"> 查询字符串传参 - 动态属性绑定 </router-link> <br>
    <router-link :to="{name:'number', params:{id:20, name:'秦骅'}}"> 查询字符串传参 - 动态属性绑定 </router-link> <br>

    <button @click="goTo()">编程式导航</button>
</template>

<style scoped>

</style>