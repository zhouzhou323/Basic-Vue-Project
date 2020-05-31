import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
// import User from '../views/User.vue'

const Home = () => import("../views/Home.vue")
const HomeNews = () => import("../views/HomeNews.vue")
const HomeMessage = () => import("../views/HomeMessage.vue")
const About = () => import("../views/About.vue")
const User = () => import("../views/User.vue")
const Profile = () => import("../views/Profile.vue")

// 1.通过vue.use（插件）安装插件
Vue.use(VueRouter)
// 2.创建vuerouter对象
  const routes = [
  {
    path: '',
    redirect:'/home',
    component: Home,
    meta:{
      title: '首页'
    }
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta:{
      title: '首页'
    },
    children:[
      {
        path:'',
        redirect:'news'
      },
      {
        path:'news',
        component:HomeNews
      },
      {
        path:'message',
        component:HomeMessage
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    component: About,
    meta:{
      title: '关于'
    }
  },
  {
    path:'/user/:userId',
    component:User,
    meta:{
      title: '用户'
    }
  },
  {
    path:'/profile',
    component:Profile,
    meta:{
      title: '档案'
    }
  }
]

const router = new VueRouter({
  routes,
  mode:"history",
  linkActiveClass:'active',
 
})

router.beforeEach((to, from, next)=> {
  // 从from跳转到to
  document.title = to.matched[0].meta.title
  next()
})

// 3.将router对象传入到vue实例
export default router
