<script setup>
import { inject } from 'vue'
import Nav from "./nav.vue"

const user = inject("provideUser")
console.log("provideUser", user);

</script>

<template>
    <h3>head.vue-Middle组件</h3>

    <Nav/>
</template>

<style scoped>

</style>