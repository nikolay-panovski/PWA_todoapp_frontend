<template>
    <!-- TODO: header here -->
    <div class="flex flex-col w-1/2 m-auto">
        <h1 class="leading-loose text-2xl">New Task</h1>

        <label for="inputNewTask"
            class="">Name</label>
        <input type="text" id="inputNewTask" placeholder="New Task"
            class="rounded-sm m-1 p-1 text-black">

        <label for="inputNewDescription"
            class="">Description</label>
        <input type="text" id="inputNewDescription" placeholder="Sample description"
            class="rounded-sm m-1 p-1 text-black">

        <!-- for styling reasons might switch to this instead of select: https://tailwindui.com/components/application-ui/elements/dropdowns -->
        <label for="pickProject"
            class="">Project</label>
        <select name="assignProject" id="pickProject"
            class="rounded-sm m-1 p-1 text-black">
            <!-- TODO: v-bind: options to values dynamically taken from currentUser.projects [] -->
            <option value="None (Personal Task)" selected>None (Personal Task)</option>
            <option value="(PWA) Planning Tool - EASV">(PWA) Planning Tool - EASV</option>
        </select>

        <label for="pickAssignee"
            class="">Assignee</label>
        <select name="assignProject" id="pickAssignee"
            class="rounded-sm m-1 p-1 text-black">
            <!-- TODO: v-bind: options to values dynamically taken from currentUser.projects [] -->
            <option value="Admin Guy (you)" selected>Admin Guy (you)</option>
            <option value="Employee Guy">Employee Guy</option>
            <option value="None">None</option>
        </select>

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
                                text-lg font-semibold text-white">Create New Task</button>
    </div>
</template>

<script setup>

</script>

<style scoped>

</style>