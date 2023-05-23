<template>
    <Suspense>
        <template #default>
            <div v-if="currentProjectHasTasks">
                <table>
                    <tr>
                        <th>Task</th>
                        <th>Project</th>
                        <th>Time estimated</th>
                        <th>Time registered</th>
                        <th>Actions</th>
                    </tr>
                    <tr v-for="task in tasks" v-bind:key="task._id"
                    class="">
                        <td> {{ task.name }} </td>
                        <td> {{ task.project }} </td>    <!-- uh oh, ObjectId -->
                        <td> {{ task.time_estimated }} </td>
                        <td> {{ task.time_registered }} </td>
                        <!-- a -->
                    </tr>
                </table>
                
            </div>
            <div v-else>
                No tasks here! Add a task to this project with a "New task" button.
            </div>
        </template>

        <template #fallback>
            Loading...
        </template>
    </Suspense>
</template>

<script setup>
    import { ref, computed, onMounted } from "vue";
    import { useRoute } from "vue-router";

    import { useCurrentUserStore } from "../components/currentUserStore.js";
    import getProjectLists from "../components/getProjectLists.js";

    const currentUser = useCurrentUserStore();
    const { getSpecificProjectWithTasks } = getProjectLists();

    const tasks = ref([]);

    const route = useRoute();

    const currentProjectHasTasks = computed( () => tasks.value.length > 0);
    
    async function loadTasksOfProject() {
        const fullProject = await getSpecificProjectWithTasks(route.params.id);

        for (let task of fullProject.tasks) {
            tasks.value.push(task);
        }
    }

    onMounted(loadTasksOfProject);
</script>