import HelloWorld from '@/views/HelloWorld'
import MyElement from '@/components/MyElement'
import Fade from '@/components/Fade/Fade'
// import Layout from '@/components/Layout/Layout'
// import Container from '@/components/Container/Container'
import Form from '@/components/Form/Form'
// import Carousel from '@/components/carousel/view/carousel'
import NavMenu from '@/components/NavMenu/view/NavMenu'
import Home from './views/Home.vue'
import Table from './views/nav1/Table'
import Charts from './views/charts/charts'

let routes = [
  {
    path: '/login',
    name: '',
    component: HelloWorld,
    hidden: true
  },
  {
    path: '/',
    component: Home,
    name: '导航一',
    iconCls: 'el-icon-menu',
    children: [
      {
        path: '/Form',
        name: 'Form',
        component: Form
      },
      {
        path: '/NavMenu',
        name: 'NavMenu',
        component: NavMenu
      },
      {
        path: '/Table',
        name: 'Table',
        component: Table
      },
      {
        path: '/Charts',
        name: 'Charts',
        component: Charts
      }
    ]
  },
  {
    path: '/MyElement',
    component: MyElement,
    name: '导航二',
    iconCls: 'el-icon-location',
    children: [
      {
        path: '/fade',
        name: 'Fade',
        component: Fade
      }
    ]
  }
]
export default routes
// {
//   path: '/',
//   name: 'MyElement',
//   component: MyElement,
//   children: [
//     {
//       path: '/MyElement/',
//       name: 'Carousel',
//       component: Carousel
//     },
//     {
//       path: '/MyElement/Fade',
//       name: 'Fade',
//       component: Fade
//     },
//     {
//       path: '/MyElement/Layout',
//       name: 'Layout',
//       component: Layout
//     },
//     {
//       path: '/MyElement/Container',
//       name: 'Container',
//       component: Container
//     },
//     {
//       path: '/MyElement/Form',
//       name: 'Form',
//       component: Form
//     },
//     {
//       path: '/MyElement/NavMenu',
//       name: 'NavMenu',
//       component: NavMenu
//     }
//   ]
// }
