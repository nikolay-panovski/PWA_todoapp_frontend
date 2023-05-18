// Single global variable for the backend base URL (without route appendices) to be shared across frontend fetches.
// Its purpose is to avoid changing URLs in code in many places if the backend URL changes
// (and it will change at least once in assignment environment between localhost and deployment page URL).
// 
// Mind that the server needs to have similar awareness about the frontend URL, for CORS allowlisting.
export const backendBaseURL = "http://localhost:4000";