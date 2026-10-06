"use strict";

/* ------------------------------------------------------------------ */
/* Helpers                                                             */
/* ------------------------------------------------------------------ */

function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[\s_]+/g, "-")
    .replace(/[^\p{L}\p{N}-]+/gu, "")
    .replace(/-{2,}/g, "-")
    .replace(/^-+|-+$/g, "");
}

function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function markdownToHtml(markdown) {
  if (!markdown) return "";

  const escaped = escapeHtml(markdown)
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>");

  const lines = escaped.split(/\r?\n/);
  let html = "";
  let inList = false;

  lines.forEach((line) => {
    const trimmed = line.trim();

    if (/^(\*|-|\+)\s+/.test(trimmed)) {
      if (!inList) {
        html += "<ul>";
        inList = true;
      }
      html += `<li>${trimmed.replace(/^(\*|-|\+)\s+/, "")}</li>`;
    } else {
      if (inList) {
        html += "</ul>";
        inList = false;
      }
      if (trimmed !== "") {
        html += `<p>${trimmed}</p>`;
      }
    }
  });

  if (inList) html += "</ul>";
  return html;
}

/* ------------------------------------------------------------------ */
/* Stats                                                               */
/* ------------------------------------------------------------------ */

let totalDuration = 0;
let loadedCount = 0;

function updateStats() {
  if (loadedCount !== podcasts.length) return;

  const totalSeconds = Math.round(totalDuration);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.round((totalSeconds % 3600) / 60);
  const label = hours > 0
    ? `${hours} h ${minutes.toString().padStart(2, "0")}`
    : `${minutes} min`;

  document.querySelectorAll(".js-duration").forEach((el) => {
    el.textContent = label;
  });
}

/* ------------------------------------------------------------------ */
/* Rendering                                                           */
/* ------------------------------------------------------------------ */

const container = document.getElementById("podcast-list");
const menuContainer = document.getElementById("podcast-menu");
const searchInput = document.getElementById("search-input");
const activeAudios = new Set();

podcasts.forEach((p) => {
  const id = slugify(p.title);
  const chapter = p.chapter || "";

  const card = document.createElement("article");
  card.className = "card";
  card.id = id;
  card.dataset.search = `${p.title} ${p.label || ""} ${p.description || ""}`.toLowerCase();

  const imgHtml = p.img
    ? `<img src="${escapeHtml(p.img)}" alt="${escapeHtml(p.title)}" class="podcast-img" loading="lazy" />`
    : `<div class="podcast-img cover-fallback" aria-hidden="true"><span>${chapter || "?"}</span></div>`;

  card.innerHTML = `
    <div class="card-media">
      ${imgHtml}
      ${chapter ? `<span class="chapter-badge">Épisode ${chapter}</span>` : ""}
    </div>
    <div class="card-body">
      <h2 class="title">${escapeHtml(p.title)}</h2>
      <div class="desc collapsed" id="desc-${id}">${markdownToHtml(p.description)}</div>
      <button class="toggle-desc" type="button" aria-expanded="false" aria-controls="desc-${id}">
        <span class="toggle-more">Lire la suite</span>
        <span class="toggle-less">Réduire</span>
      </button>
      <audio controls preload="metadata">
        <source src="${escapeHtml(p.audio)}" type="audio/mpeg">
      </audio>
    </div>
  `;

  const imgElement = card.querySelector(".podcast-img");
  if (imgElement) {
    imgElement.addEventListener("click", () => openModal(p.img, p.title));
  }

  const toggle = card.querySelector(".toggle-desc");
  const desc = card.querySelector(".desc");
  toggle.addEventListener("click", () => {
    const collapsed = desc.classList.toggle("collapsed");
    toggle.setAttribute("aria-expanded", String(!collapsed));
  });

  const audio = card.querySelector("audio");
  audio.addEventListener("loadedmetadata", () => {
    totalDuration += audio.duration || 0;
    loadedCount++;
    updateStats();
  });
  audio.addEventListener("play", () => {
    activeAudios.forEach((a) => {
      if (a !== audio) a.pause();
    });
    activeAudios.add(audio);
  });

  container.appendChild(card);

  if (menuContainer) {
    const item = document.createElement("a");
    item.href = `#${id}`;
    item.className = "menu-item";
    item.innerHTML = `<span class="menu-num">${chapter}</span>${escapeHtml(p.label || p.title)}`;
    menuContainer.appendChild(item);
  }
});

/* ------------------------------------------------------------------ */
/* Search                                                              */
/* ------------------------------------------------------------------ */

if (searchInput) {
  searchInput.addEventListener("input", () => {
    const query = searchInput.value.trim().toLowerCase();
    let visible = 0;

    container.querySelectorAll(".card").forEach((card) => {
      const match = card.dataset.search.includes(query);
      card.hidden = !match;
      if (match) visible++;
    });

    menuContainer.querySelectorAll(".menu-item").forEach((item) => {
      const target = document.getElementById(item.getAttribute("href").slice(1));
      item.classList.toggle("dimmed", target ? target.hidden : false);
    });

    const empty = document.getElementById("no-result");
    if (empty) empty.hidden = visible > 0;
  });
}

/* ------------------------------------------------------------------ */
/* Modal                                                               */
/* ------------------------------------------------------------------ */

const modal = document.getElementById("image-modal");
const modalClose = modal ? modal.querySelector(".modal-close") : null;

function openModal(src, alt) {
  if (!modal) return;
  const modalImg = document.getElementById("modal-img");
  modalImg.src = src;
  modalImg.alt = alt || "";
  modal.classList.add("open");
}

function closeModal() {
  if (modal) modal.classList.remove("open");
}

if (modalClose) modalClose.addEventListener("click", closeModal);
if (modal) {
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });
}
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

/* ------------------------------------------------------------------ */
/* Back to top                                                         */
/* ------------------------------------------------------------------ */

const backToTop = document.getElementById("back-to-top");

if (backToTop) {
  window.addEventListener("scroll", () => {
    backToTop.classList.toggle("show", window.scrollY > 250);
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/* ------------------------------------------------------------------ */
/* Footer counters                                                     */
/* ------------------------------------------------------------------ */

document.querySelectorAll(".js-count").forEach((el) => {
  el.textContent = podcasts.length;
});
