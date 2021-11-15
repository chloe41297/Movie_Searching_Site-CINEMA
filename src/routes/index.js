import {createRouter, createWebHistory} from 'vue-router'
import Search from './Search'
import Home from './Home'
import User from './User'


export default createRouter({
  history : createWebHistory(),
  scrollBehavior:()=>({top:0}),
  routes: [
    {
      name:'Home',
      path: '/',
      component: Home
    }
    ,{
      name:'Search',
      path:'/search',
      component: Search
    },
    {
      name: 'User',
      path :'/user',
      component: User
    }
  ]
})