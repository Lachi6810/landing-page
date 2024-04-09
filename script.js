document.addEventListener("DOMContentLoaded", function () {
    // Slow scrolling animation when clicking on navigation links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            const yOffset = -50; // Adjust this value if needed (negative value moves the target element higher)
            const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        });
    });

    // Intersection Observer to detect when the section comes into view
    const sections = document.querySelectorAll("section");
    sections.forEach(section => {
        observer.observe(section);
    });

    // Move baking process and our cookies elements from corner to middle on scroll
    window.addEventListener("scroll", function () {
        const bakingProcess = document.querySelector(".process");
        const ourCookies = document.querySelector(".products");

        const scrollY = window.scrollY;

        if (scrollY > 100) { // Change this value as needed
            bakingProcess.classList.add("move-to-middle");
            ourCookies.classList.add("move-to-middle");
        }
    });
});

// Intersection Observer to detect when the section comes into view
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("move-in");
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 }); // Trigger animation when at least 50% of the section is in view
document.addEventListener("DOMContentLoaded", function () {
    // Handle click event for price button
    document.getElementById("price").addEventListener("click", function () {
        alert("Add to cart functionality will be implemented here."); // Placeholder action
    });
});
