<template>
    <div class="flex flex-col">
        <h1 class="leading-loose text-2xl">Edit Task: {{ name }}</h1>

        <label for="inputEditedTask"
            class="">Name</label>
        <input type="text" id="inputEditedTask" placeholder="Make more wireframes" v-model="name" required
            class="rounded-sm m-1 p-1 text-black">

        <label for="inputEditedDescription"
            class="">Description</label>
        <input type="text" id="inputEditedDescription" placeholder="Visualize project oh no running out of space" v-model="description"
            class="rounded-sm m-1 p-1 text-black">

        <label for="pickProject"
            class="">Project (cannot change once assigned)</label>
        <select name="assignProject" id="pickProject" disabled
            class="rounded-sm m-1 p-1 text-black">
            <option value="None (Personal Task)">None (Personal Task)</option>
            <option value="(PWA) Planning Tool - EASV">(PWA) Planning Tool - EASV</option>
        </select>

        <label for="pickAssignee"
            class="">Assignee (unused dropdown)</label>
        <select name="assignProject" id="pickAssignee" disabled
            class="rounded-sm m-1 p-1 text-black">
            <option value="Admin Guy (you)" selected>Admin Guy (you)</option>
            <option value="Employee Guy">Employee Guy</option>
            <option value="None">None</option>
        </select>

        <label for="inputTimeTracked"
            class="">Time Tracked</label>
        <div id="inputTimeTracked">
            <input type="number" min="0" max="99999" step="1" v-model="hours" required
                class="rounded-sm m-1 p-1 text-black" />h : 
            <input type="number" min="0" max="59" step="1" v-model="minutes" required
                class="rounded-sm m-1 p-1 text-black" />m
        </div>


        <button type="button" @click="tryEditTask()"
                            class="w-1/3 bg-sky-400 rounded-lg
                                relative mx-auto my-8 py-4 left-0 right-0
                                text-lg font-semibold text-white">Edit Task</button>
    </div>
</template>

<script setup>
    import router from "../../router/index.js";
    import { useRoute } from "vue-router";

    import { ref, onMounted } from "vue";
    import editTaskFunctions from "@/components/editTask.js";

    const name = ref("");
    const description = ref("");
    const hours = ref(0);
    const minutes = ref(0);
    const { getTaskForEdit, editTask } = editTaskFunctions();

    const route = useRoute();

    const lastCreateFailed = ref(false);
    const lastCreateError = ref("");

    async function loadEditParams() {
        const backendTaskParams = await getTaskForEdit(route.params.id);

        name.value = backendTaskParams.name;
        description.value = backendTaskParams.description;
        hours.value = backendTaskParams.time_registered / 60;
        minutes.value = backendTaskParams.time_registered % 60;
    }

    async function tryEditTask() {
        const frontendTaskParams = { 
            name: name.value,
            description: description.value,
            time_registered: hours.value * 60 + minutes.value
        }

        const editResult = await editTask(route.params.id, frontendTaskParams);
        if (Object.hasOwn(editResult, "error") && editResult.error !== null) {
            lastCreateFailed.value = true;
            lastCreateError.value = editResult.error;
        }
        else {
            lastCreateFailed.value = false;

            router.push( { name: "dashboard" } );
        }
    }

    onMounted(loadEditParams);
</script>

<style scoped>

</style>