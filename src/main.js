import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
//全局导入 不推荐   建议按需导入
// import Antd from 'ant-design-vue'
// import 'ant-design-vue/dist/antd.css'
import { Button } from 'ant-design-vue'
//import 'ant-design-vue/es/button/style.css'


// const app = createApp(App)

// app.use(Button).mount('#app')

createApp(App).mount('#app')
