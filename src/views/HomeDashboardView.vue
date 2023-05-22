<template>
    <Suspense>
        <template #default>
            <div v-if="currentUserHasTasks">
                <!--probably heading-->
                <table>
                    <tr>
                        <th>Task</th>
                        <th>Project</th>
                        <th>Time estimated</th>
                        <th>Time registered</th>
                        <th>Actions</th>
                    </tr>
                    <tr v-for="task in projectsTasks" v-bind:key="task._id"
                    class="">
                        <td> {{ task.name }} </td>
                        <td> {{ task.project }} </td>    <!-- uh oh, ObjectId -->
                        <td> {{ task.time_estimated }} </td>
                        <td> {{ task.time_registered }} </td>
                        <!-- a -->
                    </tr>
                </table>
                <!--probably another heading or equivalent white space-->
                <table>
                    <tr>
                        <th>Task</th>
                        <th>Project</th>    <!-- these have project = null -->
                        <th>Time estimated</th>
                        <th>Time registered</th>
                        <th>Actions</th>
                    </tr>
                    <tr v-for="task in personalTasks" v-bind:key="task._id"
                    class="">
                        <td> {{ task.name }} </td>
                        <td></td>
                        <td> {{ task.time_estimated }} </td>
                        <td> {{ task.time_registered }} </td>
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

    onMounted(loadDashboardTasks);
</script>