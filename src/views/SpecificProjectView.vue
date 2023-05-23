<template>
    <Suspense>
        <template #default>
            <div v-if="currentProjectHasTasks">
                <table class="mx-8 my-4">
                    <tr class="p-3">
                        <th class="p-3">Task</th>
                        <th class="p-3">Project</th>
                        <th class="p-3">Assignee</th>
                        <th class="p-3">Time estimated</th>
                        <th class="p-3">Time registered</th>
                        <th class="p-3">Actions</th>
                    </tr>
                    <tr v-for="task in tasks" v-bind:key="task._id"
                    class="p-3">
                        <td class="p-3"> {{ task.name }} </td>
                        <td class="p-3"> {{ task.project }} </td>    <!-- uh oh, ObjectId -->
                        <td class="p-3"> {{ task.assignee }} </td>   <!-- uh oh, more ObjectId! needs more populate() routes to be proper. -->
                        <td class="p-3"> {{ task.time_estimated }} </td>
                        <td class="p-3"> {{ task.time_registered }} </td>
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