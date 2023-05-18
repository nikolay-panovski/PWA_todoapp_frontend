import { backendBaseURL } from "../backendBaseURL.js";

// Object expressing an anonymous function (wrapper to export mutiple functions from one file), as opposed to simply a function (which is simpler to read).
// I pick this so I can make a function const(immutable), I welcome corrections (if functions are already immutable or can be made so in a simpler way).
const userAuthFunctions = () => {

    async function login(email, password) {
        let responseResult;

        await fetch(backendBaseURL + "/login", { method: "POST" } )
                .then ( (responseObject) => responseResult = responseObject.body)
                .catch( (error) => console.log(error) );

        return responseResult;  // { error, token, userHandle }
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