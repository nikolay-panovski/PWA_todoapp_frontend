import { createRouter, createWebHistory } from 'vue-router'
import RegisterViewMock from "../views/RegisterViewMock.vue"
import LoginView from "../views/LoginView.vue"
import CreateNewProjectView from "../views/operations/CreateNewProjectView.vue"
import CreateNewTaskView from "../views/operations/CreateNewTaskView.vue"
import EditTaskView from "../views/operations/EditTaskView.vue"

import { useCurrentUserStore } from "../components/currentUserStore.js";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
