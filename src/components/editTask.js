import { backendBaseURL } from "./backendBaseURL.js";
import { useCurrentUserStore } from "./currentUserStore.js";

const editTaskFunctions = () => {

    const currentUser = useCurrentUserStore();

    async function getTaskForEdit(taskId) {
        return fetch(backendBaseURL + "/api/task/id/" + taskId,
            {
                method: "GET",
                headers: { 
                    "Accept": "application/json",
                    "auth-token": currentUser.token
                },    
                mode: 'cors'
            } )
            .then ( (responseObject) => responseObject.json())
            .then ( (responseJson) => { return responseJson; } )
            .catch( (error) => console.log(error) );
    }

    async function editTask(taskId, frontendTaskParams) {
        return fetch(backendBaseURL + "/api/task/edit/" + taskId,
            {
                method: "PATCH",
                headers: { 
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "auth-token": currentUser.token
                },    
                mode: 'cors',
                body: JSON.stringify( 
                    { 
                        name: frontendTaskParams.name,
                        description: frontendTaskParams.description,
                        time_registered: frontendTaskParams.time_registered
                    } 
                )
            } )
            .then ( (responseObject) => responseObject.json())
            .then ( (responseJson) => { return responseJson; } )
            .catch( (error) => console.log(error) );
    }

    return {
        getTaskForEdit,
        editTask
    } ;
};

export default editTaskFunctions;