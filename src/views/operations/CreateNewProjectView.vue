<template>
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
        <input type="date" id="inputTimeDeadline" min="" max="" v-model="deadline" required
            class="rounded-sm m-1 p-1 text-black">


        <button type="button" @click="tryCreateProject()"
                            class="w-1/3 bg-sky-400 rounded-lg
                                relative mx-auto my-8 py-4 left-0 right-0
                                text-lg font-semibold text-white">Create New Project</button>

        <div v-if="lastCreateFailed"
            class="block w-1/2 rounded-lg m-1 p-4 text-black border-red-700 bg-red-300">
            Error!<br> {{ lastCreateError }}
        </div>
    </div>
</template>

<script setup>
    import router from "../../router/index.js";

    import { ref } from "vue";
    import createNewProjectFunctions from "@/components/createNewProject.js";

    const name = ref("");
    const description = ref("");
    const company = ref("");
    const hours = ref(0);
    const minutes = ref(0);
    const deadline = ref();
    const { createNewProject } = createNewProjectFunctions();

    const lastCreateFailed = ref(false);
    const lastCreateError = ref("");

    async function tryCreateProject() {
        const frontendProjectParams = { 
            name: name.value,
            description: description.value,
            company: company.value,
            time_estimated: hours.value * 60 + minutes.value,
            deadline: deadline.value
        }

        const createResult = await createNewProject(frontendProjectParams);
        // enforces BE to return all errors with "error" direct property, else this will fail *and* burn with a working router.push below
        if (Object.hasOwn(createResult, "error") && createResult.error !== null) {
            lastCreateFailed.value = true;
            lastCreateError.value = createResult.error;
        }
        else {
            lastCreateFailed.value = false;

            let projectId = createResult._id;   // BE must expose the _id in the response body
            router.push( { name: "project", params: { id: projectId } } );
        }
    }
</script>

<style scoped>

</style>