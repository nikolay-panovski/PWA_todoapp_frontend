<template>
    <a href="#" @click="logout()">Log out</a>
</template>

<script setup>
    import router from "../router/index.js";

    import { useCurrentUserStore } from "./currentUserStore.js";

    const currentUser = useCurrentUserStore();

    function logout() {
        currentUser.removeCurrentUser();

        router.push( { name: "login" } );
    }
</script>