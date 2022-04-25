import { createApp } from 'vue'
import App from './App.vue'
import 'virtual:windi.css'
import 'virtual:windi-devtools'
import { createRouter, createWebHashHistory } from 'vue-router'


const Home = ()=>import('./components/Home.vue')
const About = ()=>import('./components/Profile.vue')
const Layout = ()=>import('./components/Layout.vue')
const ProjectLayout = ()=>import('./components/ProjectLayout.vue')
const ProjectHome = ()=>import('./components/ProjectHome.vue')
const ProjectDoc = ()=>import('./components/ProjectDoc.vue')

// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。
const routes = [
  { 
      path: '/', component: Layout, 
            redirect: '/profile',
            children: [
            { path: 'profile', component: About },    
        ] 
        },
    { 
        path: '/project', component: Layout, 
                redirect: 'rs',
                children: [
                { path: 'rs', component: ProjectLayout, children : [
                    { path: 'home', component: ProjectHome },
                    { path: 'doc', component: ProjectDoc },
                ] },    
            ] 
            },
  { path: '/about', component: About },
  { path: '/nest', component: Layout },
]

const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHashHistory(),
    routes, // `routes: routes` 的缩写
  })


const app = createApp(App)
app.use(router)
app.mount('#app')
