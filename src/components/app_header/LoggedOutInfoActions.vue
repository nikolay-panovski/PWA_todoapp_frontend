<template>
    <button type="button" class="bg-green-500 rounded-md
                                relative mx-2 my-auto p-3
                                text-lg font-semibold text-white">
        <RouterLink to="/test/register">Register</RouterLink>
    </button>
    <button type="button" class="bg-gray-400 rounded-md
                                relative mx-2 my-auto p-3
                                text-lg font-normal text-white">
        <RouterLink to="/login">Log in</RouterLink>
    </button>
</template>

<script setup>
    import { RouterLink } from 'vue-router';

</script>