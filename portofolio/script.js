// =========================================================
// 1. Menu navigasi mobile (hamburger)
// =========================================================
const navToggle = document.getElementById("navToggle");
const navLinks = document.querySelector(".navbar__links");

navToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", isOpen);
});

// Tutup menu otomatis saat salah satu link diklik (khusus tampilan mobile)
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

// =========================================================
// 2. Tahun otomatis di footer
// =========================================================
document.getElementById("year").textContent = new Date().getFullYear();

// =========================================================
// 3. Highlight menu navigasi sesuai section yang sedang dilihat
// =========================================================
const sections = document.querySelectorAll("section[id]");
const navAnchors = document.querySelectorAll(".navbar__links a");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        navAnchors.forEach((a) => {
          a.style.color = a.getAttribute("href") === `#${id}` ? "var(--text)" : "";
        });
      }
    });
  },
  { rootMargin: "-40% 0px -55% 0px" }
);

sections.forEach((section) => observer.observe(section));

// =========================================================
// 4. Tombol "kembali ke atas"
// =========================================================
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    backToTop.classList.add("is-visible");
  } else {
    backToTop.classList.remove("is-visible");
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
