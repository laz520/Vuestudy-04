import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//导入文件 方法懒加载

const Home =()=>import('../views/home/Home')
const Cart =()=>import('../views/cart/cart')
const Profile =()=>import('../views/profile/Porfile')
const Category =()=>import('../views/category/category')

const routes = [
  {
    path:"",
    redirect : '/home'  //默认的页面

  },
  {
    path: '/home', //首页
    component:Home,
  },
  {
    path:'/cart',   //购物车
    component:Cart

  },
  {
    path:'/profile',  //我的
    component:Profile
  },
  {
    path: '/category',   //分类
    component:Category

  }



]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
