<template>
    <!-- TODO: header here -->
    <div class="flex flex-col">
        <!-- TODO: Inject task name there for clarity -->
        <h1 class="leading-loose text-2xl">Edit Task: task name here</h1>

        <label for="inputEditedTask"
            class="">Name</label>
        <input type="text" id="inputEditedTask" placeholder="Make more wireframes"
            class="rounded-sm m-1 p-1 text-black">

        <label for="inputEditedDescription"
            class="">Description</label>
        <input type="text" id="inputEditedDescription" placeholder="Visualize project oh no running out of space"
            class="rounded-sm m-1 p-1 text-black">

        <!-- for styling reasons might switch to this instead of select: https://tailwindui.com/components/application-ui/elements/dropdowns -->
        <label for="pickProject"
            class="">Project</label>
        <select name="assignProject" id="pickProject" disabled
            class="rounded-sm m-1 p-1 text-black">
            <!-- TODO: v-bind: options to values dynamically taken from currentUser.projects [] -->
            <option value="None (Personal Task)">None (Personal Task)</option>
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

        <label for="inputTimeTracked"
            class="">Time Tracked</label>
        <input type="time" id="inputTimeTracked" value="01:00"
            class="rounded-sm m-1 p-1 text-black">


        <button type="button" class="w-1/3 bg-sky-400 rounded-lg
                                relative mx-auto my-8 py-4 left-0 right-0
                                text-lg font-semibold text-white">Edit Task</button>
    </div>
</template>

<script setup>

</script>

<style scoped>

</style>