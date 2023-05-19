<template>
    <!-- TODO: header here -->
    <div class="flex flex-col w-1/2 m-auto">
        <h1 class="leading-loose text-2xl">New Project</h1>

        <label for="inputNewProject"
            class="">Name</label>
        <input type="text" id="inputNewProject" placeholder="New Project"
            class="rounded-sm m-1 p-1 text-black">

        <label for="inputNewDescription"
            class="">Description</label>
        <input type="text" id="inputNewDescription" placeholder="Sample description"
            class="rounded-sm m-1 p-1 text-black">

        <label for="inputStakeholderCompany"
            class="">Company</label>
        <input type="text" id="inputStakeholderCompany" placeholder="Stakeholder Company"
            class="rounded-sm m-1 p-1 text-black">

        <label for="inputTimeEstimated"
            class="">Time Estimated</label>
        <div >
            <input id="inputTimeEstimated" type="number" min="0" max="99999" step="1" 
                class="rounded-sm m-1 p-1 text-black" />h : 
            <input type="number" min="0" max="59" step="1" 
                class="rounded-sm m-1 p-1 text-black" />m
        </div>

        <label for="inputTimeDeadline"
            class="">Deadline</label>
            <!-- TODO?: v-bind: value to default to now? -->
            <!-- TODO: v-bind: min and max to visually create acceptable range for Deadline (from current time to project deadline) -->
        <input type="date" id="inputTimeDeadline" value="" min="" max=""
            class="rounded-sm m-1 p-1 text-black">


        <button type="button" class="w-1/3 bg-sky-400 rounded-lg
                                relative mx-auto my-8 py-4 left-0 right-0
                                text-lg font-semibold text-white">Create New Project</button>
    </div>
</template>

<script setup>

</script>

<style scoped>

</style>