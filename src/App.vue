<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header class="flex flex-row justify-evenly bg-blue-400">
    <!-- TODO: find appropriate image for app logo and change -->
    <img alt="Vue logo" src="@/assets/logo.svg" width="125" height="125" 
      class="my-2" />

    <!-- v-if="state.user != null"-->
    <div v-if=false
      class="flex flex-row-reverse place-items-start">
      <button type="button" class="bg-green-500 rounded-md
                                relative mx-2 my-auto p-3
                                text-lg font-semibold text-white">Register</button>
      <button type="button" class="bg-gray-400 rounded-md
                                relative mx-2 my-auto p-3
                                text-lg font-normal text-white">Log in</button>
    </div>

    <div v-if=true class="flex basis-full flex-row justify-around">
      <div class="flex flex-row justify-center">
        <!-- TODO: find appropriate image for user logo and change -->
        <img alt="User logo" src="@/assets/logo.svg" width="64" height="64" 
          class="m-4" />

        <div class="flex flex-col justify-center">
          <p class="text-lg font-semibold text-white">User name</p>
          <p class="text-md font-semibold text-red-600">100%DEV</p>
          <p class="text-md font-semibold text-red-600">Employee</p>
        </div>
      </div>
      

      <div class="flex flex-row-reverse items-center">
        <a href="#">Log out</a>
        <button type="button" class="bg-gray-400 rounded-md
                                relative mx-2 my-auto p-3
                                text-lg font-normal text-white">New Task</button>
        <!-- v-if="state.user.type == manager" -->
        <button type="button" class="bg-gray-400 rounded-md
                                relative mx-2 my-auto p-3
                                text-lg font-normal text-white">New Project</button>
        <button type="button" class="bg-gray-400 rounded-md
                                relative mx-2 my-auto p-3
                                text-lg font-normal text-white">Dashboard</button>
      </div>
      <!--
      <HelloWorld msg="You did it!" />  !-- exists on every page --

      <nav>
        <RouterLink to="/">Home</RouterLink>        !-- content mounted depending on the current URL ("subpage") --
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/login">Login</RouterLink>
        <RouterLink to="/test/newProject">Test: Create New Project</RouterLink>
        <RouterLink to="/test/newTask">Test: Create New Task</RouterLink>
        <RouterLink to="/test/editTask">Test: Edit Task</RouterLink>
      </nav>
      -->
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
/**
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
/**/
</style>
