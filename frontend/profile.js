
console.log("profile.js is running");

checkAuth();


// ==========================================
// LOAD PROFILE INFORMATION
// ==========================================

function loadProfile() {

    const user = getUser();

    console.log("User from token:", user);

    if (!user) {

        document.getElementById("username").textContent =
            "Unavailable";

        document.getElementById("email").textContent =
            "Unavailable";

        document.getElementById("role").textContent =
            "Unavailable";

        return;
    }


    const username =
        user.username ||
        user.name ||
        user.user_name ||
        user.userName ||
        "Not available";


    const email =
        user.email ||
        user.user_email ||
        "Not available";


    const role =
        user.role ||
        "listener";


    document.getElementById("username").textContent =
        username;


    document.getElementById("email").textContent =
        email;


    document.getElementById("role").textContent =
        role;
}



// ==========================================
// LOGOUT
// ==========================================

function logout() {

    console.log("Logging out...");

    localStorage.removeItem("token");

    window.location.href = "login.html";
}



// ==========================================
// PAGE LOAD
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    console.log("Profile page loaded");

    const logoutButton =
        document.getElementById("logout-btn");


    if (logoutButton) {

        logoutButton.addEventListener(
            "click",
            logout
        );

    }


    loadProfile();

});

