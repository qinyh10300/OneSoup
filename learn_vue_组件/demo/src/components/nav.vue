<script setup>
    import { inject } from "vue"

    const web = inject("provideWeb")
    console.log("provideWeb", web);

    const FuncUserAdd = inject("provideFuncUserAdd")
    console.log("provideFuncUserAdd", FuncUserAdd);
</script>

<template>
    <h3>nav.vue-Bottom组件</h3>

    <button @click="FuncUserAdd">添加用户</button>
</template>

<style scoped>

</style>