<script setup>
    const emits = defineEmits(["getWeb", "userAdd"])
    emits("getWeb", { name: "秦一骅", url: "qinyh10300.com" })

    const add = () => {
        emits("userAdd", 10)
    }
</script>

<template>
    <h3>Header</h3>

    <button @click="add">添加用户</button><br>
</template>

<style scoped>

</style>