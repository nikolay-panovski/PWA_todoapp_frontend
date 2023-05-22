<template>
    <!-- TODO: header here -->
    <div class="flex flex-col w-1/2 m-auto">
        <h1 class="leading-loose text-2xl">New Project</h1>

        <label for="inputNewProject"
            class="">Name</label>
        <input type="text" id="inputNewProject" placeholder="New Project" v-model="name" required
            class="rounded-sm m-1 p-1 text-black">

        <label for="inputNewDescription"
            class="">Description</label>
        <input type="text" id="inputNewDescription" placeholder="Sample description" v-model="description"
            class="rounded-sm m-1 p-1 text-black">

        <label for="inputStakeholderCompany"
            class="">Company</label>
        <input type="text" id="inputStakeholderCompany" placeholder="Stakeholder Company" v-model="company" required
            class="rounded-sm m-1 p-1 text-black">

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
            <!-- TODO?: v-bind: value to default to now? -->
            <!-- TODO: v-bind: min and max to visually create acceptable range for Deadline (from current time to project deadline) -->
        <input type="date" id="inputTimeDeadline" min="" max="" v-model="deadline" required
            class="rounded-sm m-1 p-1 text-black">


        <button type="button" @click="tryCreateProject()"
                            class="w-1/3 bg-sky-400 rounded-lg
                                relative mx-auto my-8 py-4 left-0 right-0
                                text-lg font-semibold text-white">Create New Project</button>
    </div>
</template>

<script setup>
    import { ref } from "vue";
    import createNewProjectFunctions from "@/components/createNewProject.js";

    const name = ref("");
    const description = ref("");
    const company = ref("");
    const hours = ref(0);
    const minutes = ref(0);
    const deadline = ref();
    const { createNewProject } = createNewProjectFunctions();

    async function tryCreateProject() {
        const frontendProjectParams = { 
            name: name.value,
            description: description.value,
            company: company.value,
            time_estimated: hours.value * 60 + minutes.value,
            deadline: deadline.value
        }

        const createResult = await createNewProject(frontendProjectParams);

        if (createResult.errorStatus !== undefined && createResult.errorStatus !== null) console.log("Frontend received an error");

        // router.push( { path: view of "all projects" page } );
    }
</script>

<style scoped>

</style>