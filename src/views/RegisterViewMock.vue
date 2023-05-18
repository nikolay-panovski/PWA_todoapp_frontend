<template>
    <div class="flex flex-col">
        <div class="relative w-1/2 mx-auto my-1">
            <label for="inputFirstName"
                class="block">First name:</label>
            <input type="text" id="inputFirstName" placeholder="First name"
                class="block w-full rounded-sm m-1 p-1 text-black">
        </div>

        <div class="relative w-1/2 mx-auto my-1">
            <label for="inputLastName"
                class="block">Last name:</label>
            <input type="text" id="inputLastName" placeholder="Last name"
                class="block w-full rounded-sm m-1 p-1 text-black">
        </div>

        <div class="relative w-1/2 mx-auto my-1">
            <label for="inputEmail"
                class="block">Email:</label>
            <input type="email" id="inputEmail" placeholder="Your email here"
                class="block w-full rounded-sm m-1 p-1 text-black">
        </div>
        <div class="relative w-1/2 mx-auto my-1">
            <label for="inputPassword"
                class="block">Password:</label>
            <input type="password" id="inputPassword" placeholder="Your password here"
                class="block w-full rounded-sm m-1 p-1 text-black">
        </div>

        <!-- COMPANY: Regular text (for string compare) in this app,
            would need to be its own DB struct (here: advanced input/dropdown) in a production application. -->
        <div class="relative w-1/2 mx-auto my-1">
            <label for="inputCompany"
                class="block">Company:</label>
            <input type="text" id="inputCompany" placeholder="Company"
                class="block w-full rounded-sm m-1 p-1 text-black">
        </div>

        <br/>

        <!-- TODO: replace @click handler with register or nothing -->
        <button type="button" @click="testDisplayInputs( ['inputFirstName', 'inputLastName', 'inputEmail', 'inputPassword', 'inputCompany'] )"
                    class="w-1/3 bg-sky-400 rounded-lg
                            relative mx-auto my-8 py-4 left-0 right-0
                            text-lg font-semibold text-white">Register</button>
    </div>
</template>

<script setup>
    import userAuth from "../components/user_auth/user_auth.js";

    const { register, testDisplayInputs } = userAuth();
</script>

<style lang="scss" scoped>

</style>