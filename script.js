document.addEventListener("DOMContentLoaded", function () {
    const elementsToReveal = document.querySelectorAll("section, .gallery img"); // Select sections and images

    function revealElements() {
        elementsToReveal.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementTop < windowHeight * 0.85) { // Adjusted the threshold here for less scrolling
                element.classList.add("visible");
            } else {
                element.classList.remove("visible");
            }
        });
    }

    window.addEventListener('scroll', revealElements);
    revealElements(); // Initial call to reveal elements already in view

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const target = document.getElementById(targetId);

            if (target) {
                window.scrollTo({
                    top: target.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});
