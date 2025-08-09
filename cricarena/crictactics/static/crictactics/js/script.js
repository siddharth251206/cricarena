document.addEventListener("DOMContentLoaded", () => {
  
    const toggleBtn = document.querySelector(".toggle-btn");
const hamburger = document.querySelector(".hamburger");
const closeBtn = document.querySelector(".close-btn");
const iplToggle = document.querySelector(".hamburger-ipl-toggle");
const iplDropdown = document.querySelector(".hamburger .dropdown-menu");
const arrow = document.querySelector(".dropdown-arrow");
const profarrow=document.querySelector(".dropdown-arrow-profile");

toggleBtn?.addEventListener("click", () => {
  hamburger?.classList.add("open");
  document.body.style.overflow = 'hidden';
});

closeBtn?.addEventListener("click", () => {
  hamburger?.classList.remove("open");
  document.body.style.overflow = 'auto';
});

iplToggle?.addEventListener("click", () => {
  iplDropdown?.classList.toggle("open");
  arrow?.classList.toggle("rotate");
});

// Profile dropdown toggle
const profileToggle = document.getElementById("profileDropdownToggle");
const profileDropdown = document.getElementById("profileDropdown");

profileToggle?.addEventListener("click", () => {
  profarrow?.classList.toggle("rotate");
  if (profileDropdown.style.display === "none") {
    profileDropdown.style.display = "flex";
  } else {
    profileDropdown.style.display = "none";
  }
});
const userAvatar = document.getElementById("userAvatar");
const userDropdown = document.getElementById("userDropdown");

if (userAvatar && userDropdown) {
  userAvatar.addEventListener("click", () => {
    userDropdown.style.display = userDropdown.style.display === "block" ? "none" : "block";
  });

  // Optional: hide when clicking outside
  document.addEventListener("click", (e) => {
    if (!userAvatar.contains(e.target) && !userDropdown.contains(e.target)) {
      userDropdown.style.display = "none";
    }
  });
}
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

  // Image modal/lightbox logic
  const modal = document.getElementById('imgModal');
  const modalImg = document.getElementById('imgModalContent');
  const modalCloseBtn = document.querySelector('.img-modal-close');
  document.querySelectorAll('.enlargeable').forEach(img => {
    img.addEventListener('click', function() {
      modal.classList.add('open');
      modalImg.src = this.getAttribute('data-img');
      modalImg.alt = this.alt;
    });
  });
  modalCloseBtn.addEventListener('click', function() {
    modal.classList.remove('open');
    modalImg.src = '';
  });
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      modal.classList.remove('open');
      modalImg.src = '';
    }
  });
  const loader = document.getElementById("page-loader");
const nextPageName = document.getElementById("next-page-name");

// Mark page as JS-ready so CSS flex works
document.documentElement.classList.add("js-loader-ready");

// Handle link clicks for forward navigation
document.querySelectorAll("a").forEach(link => {
  if (
    link.hostname === window.location.hostname &&
    link.getAttribute("href") &&
    !link.href.includes("#")
  ) {
    link.addEventListener("click", e => {
      if (e.ctrlKey || e.metaKey || link.target === "_blank") return;

      e.preventDefault();

      // Set loading page name
      const pageName = link.getAttribute("data-page") || link.textContent.trim() || "Loading";
      nextPageName.textContent = pageName;

      // Show loader animation
      loader.classList.remove("hide");
      loader.classList.add("active");

      // Navigate after short delay
      setTimeout(() => {
        window.location.href = link.href;
      }, 500);
    });
  }
});

// On page load
window.addEventListener("load", () => {
  setTimeout(() => {
    loader.classList.add("hide");
    loader.classList.remove("active");
  }, 300);
});

// Detect browser back/forward and disable animation
window.addEventListener("pageshow", (event) => {
  if (
    event.persisted ||
    performance.getEntriesByType("navigation")[0]?.type === "back_forward"
  ) {
    loader.style.transition = "none"; // kill animation
    loader.classList.add("hide");
    loader.classList.remove("active");
    // Restore animation for future forward nav
    requestAnimationFrame(() => {
      loader.style.transition = "";
    });
  }
});

});