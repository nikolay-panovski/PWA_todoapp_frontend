import { backendBaseURL } from "./backendBaseURL.js";
import { useCurrentUserStore } from "./currentUserStore.js";

const createNewTaskFunctions = () => {

    const currentUser = useCurrentUserStore();

    async function createNewTask(frontendTaskParams) {
        return fetch(backendBaseURL + "/api/task/create",
            {
                method: "POST",
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
                        state_visibility: "Personal",
                        state_completion: "Incomplete",
                        assignee: currentUser.id,
                        project: null,
                        created_at: Date.now(),
                        time_estimated: frontendTaskParams.time_estimated
                    } 
                )
            } )
            .then ( (responseObject) => responseObject.json())
            .then ( (responseJson) => { return responseJson; } )
            .catch( (error) => console.log(error) );
    }

    return {
        createNewTask
    } ;
};

export default createNewTaskFunctions;