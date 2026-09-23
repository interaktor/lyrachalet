//引入createApp用于创建应用
import { createApp } from 'vue'
//引入App根组件
import App from './App.vue'
//引入router组件
import router from './router/index.ts'

//在实例化页面的时候把router使用上
let app = createApp(App)
app.use(router)
app.mount('#app')