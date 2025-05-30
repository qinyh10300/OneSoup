import { createApp } from 'vue'

// 整体导入 ElementPlus 组件库
import ElementPlus from 'element-plus' // 导入 ElementPlus 组件库的所有模块和功能
import 'element-plus/dist/index.css' // 导入 ElementPlus 组件库所需的全局 CSS 样式
import * as ElementPlusIconsVue from '@element-plus/icons-vue' //导入 ElementPlus 组件库中的所有图标
import zhCn from 'element-plus/dist/locale/zh-cn.mjs' //导入 ElementPlus 组件库的中文语言包
import App from './App.vue'

// createApp(App).mount('#app')
const app = createApp(App)

// 注册 ElementPlus 组件库中的所有图标到全局 Vue 应用中
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

// app.use(ElementPlus)  // 将 ElementPlus 插件注册到 vue 应用中
app.use(ElementPlus, {
    locale: zhCn // 设置 ElementPlus 组件库的区域语言为中文简体
})
app.mount("#app")
