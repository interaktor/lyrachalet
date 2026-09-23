//1.创建路由
import { createRouter, createWebHistory } from "vue-router";

//3.引入要程现的组件
import Blog from "@/components/Blog.vue";
import Home from "@/components/Home.vue";


//2.创建路由器 (路由器是管理路由的，一个项目有一个路由器就可以了)
//里面要传入一个配置对象
let router = createRouter({
    history: createWebHistory(), //路由器的工作模式
    routes: [ //一个一个的路由规则
        {
            path: '/lyrachalet',
            redirect: '/lyrachalet/home'
        },
        {
            path: '/lyrachalet/home',
            component: Home
        },
        {
            //这里要写2个东西
            path: '/lyrachalet/blog', //路径
            component: Blog//路径文件的名称
        }

    ]
})

//4.需要把router暴露出去
export default router

//路由就是一种对应关系 key1-value1 key2-value2... 这里的key指的是路由器上的接口，value指的是和接口连接的设备