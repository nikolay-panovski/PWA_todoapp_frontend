<template>
    <!-- alright, the following (first time Tailwind) is indeed ugly -->
    <!-- next up: inventing intermediate class templates (for example a "primarybutton" template) to apply in fewer words? -->
    <div class="flex flex-col">
        <div class="relative w-1/2 mx-auto my-1">
            <label for="inputEmail"
                class="block">Email:</label>
            <input type="email" id="inputEmail" placeholder="Your email here" v-model="email"
                class="block w-full rounded-sm m-1 p-1 text-black">
                <span>Test: {{ email }} </span>
        </div>
        <div class="relative w-1/2 mx-auto my-1">
            <label for="inputPassword"
                class="block">Password:</label>
            <input type="password" id="inputPassword" placeholder="Your password here" v-model="password"
                class="block w-full rounded-sm m-1 p-1 text-black">
        </div>

        <br/>

        <button type="button" @click="tryLogin(email, password)"
                    class="w-1/3 bg-sky-400 rounded-lg
                        relative mx-auto my-8 py-4 left-0 right-0
                        text-lg font-semibold text-white">Log in</button>

        <div v-if="lastLoginFailed"
            class="block w-full rounded-lg m-1 p-4 text-black border-red-700 bg-red-300">
            Error!<br> {{ lastLoginResult.error }}
        </div>
    </div>
</template>

<script setup>
    import { ref } from "vue";
    import userAuth from "../components/user_auth/user_auth.js";

    const email = ref("");
    const password = ref("");
    const { login } = userAuth();

    const lastLoginFailed = ref(false);
    const lastLoginResult = ref();

    async function tryLogin(email, password) {
        lastLoginResult.value = await login(email, password);

        lastLoginFailed.value = lastLoginResult.value.error !== null ? true : false;
    }
    // Else: Store return value->userHandle in prop here and define prop that the main App.vue can import (for header, possibly others?)

</script>

<style lang="scss" scoped>

</style>