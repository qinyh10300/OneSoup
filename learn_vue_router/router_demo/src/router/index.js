import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: "/",   // http://localhost:5173
        alias: ["/home", "/index"],  // 定义别名
        component: () => import("@/views/index.vue")  // @符号表示src目录
    },
    {
        path: "/content",   // http://localhost:5173/content?id=100&titile=秦一骅
        component: () => import("@/views/content.vue")
    },
    {
        //可选参数 name? 表示该参数不是必需的
        path: "/user/:id/name/:name?",   // http://localhost:5173/user/007/name
        name:"number",
        component: () => import("@/views/user.vue")
    },
    {
        path: "/vip",   // http://localhost:5173/vip
        component: () => import("@/views/vip.vue"),
        children: [
            {
                path: "",   // http://localhost:5173/vip
                component: () => import("@/views/vip/default.vue")
            },
            {
                path: "order",   // http://localhost:5173/vip/order
                component: () => import("@/views/vip/order.vue")
            },
            {
                path: "info",   // http://localhost:5173/vip/info
                component: () => import("@/views/vip/info.vue")
            },
        ]
    },
    {
        // 重定向
        path: "/svip",
        // redirect: "/vip"
        redirect: {name:'number', params:{id:20, name:'秦骅'}}
    }
]

const router = createRouter({
    //使用url的#符号之后的部分模拟url路径的变化,因为不会触发页面刷新,所以不需要服务端支持
	// history: createWebHashHistory(), 
    history: createWebHistory(),  //个人喜欢使用传统模式
    routes
})

export default router