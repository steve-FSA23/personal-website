console.log("Hello World!");

// Get all the anchor tags within the navigation
const navLinks = document.querySelectorAll(".nav-links ul li a");

// Function to add or remove the 'active-link' class

navLinks.forEach((link) => {
    if (link.href === window.location.href) {
        link.setAttribute("aria-current", "page");
    }
});
