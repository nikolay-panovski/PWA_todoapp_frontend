import { backendBaseURL } from "./backendBaseURL.js";
import { useCurrentUserStore } from "./currentUserStore.js";

const createNewProjectFunctions = () => {

    const currentUser = useCurrentUserStore();

    async function createNewProject(frontendProjectParams) {
        return fetch(backendBaseURL + "/api/project/create",
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
                        name: frontendProjectParams.name,
                        description: frontendProjectParams.description,
                        company_client: frontendProjectParams.company,
                        time_estimated: frontendProjectParams.time_estimated,
                        deadline: frontendProjectParams.deadline,
                        created_at: Date.now(),
                        assignees: new Array(currentUser.id),
                        tasks: new Array()
                    } 
                )
            } )
            .then ( (responseObject) => responseObject.json())
            .then ( (responseJson) => { return responseJson; } )
            .catch( (error) => console.log(error) );
    }

    return {
        createNewProject
    } ;
};

export default createNewProjectFunctions;