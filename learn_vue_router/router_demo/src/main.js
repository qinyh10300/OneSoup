import { createApp } from 'vue'
import App from './App.vue'

import router from './router'

//use(router) 将Vue Router实例注册到Vue应用中
// createApp(App).use(router).mount('#app')

const app = createApp(App)
app.use(router)

//全局前置守卫
router.beforeEach((to, from, next) => {
    console.log("to:", to)   //即将进入的路由的信息
    console.log("from:", from)   //当前即将离开的路由的信息
    
    // next()

    if(to.name == "number"){
        next(false)   //拦截
    }else{
        next()   //继续
    }
})

app.mount("#app")