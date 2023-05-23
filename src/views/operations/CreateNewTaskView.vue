<template>
    <div class="flex flex-col w-1/2 m-auto">
        <h1 class="leading-loose text-2xl">New Task</h1>

        <label for="inputNewTask"
            class="">Name</label>
        <input type="text" id="inputNewTask" placeholder="New Task" v-model="name" required
            class="rounded-sm m-1 p-1 text-black">

        <label for="inputNewDescription"
            class="">Description</label>
        <input type="text" id="inputNewDescription" placeholder="Sample description" v-model="description"
            class="rounded-sm m-1 p-1 text-black">

        <label for="pickProject"
            class="">Project (unused dropdown)</label>
        <select name="assignProject" id="pickProject" v-model="project" required
            class="rounded-sm m-1 p-1 text-black">
            <option value="null" selected>None (Personal Task)</option>
            <option value="Test creating new projects and tasks" disabled>(PWA) Planning Tool - EASV</option>
        </select>

        <label for="pickAssignee"
            class="">Assignee (unused dropdown)</label>
        <select name="assignProject" id="pickAssignee"
            class="rounded-sm m-1 p-1 text-black">
            <option value="Admin Guy (you)" selected>Admin Guy (you)</option>
            <option value="Employee Guy">Employee Guy</option>
            <option value="None">None</option>
        </select>

        <label for="inputTimeEstimated"
            class="">Time Estimated</label>
        <div >
            <input id="inputTimeEstimated" type="number" min="0" max="99999" step="1" v-model="hours" required
                class="rounded-sm m-1 p-1 text-black" />h : 
            <input type="number" min="0" max="59" step="1" v-model="minutes" required 
                class="rounded-sm m-1 p-1 text-black" />m
        </div>

        <label for="inputTimeDeadline"
            class="">Deadline</label>
        <input type="date" id="inputTimeDeadline" min="" max="" v-model="deadline" required
            class="rounded-sm m-1 p-1 text-black">


        <button type="button" @click="tryCreateTask()"
                            class="w-1/3 bg-sky-400 rounded-lg
                                relative mx-auto my-8 py-4 left-0 right-0
                                text-lg font-semibold text-white">Create New Task</button>
    </div>
</template>

<script setup>
    import router from "../../router/index.js";

    import { ref } from "vue";
    import createNewTaskFunctions from "@/components/createNewTask.js";

    const name = ref("");
    const description = ref("");
    const project = ref("");
    const hours = ref(0);
    const minutes = ref(0);
    const deadline = ref();
    const { createNewTask } = createNewTaskFunctions();

    const lastCreateFailed = ref(false);
    const lastCreateError = ref("");

    async function tryCreateTask() {
        const frontendTaskParams = { 
            name: name.value,
            description: description.value,
            project: project.value,
            time_estimated: hours.value * 60 + minutes.value,
            deadline: deadline.value
        }

        const createResult = await createNewTask(frontendTaskParams);
        // enforces BE to return all errors with "error" direct property, else this will fail *and* burn with a working router.push below
        if (Object.hasOwn(createResult, "error") && createResult.error !== null) {
            lastCreateFailed.value = true;
            lastCreateError.value = createResult.error;
        }
        else {
            lastCreateFailed.value = false;

            router.push( { name: "dashboard" } );
        }
    }
</script>

<style scoped>

</style>