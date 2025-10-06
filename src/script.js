/* ================================================
   NIDHI KUMAR PORTFOLIO - SCRIPT.JS
   Handles Theme Toggle • Scroll Progress • Animations
================================================== */

// --- SCROLL PROGRESS BAR ---
window.addEventListener("scroll", () => {
    const scrollTop = document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const progress = (scrollTop / height) * 100;
    document.getElementById("progress-bar").style.width = progress + "%";
  });
  
  // --- THEME TOGGLE LOGIC ---
  const toggleButton = document.getElementById("theme-toggle");
  
  // Load saved theme
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light") {
    document.body.classList.add("light-mode");
    toggleButton.innerHTML = '<i class="fas fa-moon"></i>';
  } else {
    document.body.classList.remove("light-mode");
    toggleButton.innerHTML = '<i class="fas fa-sun"></i>';
  }
  
  // Toggle theme on click
  toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
  
    if (document.body.classList.contains("light-mode")) {
      toggleButton.innerHTML = '<i class="fas fa-moon"></i>';
      localStorage.setItem("theme", "light");
    } else {
      toggleButton.innerHTML = '<i class="fas fa-sun"></i>';
      localStorage.setItem("theme", "dark");
    }
  });
  
  // --- AOS (Animate on Scroll) INIT ---
  AOS.init({
    duration: 1000,
    once: true, // only animate once per scroll
  });
  
  // --- VANILLA TILT INIT ---
  if (typeof VanillaTilt !== "undefined") {
    VanillaTilt.init(document.querySelectorAll("[data-tilt]"), {
      max: 4,
      speed: 400,
      glare: true,
      "max-glare": 0.3,
    });
  }
  
  // --- SMOOTH SCROLL TO TOP ---
  const backToTop = document.querySelector(".back-to-top");
  if (backToTop) {
    backToTop.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
  
  // --- LOGO / HERO ANIMATION ENTRY (optional) ---
  document.addEventListener("DOMContentLoaded", () => {
    const heroTitle = document.querySelector("#hero h1");
    const heroSubtitle = document.querySelector("#hero p");
    heroTitle.style.opacity = 0;
    heroSubtitle.style.opacity = 0;
  
    setTimeout(() => {
      heroTitle.style.transition = "opacity 1s ease";
      heroTitle.style.opacity = 1;
    }, 300);
  
    setTimeout(() => {
      heroSubtitle.style.transition = "opacity 1.5s ease";
      heroSubtitle.style.opacity = 1;
    }, 700);
  });
  
  // --- FIX MOBILE CAMERA EXIF ROTATION (Conference images) ---
document.querySelectorAll('#conference img').forEach(img => {
    if (img.naturalWidth > img.naturalHeight) {
      // Landscape images stay normal
      img.style.transform = "rotate(0deg)";
    } else {
      // Portrait images from phones are rotated upright
      img.style.transform = "rotate(0deg)";
    }
  });
  