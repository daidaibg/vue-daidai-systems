import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component:  ()=>import(/* webpackChunkName: "about" */ '../components/Home.vue'),
    redirect: '/echarts',
    children:[
      {
        path: '/echarts',
        name: 'echarts',
        component: ()=>import(/* webpackChunkName: "about" */ '../views/echarts/Echarts.vue'),
        meta:{
          title:"图表"
        }
      },
      {
        path: '/list',
        name: 'List',
        component: ()=>import(/* webpackChunkName: "about" */ '../views/FeadBack/List.vue'),
        meta:{
          title:"列表"
        }
      },
      {
        path: '/hook',
        name: 'hook',
        component: ()=>import(/* webpackChunkName: "about" */ '../views/About.vue'),
        meta:{
          title:"关于"
        }
      },
      {
        path: '/Theme',
        name: 'theme',
        component: ()=>import(/* webpackChunkName: "about" */ '../views/themes/Theme.vue'),
        meta:{
          title:"换肤"
        }
      },
      {
        path: '/test',
        name: 'test',
        component: ()=>import(/* webpackChunkName: "about" */ '../views/Text.vue'),
        meta:{
          title:"测试"
        }
      },
      {
        path: '/Table',
        name: 'table',
        component: ()=>import(/* webpackChunkName: "about" */ '../views/Table.vue'),
        meta:{
          title:"表格"
        }
      },
      {
        path: '/tree',
        name: 'tree',
        component: ()=>import(/* webpackChunkName: "about" */ '../views/About.vue'),
        meta:{
          title:"关于"
        }
      },
      {
        path: '/404',
        name: '404',
        component: ()=>import(/* webpackChunkName: "error" */ '../views/404.vue'),
        meta:{
          title:"404"
        }
      },
      {
        path: '/403',
        name: '403',
        component: ()=>import(/* webpackChunkName: "error" */ '../views/403.vue'),
        meta:{
          title:"403"
        }
      },
    ]
  },
  {
      path: '/:pathMatch(.*)*',
      redirect: '/404'
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  },
})

export default router
