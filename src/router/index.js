import { createRouter, createWebHistory } from 'vue-router'

import RegisterViewMock from "../views/RegisterViewMock.vue"
import LoginView from "../views/LoginView.vue"

import DashboardView from "../views/HomeDashboardView.vue"
import AllProjectsView from "../views/AllProjectsView.vue"
import SpecificProjectView from "../views/SpecificProjectView.vue"

import CreateNewProjectView from "../views/operations/CreateNewProjectView.vue"
import CreateNewTaskView from "../views/operations/CreateNewTaskView.vue"
import EditTaskView from "../views/operations/EditTaskView.vue"

import { useCurrentUserStore } from "../components/currentUserStore.js";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: DashboardView
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView
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
      path: '/newProject',
      name: 'createNewProject',
      component: CreateNewProjectView
    },
    {
      path: '/newTask',
      name: 'createNewTask',
      component: CreateNewTaskView
    },
    {
      path: '/editTask/:id',
      name: 'editTask',
      component: EditTaskView
    },{
      path: '/allProjects',
      name: 'allProjects',
      component: AllProjectsView
    },
    {
      path: '/project/:id',
      name: 'project',
      component: SpecificProjectView
    },
  ]
});

router.beforeEach((to, from) => {
  // currentUser is also the confirmation of whether there is a person logged in or not (condition for "is authenticated")
  const currentUser = useCurrentUserStore();

  // since "register" is a mock in this application, if accessed anyhow, make sure to go there,
  // else redirect anything unauthenticated to login page:
  if (to.name !== "register" && to.name !== "login" && !currentUser.hasCurrentUser) {
    // the "query" part is in case we were redirected from a session timeout and would like to return to that same page after logging in again
    return { name: "login", query: { redirect: to.fullPath } };
  }
});

export default router
