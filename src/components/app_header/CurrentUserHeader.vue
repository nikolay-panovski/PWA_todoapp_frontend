<template>
  <header class="flex flex-row justify-evenly bg-blue-400">
    <!-- TODO: find appropriate image for app logo and change -->
    <img alt="Vue logo" src="@/assets/logo.svg" width="125" height="125" 
      class="my-2" />

    <div v-if=currentUser.hasCurrentUser class="flex basis-full flex-row justify-around">
      <LoggedInInfoActions v-bind:name_first="currentUser.name_first"
                           v-bind:name_last="currentUser.name_last"
                           v-bind:company="currentUser.company"
                           v-bind:role="currentUser.role" />
    </div>
    <div v-else
      class="flex flex-row-reverse place-items-start">
      <LoggedOutInfoActions />
    </div>
  </header>
</template>

<script setup>
  import LoggedOutInfoActions from './LoggedOutInfoActions.vue';
  import LoggedInInfoActions from './LoggedInInfoActions.vue';
  import { useCurrentUserStore } from "../currentUserStore.js";

  const currentUser = useCurrentUserStore();

</script>