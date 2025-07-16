function toggleInfo(id) {
  const section = document.getElementById(id);
  if (section.style.display === "block") {
    section.style.display = "none";
  } else {
    section.style.display = "block";
  }
}
document.addEventListener("DOMContentLoaded", () => {
  
    const toggleBtn = document.querySelector(".toggle-btn");
  const hamburger = document.querySelector(".hamburger");
  const closeBtn = document.querySelector(".close-btn");
  const iplToggle = document.querySelector(".hamburger-ipl-toggle");
  const iplDropdown = document.querySelector(".hamburger .dropdown-menu");
  const arrow = document.querySelector(".dropdown-arrow");

  toggleBtn?.addEventListener("click", () => {
    console.log("Opening hamburger");
    hamburger?.classList.add("open");
    document.body.style.overflow = 'hidden';
  });

  closeBtn?.addEventListener("click", () => {
    console.log("Closing hamburger");
    hamburger?.classList.remove("open");
    document.body.style.overflow = 'auto';
  });

  iplToggle?.addEventListener("click", () => {
    iplDropdown?.classList.toggle("open");
    arrow?.classList.toggle("rotate");
  });
   const scrollToTopBtn = document.getElementById("scrollToTopBtn");

  // Show/hide button on scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  });

  // Smooth scroll to top
  scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});