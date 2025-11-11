// Toggle sidebar di hp
document.getElementById("sidebarToggle").addEventListener("click", function () {
  document.querySelector(".sidebar").classList.toggle("active");
  document.getElementById("overlay").classList.toggle("active");
});

// Close sidebar when clicking on overlay
document.getElementById("overlay").addEventListener("click", function () {
  document.querySelector(".sidebar").classList.remove("active");
  this.classList.remove("active");
});

// Close sidebar when clicking on a link (mobile)
document.querySelectorAll(".sidebar a").forEach((link) => {
  link.addEventListener("click", function () {
    if (window.innerWidth < 768) {
      document.querySelector(".sidebar").classList.remove("active");
      document.getElementById("overlay").classList.remove("active");
    }
  });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    if (targetId === "#") return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });
    }
  });
});

// Progress bar
window.addEventListener("scroll", function () {
  const winScroll =
    document.body.scrollTop || document.documentElement.scrollTop;
  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  document.getElementById("progressBar").style.width = scrolled + "%";
});

// Animation on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("section-visible");
    }
  });
}, observerOptions);

document.querySelectorAll(".section-animate").forEach((section) => {
  observer.observe(section);
});

// btn ke atas
const balikKeAtas = document.getElementById("backToTop");

// muncul ilang btn ke atas
window.addEventListener("scroll", function () {
  if (window.pageYOffset > 300) {
    balikKeAtas.classList.add("visible");
  } else {
    balikKeAtas.classList.remove("visible");
  }
});

// Smooth scroll to top when button is clicked
balikKeAtas.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Loading screen dengan multiple fallback
window.addEventListener("load", function () {
  hideLoadingScreen();
});

// Fallback jika window.load tidak terpicu
setTimeout(hideLoadingScreen, 3000);

// Fallback untuk DOMContentLoaded
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(hideLoadingScreen, 1000);
});

function hideLoadingScreen() {
  const loadingScreen = document.getElementById("loadingScreen");
  if (loadingScreen) {
    loadingScreen.style.opacity = "0";
    setTimeout(() => {
      loadingScreen.style.display = "none";
    }, 500);
  }
}

// Alternative: Check jika semua gambar sudah loaded
document.addEventListener("readystatechange", function () {
  if (document.readyState === "complete") {
    hideLoadingScreen();
  }
});

// modal

const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");
const overlay = document.getElementById("modalOverlay");

// Fungsi untuk membuka modal
openBtn.onclick = () => {
  overlay.style.display = "flex";
  document.body.style.overflow = "hidden"; // Mencegah scroll di body saat modal terbuka
};

// Fungsi untuk menutup modal
closeBtn.onclick = () => {
  overlay.style.display = "none";
  document.body.style.overflow = "auto"; // Mengembalikan scroll di body
};

// Tutup jika klik di luar kotak modal
window.onclick = (e) => {
  if (e.target === overlay) {
    overlay.style.display = "none";
    document.body.style.overflow = "auto";
  }
};

// Tutup modal dengan tombol Escape
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && overlay.style.display === "flex") {
    overlay.style.display = "none";
    document.body.style.overflow = "auto";
  }
});

// Animasi untuk kartu anggota saat modal terbuka
overlay.addEventListener("click", () => {
  const cards = document.querySelectorAll(".member-card");
  cards.forEach((card, index) => {
    setTimeout(() => {
      card.classList.add("visible-card");
    }, index * 100);
  });
});

// Tambahkan di script.js
document
  .getElementById("openBtnSidebar")
  .addEventListener("click", function () {
    document.getElementById("modalOverlay").style.display = "flex";
    document.body.style.overflow = "hidden";
  });
