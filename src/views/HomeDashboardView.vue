<template>
    <Suspense>
        <template #default>
            <div v-if="currentUserHasTasks">
                <h1 class="text-md font-semibold mx-auto my-3 p-3">
                    Tasks in projects
                </h1>

                <table class="mx-8 my-4">
                    <tr class="p-3">
                        <th class="p-3">Task</th>
                        <th class="p-3">Project</th>
                        <th class="p-3">Time estimated</th>
                        <th class="p-3">Time registered</th>
                        <th class="p-3">Actions</th>
                    </tr>
                    <tr v-for="task in projectsTasks" v-bind:key="task._id"
                    class="p-3">
                        <td class="p-3"> {{ task.name }} </td>
                        <td class="p-3"> {{ task.project }} </td>    <!-- uh oh, ObjectId -->
                        <td class="p-3"> {{ task.time_estimated }} </td>
                        <td class="p-3"> {{ task.time_registered }} </td>
                        <button type="button" @click="goToProjectPage(task.project)"
                            class="bg-green-300 rounded-lg
                                relative p-2 left-0 right-0
                                text-lg font-semibold text-white">Go</button>
                    </tr>
                </table>
                
                <h1 class="text-md font-semibold mx-auto my-3 p-3">
                    Personal tasks
                </h1>

                <table class="mx-8 my-4">
                    <tr class="p-3">
                        <th class="p-3">Task</th>
                        <th class="p-3">Project</th>    <!-- these have project = null -->
                        <th class="p-3">Time estimated</th>
                        <th class="p-3">Time registered</th>
                        <th class="p-3">Actions</th>
                    </tr>
                    <tr v-for="task in personalTasks" v-bind:key="task._id"
                    class="p-3">
                        <td class="p-3"> {{ task.name }} </td>
                        <td class="p-3"></td>
                        <td class="p-3"> {{ task.time_estimated }} </td>
                        <td class="p-3"> {{ task.time_registered }} </td>
                        <!-- a -->
                    </tr>
                </table>
            </div>
            <div v-else>
                No projects/tasks! You can add a new task using this button &lt;New Task button here&gt;.
            </div>
        </template>

        <template #fallback>
            Loading...
        </template>
    </Suspense>
</template>

<script setup>
    import router from "../router/index.js";
    import { ref, computed, onMounted } from "vue";

    import { useCurrentUserStore } from "../components/currentUserStore.js";
    import getTaskLists from "../components/getTaskLists.js";

    const currentUser = useCurrentUserStore();
    const { getTasksInProjects, getPersonalTasks } = getTaskLists();

    const projectsTasks = ref([]);
    const personalTasks = ref([]);

    const currentUserHasTasks = computed( () => projectsTasks.value.length > 0 || personalTasks.value.length > 0);
    
    async function loadDashboardTasks() {
        projectsTasks.value = await getTasksInProjects();
        personalTasks.value = await getPersonalTasks();
    }

    function goToProjectPage(projectId) {
        router.push( { name: "project", params: { id: projectId } } );
    }

    onMounted(loadDashboardTasks);
</script>