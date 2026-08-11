
// ==========================================
// GET SAVED JWT TOKEN
// ==========================================

function getToken() {
    return localStorage.getItem("token");
}


// ==========================================
// GET AUTHORIZATION HEADERS
// ==========================================

function getAuthHeaders() {
    return {
        Authorization: `Bearer ${getToken()}`
    };
}


// ==========================================
// CHECK AUTHENTICATION
// ==========================================

function checkAuth() {

    if (!getToken()) {

        alert("Please login first.");

        const currentPath = window.location.pathname;

        // Pages inside frontend subfolders
        if (
            currentPath.includes("/Songs/") ||
            currentPath.includes("/Albums/") ||
            currentPath.includes("/Artists/") ||
            currentPath.includes("/Playlists/")
        ) {
            window.location.href = "../login.html";
        }

        // Pages directly inside frontend
        else {
            window.location.href = "login.html";
        }
    }
}


// ==========================================
// DECODE JWT PAYLOAD
// ==========================================

function getUser() {

    const token = getToken();

    if (!token) {
        return null;
    }

    try {

        const payload = JSON.parse(
            atob(token.split(".")[1])
        );

        return payload;

    } catch (error) {

        console.error("Invalid token");

        return null;
    }
}


// ==========================================
// CHECK IF USER IS ADMIN
// ==========================================

function isAdmin() {

    const user = getUser();

    return user && user.role === "admin";
}