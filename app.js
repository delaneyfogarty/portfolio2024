document.addEventListener("DOMContentLoaded", function () {
  // Select all links with the 'scroll' class
  const scrollLinks = document.querySelectorAll('a[href^="#"]');

  // Loop through each link and add a click event listener
  scrollLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      // Get the target section's ID from the link's href attribute
      const targetId = this.getAttribute("href").substring(1);

      // Find the target section by its ID
      const targetSection = document.getElementById(targetId);

      // Scroll to the target section smoothly
      targetSection.scrollIntoView({ behavior: "smooth" });
    });
  });
});
