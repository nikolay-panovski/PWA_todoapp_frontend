import { backendBaseURL } from "./backendBaseURL.js";
import { useCurrentUserStore } from "./currentUserStore.js";

const getTaskListsFunctions = () => {

    const currentUser = useCurrentUserStore();

    async function getTasksInProjects() {
        return fetch(backendBaseURL + "/api/task/public/" + currentUser.id,
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

    async function getPersonalTasks() {
        return fetch(backendBaseURL + "/api/task/personal/" + currentUser.id,
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
        getTasksInProjects,
        getPersonalTasks
    } ;
};

export default getTaskListsFunctions;