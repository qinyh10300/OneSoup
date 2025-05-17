import { defineStore } from "pinia"
import { reactive, ref } from 'vue'

export const useWebStore = defineStore('web', () => {
    const web = reactive({
        title: "qinyihua",
        url: "qinyh10300.github.io",
    })
    const users = ref(1000)
    const userAdd = () => {
        users.value++
    }

    return {
        web,
        users,
        userAdd,
    }
})