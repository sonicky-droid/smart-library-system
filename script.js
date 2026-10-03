```javascript id="q1w8zn"
// ==========================================
// SMART LIBRARY MANAGEMENT SYSTEM
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    // -------------------------------
    // LOGIN
    // -------------------------------

    const loginForm = document.getElementById("loginForm");

    if (loginForm) {

        loginForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const email = document.getElementById("email").value.trim();
            const password = document.getElementById("password").value.trim();

            if (email && password) {

                localStorage.setItem("loggedIn", "true");

                window.location.href = "index.html";

            }

        });

    }


    // -------------------------------
    // SIGN UP
    // -------------------------------

    const signupForm = document.getElementById("signupForm");

    if (signupForm) {

        signupForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const password = document.getElementById("password").value.trim();

            if (name && email && password) {

                localStorage.setItem("userName", name);
                localStorage.setItem("userEmail", email);

                alert("Account created successfully!");

                window.location.href = "login.html";

            }

        });

    }


    // -------------------------------
    // DASHBOARD NAVIGATION
    // -------------------------------

    const sections = document.querySelectorAll(".page-section");

    function showSection(sectionId) {

        sections.forEach(function (section) {
            section.classList.remove("active");
        });

        const selectedSection = document.getElementById(sectionId);

        if (selectedSection) {
            selectedSection.classList.add("active");
        }

    }


    // Make showSection available to HTML buttons
    window.showSection = showSection;


    // -------------------------------
    // SHOW DASHBOARD BY DEFAULT
    // -------------------------------

    if (document.getElementById("dashboard")) {
        showSection("dashboard");
    }


    // -------------------------------
    // LOGOUT
    // -------------------------------

    window.logout = function () {

        localStorage.removeItem("loggedIn");

        window.location.href = "login.html";

    };

});
```
