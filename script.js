// 1. Mobile menu
const toggle = document.querySelector(".nav-toggle");
const nav = document.getElementById("nav");

toggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(isOpen));
});

// Close the menu after tapping a link
nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  });
});

// 2. Contact form opens WhatsApp with the message filled in
// Replace with your number: country code first, no + or spaces (Kenya example: 2547XXXXXXXX)
const WHATSAPP_NUMBER = "254740919279";

document.getElementById("contact-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.getElementById("name").value.trim();
  const message = document.getElementById("message").value.trim();
  const text = `Hi Jounkey, I'm ${name}. ${message}`;
  const url = `https://wa.me/${254740919279}?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank", "noopener");
});

// 3. Footer year
document.getElementById("year").textContent = new Date().getFullYear();
