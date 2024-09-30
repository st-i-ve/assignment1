document.addEventListener("DOMContentLoaded", function () {
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const nav = document.querySelector(".nav");

  if (hamburgerMenu && nav) {
    hamburgerMenu.addEventListener("click", () => {
      nav.classList.toggle("active");
    });
  }
});

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
document.addEventListener("DOMContentLoaded", function () {
  const galleries = document.querySelectorAll(".image-gallery");

  galleries.forEach((gallery) => {
    const images = gallery.querySelectorAll("img");
    const prevBtn = gallery.querySelector(".prev-btn");
    const nextBtn = gallery.querySelector(".next-btn");
    let currentIndex = 0;

    // Show the first image initially
    images[currentIndex].classList.add("active");

    function showImage(index) {
      images[currentIndex].classList.remove("active");
      currentIndex = (index + images.length) % images.length;
      images[currentIndex].classList.add("active");
    }

    prevBtn.addEventListener("click", () => {
      showImage(currentIndex - 1);
    });

    nextBtn.addEventListener("click", () => {
      showImage(currentIndex + 1);
    });
  });
});