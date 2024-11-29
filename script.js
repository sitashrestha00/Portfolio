// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
        });
    });
});

// Handle Project Details
const projectButtons = document.querySelectorAll(".view-project");
projectButtons.forEach(button => {
    button.addEventListener("click", () => {
        const projectName = button.getAttribute("data-project");
        alert(`You clicked on ${projectName}! More details coming soon.`);
    });
});

// Handle Contact Form Submission
document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    alert(`Thank you, ${name}! Your message has been sent.`);
    this.reset();
});