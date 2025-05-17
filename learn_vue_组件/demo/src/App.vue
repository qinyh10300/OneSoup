<script setup>
import { onMounted, onUpdated, ref } from 'vue'

onMounted(() => {
    console.log("onMounted");
})

onUpdated(() => {
    console.log("onUpdated");
})

const user = ref(0)
console.log(user.value);

</script>

<template>
    {{ user }}

    <button @click="user++">添加用户</button>
</template>

<style scoped>

</style>