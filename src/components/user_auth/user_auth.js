import { backendBaseURL } from "../backendBaseURL.js";

// Object expressing an anonymous function (wrapper to export mutiple functions from one file), as opposed to simply a function (which is simpler to read).
// I pick this so I can make a function const(immutable), I welcome corrections (if functions are already immutable or can be made so in a simpler way).
const userAuthFunctions = () => {

    async function login(email, password) {
        /* ... the /api/userAuth part is hardcoded on the server side, feels like it should be exported like the base URL... */
        return fetch(backendBaseURL + "/api/userAuth/login",
            {
                method: "POST",
                headers: { 
                    "Content-Type": "application/json",  // required, else Chrome's default apparently is text/plain.
                                                         // oddly enough, app.use(express.json()) on server side is either useless or ignored.
                    "Accept": "application/json"
                },    
                mode: 'cors',   // people imply it might be required. I mean, it definitely *is* CORS, might as well be explicit.
                                // https://stackoverflow.com/questions/39842013/fetch-post-with-body-data-not-working-params-empty
                body: JSON.stringify( { email, password } )
            } )
            .then ( (responseObject) => responseObject.json())
            .then ( (responseJson) => { return responseJson; } )    // { error, data { token, userHandle } }
            .catch( (error) => console.log(error) );
    }

    function register() {
        // Not implemented. (Related to not implementing a "company" model, project overview documents contain details.)
        // Test for the mock of user->company of type string:
        // from mongoose->users find one with the same company name,
        // if successful, display text on the same page about how user should contact the current manager(s) to be added separately,
        // if unsuccessful, display text on the same page about how user should create a new company
        // (+ "trying to create a new company in the app version with only one company, consider this a fail)".
        // 
        // Do not insert objects in DB.
    }

    function testDisplayInputs(inputElementsIdsArray) {
        const confirmationDiv = document.createElement("div");
        document.body.appendChild(confirmationDiv);
        confirmationDiv.innerText = "Confirmation of inputs:";
        for (const elementId of inputElementsIdsArray) {
            const inputValueP = document.createElement("p");
            inputValueP.innerText = document.getElementById(elementId).value;   // trusts that all elements will be inputs
            confirmationDiv.appendChild(inputValueP);
        }
    }

    return {
        login,
        register,
        testDisplayInputs
    } ; // this semicolon here commemorates the fact that we are returning an *object* and not *working with function braces*
}


export default userAuthFunctions;