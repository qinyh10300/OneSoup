<script setup>
import { reactive, toRefs, toRef } from 'vue'

let web = reactive({
    name: "秦一骅",
    url: "qinyh10300.github.io"
})

// let {name, url} = toRefs(web)

let url = toRef(web, "url")

console.log(url);
</script>

<template>
    {{ url }}
</template>

<style scoped>

</style>