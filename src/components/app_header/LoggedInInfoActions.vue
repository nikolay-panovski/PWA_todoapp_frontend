<template>
    <div class="flex flex-row justify-center">
        <!-- TODO: find appropriate image for user logo and change -->
        <img alt="User logo" src="@/assets/logo.svg" width="64" height="64" 
          class="m-4" />

        <div class="flex flex-col justify-center">
          <p class="text-lg font-semibold text-white">{{ name_first + " " + name_last }}</p>
          <p class="text-md font-semibold text-red-600">{{ company }}</p>
          <p class="text-md font-semibold text-red-600">{{ role }}</p>
        </div>
    </div>
      

    <div class="flex flex-row-reverse items-center">
        <LogOutButton></LogOutButton>
        <button type="button" class="bg-gray-400 rounded-md
                                relative mx-2 my-auto p-3
                                text-lg font-normal text-white">
          <RouterLink to="/test/newTask">New Task</RouterLink>
        </button>
        <button v-if="role === 'Manager'"
                type="button" class="bg-gray-400 rounded-md
                                relative mx-2 my-auto p-3
                                text-lg font-normal text-white">
          <RouterLink to="/test/newProject">New Project</RouterLink>
        </button>
        <button type="button" class="bg-gray-400 rounded-md
                                relative mx-2 my-auto p-3
                                text-lg font-normal text-white">
          Dashboard
        </button>
    </div>
</template>

<script setup>
    import { RouterLink } from 'vue-router';
    import LogOutButton from '../LogOutButton.vue';

    defineProps({
        name_first: { type: String, required: true },
        name_last: { type: String, required: true },
        company: { type: String, required: true },
        role: { type: String, required: true }
    });
</script>