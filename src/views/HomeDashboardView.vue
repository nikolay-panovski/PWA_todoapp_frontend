<template>
    <Suspense>
        <template #default>
            <div v-if="currentUserHasTasks">
                <!-- v-for="task in currentUserTasks <filtered to tasks with project !== null>"-->
                <div v-for="task in projectsTasks" v-bind:key="task._id"
                    class="">

                </div>
                <div v-for="task in personalTasks" v-bind:key="task._id"
                    class="">

                </div>
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