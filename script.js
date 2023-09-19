console.log("Hello World!");

//Set the web browser to current page
const activePage = window.location.pathname;
// Get all the anchor tags within the navigation
const navLinks = document.querySelector(".nav-links").querySelectorAll("a");
console.log(navLinks);

// Function to add or remove the 'active-link' class
navLinks.forEach((el) => {
    if (el.href.includes(activePage)) {
        el.classList.add("active");
    } else {
        el.classList.remove("active");
    }
});
