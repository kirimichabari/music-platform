// Returns the saved JWT token
function getToken() {
    return localStorage.getItem("token");
}

// Returns the authorization header
function getAuthHeaders() {
    return {
        Authorization: `Bearer ${getToken()}`
    };
}

// Redirects user to login if not authenticated
function checkAuth() {

    if (!getToken()) {

        alert("Please login first.");

        window.location.href = "../Login/login.html";

    }

}