import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Expert from '../views/Expert.vue'
import Portfolio from '../views/Portfolio.vue'
import ProjectDetail from '../views/ProjectDetail.vue'
import Courses from '../views/Courses.vue'
import CourseDetail from '../views/CourseDetail.vue'
import Pricing from '../views/Pricing.vue'
import Process from '../views/Process.vue'
import AboutUs from '../views/AboutUs.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: '火星創意 | 專業網頁開發團隊'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      title: '關於我們 | 火星創意'
    }
  },
  {
    path: '/expert',
    name: 'Expert',
    component: Expert,
    meta: {
      title: '專家介紹 | 火星創意'
    }
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio,
    meta: {
      title: '作品案例 | 火星創意'
    }
  },
  {
    path: '/portfolio/:id',
    name: 'ProjectDetail',
    component: ProjectDetail,
    meta: {
      title: '專案詳情 | 火星創意'
    }
  },
  {
    path: '/courses',
    name: 'Courses',
    component: Courses,
    meta: {
      title: '教學案例 | 火星創意'
    }
  },
  {
    path: '/courses/:id',
    name: 'CourseDetail',
    component: CourseDetail,
    meta: {
      title: '課程詳情 | 火星創意'
    }
  },
  {
    path: '/pricing',
    name: 'Pricing',
    component: Pricing,
    meta: {
      title: '服務費用 | 火星創意'
    }
  },
  {
    path: '/process',
    name: 'Process',
    component: Process,
    meta: {
      title: '服務流程 | 火星創意'
    }
  },
  {
    path: '/about-us',
    name: 'AboutUs',
    component: AboutUs,
    meta: {
      title: '關於火星創意 | 火星創意'
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || '火星創意'
  next()
})

export default router
