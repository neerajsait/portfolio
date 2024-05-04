var typed = new Typed(".text", {
    strings: ["Programming" , "cybersecurity" , "Web developer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});

// Select the rocket icon element with the class "top"
const toTop = document.querySelector(".top");
// Function to scroll to the top of the page
function scrollToTop() {
    // Scroll to the top of the page
    window.scrollTo({
        top: 0, // Scroll to the top position
        behavior: "smooth" // Use smooth scrolling animation
    });
}

// Event listener to handle click on the rocket icon
toTop.addEventListener("click", scrollToTop); // When the rocket icon is clicked, call the scrollToTop function

// Event listener to show/hide the rocket icon based on scroll position
window.addEventListener("scroll", () => {
    // If the vertical scroll position is greater than 100 pixels
    if (window.pageYOffset > 100) {
        // Add the "active" class to the rocket icon
        toTop.classList.add("active");
    } else {
        // Otherwise, remove the "active" class from the rocket icon
        toTop.classList.remove("active");
    }
});
