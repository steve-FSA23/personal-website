console.log("Hello World!");

//Set the web browser to current page
const activePage = window.location.pathname;
// Get all the anchor tags within the navigation
const navLinks = document.querySelectorAll("nav a");
console.log(navLinks);

// Function to add or remove the 'active-link' class
navLinks.forEach((link) => {
    if (link.href.includes(activePage)) {
        link.classList.add("active");
    }
});
