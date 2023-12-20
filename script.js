document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("redirectButton");
    button.addEventListener("click", function() {
        // URLs to toggle between
        const url1 = "https://first-url.com";
        const url2 = "https://second-url.com";

        // Check the current state in localStorage
        let shouldRedirectToUrl1 = localStorage.getItem("redirectToUrl1") !== "false";

        // Redirect and toggle the state
        if (shouldRedirectToUrl1) {
            window.location.href = url1;
        } else {
            window.location.href = url2;
        }

        // Save the updated state
        localStorage.setItem("redirectToUrl1", !shouldRedirectToUrl1);
    });
});
