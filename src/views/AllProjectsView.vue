<template>
    <Suspense>
        <template #default>
            <div v-if="currentUserHasProjects">
                <table>
                    <tr>
                        <th>Project</th>
                        <th>Stakeholder</th>
                        <th>Deadline</th>
                        <th>Actions</th>
                    </tr>
                    <tr v-for="project in projects" v-bind:key="project._id"
                    class="">
                        <td> {{ project.name }}</td>
                        <td> {{ project.company_client }}</td>
                        <td> {{ project.deadline }} </td>
                        <button type="button" @click="goToProjectPage(project._id)"
                            class="bg-green-300 rounded-lg
                                relative py-2 left-0 right-0
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