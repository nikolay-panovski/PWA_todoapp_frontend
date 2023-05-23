import { backendBaseURL } from "./backendBaseURL.js";
import { useCurrentUserStore } from "./currentUserStore.js";

const getProjectListsFunctions = () => {

    const currentUser = useCurrentUserStore();

    async function getAllCompanyProjects() {
        return fetch(backendBaseURL + "/api/project/all",
            {
                method: "GET",
                headers: { 
                    "Accept": "application/json"
                },    
                mode: 'cors'
            } )
            .then ( (responseObject) => responseObject.json())
            .then ( (responseJson) => { return responseJson; } )
            .catch( (error) => console.log(error) );
    }

    async function getSpecificProjectWithTasks(projectId) {
        return fetch(backendBaseURL + "/api/project/tasks/" + projectId,
            {
                method: "GET",
                headers: { 
                    "Accept": "application/json"
                },    
                mode: 'cors'
            } )
            .then ( (responseObject) => responseObject.json())
            .then ( (responseJson) => { return responseJson; } )
            .catch( (error) => console.log(error) );
    }

    return {
        getAllCompanyProjects,
        getSpecificProjectWithTasks
    } ;
};

export default getProjectListsFunctions;