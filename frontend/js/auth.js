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

// Decode JWT payload
function getUser() {

    const token = getToken();

    if (!token) return null;

    try {

        const payload = JSON.parse(atob(token.split(".")[1]));

        return payload;

    } catch (error) {

        console.error("Invalid token");

        return null;

    }

}

// Check if logged-in user is an admin
function isAdmin() {

    const user = getUser();

    return user && user.role === "admin";

}