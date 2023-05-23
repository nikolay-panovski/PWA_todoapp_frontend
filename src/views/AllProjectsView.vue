<template>
    <Suspense>
        <template #default>
            <div v-if="currentUserHasProjects">
                <table class="mx-8 my-4">
                    <tr class="p-3">
                        <th class="p-3">Project</th>
                        <th class="p-3">Stakeholder</th>
                        <th class="p-3">Deadline</th>
                        <th class="p-3">Actions</th>
                    </tr>
                    <tr v-for="project in projects" v-bind:key="project._id"
                    class="p-3">
                        <td class="p-3"> {{ project.name }}</td>
                        <td class="p-3"> {{ project.company_client }}</td>
                        <td class="p-3"> {{ project.deadline }} </td>
                        <button type="button" @click="goToProjectPage(project._id)"
                            class="bg-green-300 rounded-lg
                                relative p-2 left-0 right-0
                                text-lg font-semibold text-white">Go</button>
                    </tr>
                </table>
                
            </div>
            <div v-else>
                No projects here! If you are a manager, create a project via the "New project" button.
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
    import getProjectLists from "../components/getProjectLists.js";

    const currentUser = useCurrentUserStore();
    const { getAllCompanyProjects } = getProjectLists();

    const projects = ref([]);

    const currentUserHasProjects = computed( () => projects.value.length > 0);
    
    async function loadProjects() {
        projects.value = await getAllCompanyProjects();


    }

    function goToProjectPage(projectId) {
        router.push( { name: "project", params: { id: projectId } } );
    }

    onMounted(loadProjects);
</script>