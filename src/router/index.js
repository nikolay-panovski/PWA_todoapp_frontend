import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegisterViewMock from "../views/RegisterViewMock.vue"
import LoginView from "../views/LoginView.vue"
import CreateNewProjectView from "../views/operations/CreateNewProjectView.vue"
import CreateNewTaskView from "../views/operations/CreateNewTaskView.vue"
import EditTaskView from "../views/operations/EditTaskView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/test/register',
      name: 'register',
      component: RegisterViewMock
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/test/newProject',
      name: 'createNewProject',
      component: CreateNewProjectView
    },
    {
      path: '/test/newTask',
      name: 'createNewTask',
      component: CreateNewTaskView
    },
    {
      path: '/test/editTask',
      name: 'editTask',
      component: EditTaskView
    },
  ]
})

export default router
