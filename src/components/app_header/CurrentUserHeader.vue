<template>
  <header class="flex flex-row justify-evenly bg-blue-400">
    <!-- TODO: find appropriate image for app logo and change -->
    <img alt="Vue logo" src="@/assets/logo.svg" width="125" height="125" 
      class="my-2" />

    <div v-if=currentUser class="flex basis-full flex-row justify-around">
      <LoggedInInfoActions />
    </div>
    <div v-else
      class="flex flex-row-reverse place-items-start">
      <LoggedOutInfoActions />
    </div>
  </header>
</template>

<script setup>
  import { ref } from "vue";
  import LoggedOutInfoActions from './LoggedOutInfoActions.vue';
  import LoggedInInfoActions from './LoggedInInfoActions.vue';

  // send current user info here

  
  const currentUser = ref();

  function updateCurrentUser(newUserInfo) {

  }
</script>