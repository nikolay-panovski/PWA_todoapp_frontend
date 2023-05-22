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
                    "auth-token": "currentUser.token"
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
            .then ( (responseObject) => { 
                if (responseObject.ok) {
                    responseObject.json().then ( (responseJson) => { return responseJson; } )
                }
                else {
                    let responseError;
                    return responseObject.json().then( (responseJson => {
                        responseError = responseJson.error;
                        console.log(responseError);

                        return {
                            errorStatus: responseObject.status,
                            errorText: responseError
                        };   // let frontend inspect status code and react (somewhat) accordingly
                    }) );
                    console.log("response not ok");
                    
                }
            })
            // practically useless, I'm not sure if my understanding is correct, but catch does not handle the response object for rejected promises?
            // possibly meaning that this only triggers if a network error happens and a promise is not fulfilled
            .catch( (error) => console.log(error) );
    }

    return {
        createNewProject
    } ;
};

export default createNewProjectFunctions;