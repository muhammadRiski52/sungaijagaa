// Default Data Configuration
const FALLBACK_WHATSAPP = "6281234567890";
const FALLBACK_HERO_IMAGE = "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1920&q=80";
const FALLBACK_KADES_NAME = "Bpk. Supriadi";

// Security Sanitization Helpers (XSS Protection)
function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function sanitizeUrl(url) {
  if (!url) return "";
  const clean = String(url).trim();
  // Izinkan: URL https, data URI, path relatif (./...) dan path absolut (/...)
  if (/^(https?:\/\/|data:image\/|\.\/|\/)/i.test(clean)) {
    return clean;
  }
  return "";
}

// =========================================================
// PANDUAN MENAMBAH GAMBAR GALERI LOKAL:
// 1. Letakkan file gambar Anda ke folder: sungaijagaa/images/
// 2. Tambahkan entry baru di array DEFAULT_GALLERY di bawah ini
// 3. Gunakan format src: "./images/nama-file.jpg"
// Contoh: { id: "g5", src: "./images/foto-desa.jpg", title: "Foto Desa" }
// =========================================================
const DEFAULT_GALLERY = [
  // --- GAMBAR LOKAL (taruh file di folder images/) ---
  { id: "g1", src: "./images/a (0).jpg", title: "Ternak Ayam" },
  { id: "g1", src: "./images/a (1).jpg", title: "Ternak Ayam" },
  { id: "g1", src: "./images/a (2).jpg", title: "Pemilik ternak ayam" },
  { id: "g1", src: "./images/a (3).jpg", title: "Sawit di desa" },
  { id: "g1", src: "./images/a (4).jpg", title: "Pohon sawit di desa" },
  { id: "g1", src: "./images/a (5).jpg", title: "Pohon sawit di desa" },
  { id: "g1", src: "./images/a (6).jpg", title: "Ternak Kambing" },
  { id: "g1", src: "./images/a (7).jpg", title: "Ternak Kambing" },
  { id: "g1", src: "./images/a (8).jpg", title: "Ternak Kambing" },
  { id: "g1", src: "./images/a (9).jpg", title: "Ternak kambing" },
  { id: "g1", src: "./images/a (10).jpg", title: "Kandang Kambing" },
  { id: "g1", src: "./images/a (11).jpg", title: "Ternak Sapi Warga" },
  { id: "g1", src: "./images/a (12).jpg", title: "Ternak sapi warga" },
  { id: "g1", src: "./images/a (13).jpg", title: "Ternak sapi warga" },
  { id: "g1", src: "./images/a (14).jpg", title: "Kandang Sapi Warga" },
  { id: "g1", src: "./images/a (15).jpg", title: "Kandang Sapi Warga" },
  { id: "g1", src: "./images/a (16).jpg", title: "Kandang Sapi Warga" },
  { id: "g1", src: "./images/a (17).jpg", title: "Kandang Sapi Warga" },
  { id: "g1", src: "./images/a (18).jpg", title: "Ternak Sapi Warga" },
  { id: "g1", src: "./images/a (19).jpg", title: "Ternak Sapi Warga" },
  { id: "g1", src: "./images/a (20).jpg", title: "Ternak Sapi Warga" },
  { id: "g1", src: "./images/a (21).jpg", title: "Kandang Kambing warga" },
  { id: "g1", src: "./images/a (22).jpg", title: "Ternak Kambinng" },
  { id: "g1", src: "./images/a (23).jpg", title: "Ternak Kambinng" },
  { id: "g1", src: "./images/a (24).jpg", title: "Kebun Warga" },
  { id: "g1", src: "./images/a (25).jpg", title: "Kebun Warga" },
  { id: "g1", src: "./images/a (26).jpg", title: "Kebun Warga" },
  { id: "g1", src: "./images/a (27).jpg", title: "Kebun Warga" },
  { id: "g1", src: "./images/a (28).jpg", title: "Kebun Warga" },
  { id: "g1", src: "./images/a (29).jpg", title: "Kebun Warga" },
  { id: "g1", src: "./images/a (30).jpg", title: "Kebun Warga" },
  { id: "g1", src: "./images/a (31).jpg", title: "Kebun Warga" },
  { id: "g1", src: "./images/a (32).jpg", title: "Kebun Warga" },
  { id: "g1", src: "./images/a (33).jpg", title: "Kebun Warga" },
  { id: "g1", src: "./images/a (34).jpg", title: "Kebun Warga" },
  { id: "g1", src: "./images/a (35).jpg", title: "Kandang Sapi Warga" },
  { id: "g1", src: "./images/a (36).jpg", title: "Ternak Sapi Warga" },
  { id: "g1", src: "./images/a (37).jpg", title: "Ternak Sapi Warga" },
  { id: "g1", src: "./images/a (38).jpg", title: "Ternak Sapi Warga" },
  { id: "g1", src: "./images/a (39).jpg", title: "Ternak Sapi Warga" },
  { id: "g1", src: "./images/a (40).jpg", title: "Ternak Sapi Warga" },
  { id: "g1", src: "./images/a (41).jpg", title: "Ternak Sapi Warga" },
  { id: "g1", src: "./images/a (42).jpg", title: "Ternak Sapi Warga" },
  { id: "g1", src: "./images/a (43).jpg", title: "Kebun Karet" },
  { id: "g1", src: "./images/a (44).jpg", title: "Kebun Karet" },
  { id: "g1", src: "./images/a (45).jpg", title: "Kebun Karet" },
  { id: "g1", src: "./images/a (46).jpg", title: "Ternak Sapi Warga" },
  { id: "g1", src: "./images/a (47).jpg", title: "Ternak Sapi Warga" },
  { id: "g1", src: "./images/a (48).jpg", title: "Produsen Tahu Tradisional" },
  { id: "g1", src: "./images/a (49).jpg", title: "Produsen Tahu Tradisional" },
  { id: "g1", src: "./images/a (50).jpg", title: "Produsen Tahu Tradisional" },
  { id: "g1", src: "./images/a (51).jpg", title: "Produsen Tahu Tradisional" },
  { id: "g1", src: "./images/a (52).jpg", title: "Produsen Tahu Tradisional" },
  { id: "g1", src: "./images/a (53).jpg", title: "Produsen Tahu Tradisional" },
  { id: "g1", src: "./images/a (54).jpg", title: "Produsen Tahu Tradisional" },
  { id: "g1", src: "./images/a (55).jpg", title: "Produsen Tahu Tradisional" },
  { id: "g1", src: "./images/a (56).jpg", title: "Produsen Tahu Tradisional" },
  { id: "g1", src: "./images/a (57).jpg", title: "Produsen Tahu Tradisional" },
  { id: "g1", src: "./images/a (58).jpg", title: "Produsen Tahu Tradisional" },
  { id: "g1", src: "./images/a (59).jpg", title: "Pengepul Sawit" },
  { id: "g1", src: "./images/a (60).jpg", title: "Pengepul Sawit" },
  { id: "g1", src: "./images/a (61).jpg", title: "Pencongkel Kelapa" },
  { id: "g1", src: "./images/a (62).jpg", title: "Pencongkel Kelapa" },
  { id: "g1", src: "./images/a (63).jpg", title: "Pencongkel Kelapa" },
  { id: "g1", src: "./images/a (64).jpg", title: "Pencongkel Kelapa" },
  { id: "g1", src: "./images/a (65).jpg", title: "Pemilik Kebun Kelapa" },
  { id: "g1", src: "./images/a (66).jpg", title: "Pemilik Kebun Kelapa" },
  { id: "g1", src: "./images/a (67).jpg", title: "Kebun Kelapa" },
  { id: "g1", src: "./images/a (68).jpg", title: "Kebun Kelapa" },
  { id: "g1", src: "./images/a (69).jpg", title: "Pengepul Pinang" },
  { id: "g1", src: "./images/a (70).jpg", title: "Pengepul Pinang" },
  { id: "g1", src: "./images/a (71).jpg", title: "Pengepul Pinang" },
  { id: "g1", src: "./images/a (72).jpg", title: "Pengepul Pinang" },
  { id: "g1", src: "./images/a (73).jpg", title: "Pengepul Pinang" },
  { id: "g1", src: "./images/a (74).jpg", title: "Pengepul Pinang" },
  { id: "g1", src: "./images/a (75).jpg", title: "Pengepul Pinang" },
  { id: "g1", src: "./images/a (76).jpg", title: "Pengepul Pinang" },
  { id: "g1", src: "./images/a (77).jpg", title: "Pengepul Pinang" },
  { id: "g1", src: "./images/a (78).jpg", title: "Pengepul Pinang" },
  { id: "g1", src: "./images/a (79).jpg", title: "Ternak Babi" },
  { id: "g1", src: "./images/a (80).jpg", title: "Ternak Babi" },
  { id: "g1", src: "./images/a (81).jpg", title: "Ternak Babi" },
  { id: "g1", src: "./images/a (82).jpg", title: "Budidaya Udang" },
  { id: "g1", src: "./images/a (83).jpg", title: "Budidaya Udang" },
  { id: "g1", src: "./images/a (84).jpg", title: "Budidaya Udang" },
  { id: "g1", src: "./images/a (85).jpg", title: "Budidaya Udang" },
  { id: "g1", src: "./images/a (86).jpg", title: "Budidaya Udang" },
  { id: "g1", src: "./images/a (87).jpg", title: "Budidaya Udang" },
  { id: "g1", src: "./images/a (88).jpg", title: "Budidaya Udang" },
  { id: "g1", src: "./images/a (89).jpg", title: "Sawah Warga" },
  { id: "g1", src: "./images/a (90).jpg", title: "Sawah Warga" },
  { id: "g1", src: "./images/a (91).jpg", title: "Sawah Warga" },
  { id: "g1", src: "./images/a (92).jpg", title: "Sawah Warga" },
  { id: "g1", src: "./images/a (93).jpg", title: "Sawah Warga" },
  { id: "g1", src: "./images/a (94).jpg", title: "Kebun Cabai" },
  { id: "g1", src: "./images/a (95).jpg", title: "Kebun Cabai" },
  { id: "g1", src: "./images/a (96).jpg", title: "Kebun Cabai" },
  { id: "g1", src: "./images/a (97).jpg", title: "Kebun Cabai" },
  { id: "g1", src: "./images/a (98).jpg", title: "Kebun Cabai" },
  { id: "g1", src: "./images/a (99).jpg", title: "Sawah Warga" },
  { id: "g1", src: "./images/a (100).jpg", title: "Sawah Warga" },
  { id: "g1", src: "./images/a (101).jpg", title: "Sawah Warga" },
  { id: "g1", src: "./images/a (102).jpg", title: "Sawah Warga" },
  { id: "g1", src: "./images/a (103).jpg", title: "Sawah Warga" },
  { id: "g1", src: "./images/a (104).jpg", title: "Kebun Kelapa Warga" },
  { id: "g1", src: "./images/a (105).jpg", title: "Kebun Kelapa Warga" },
  { id: "g1", src: "./images/a (106).jpg", title: "Kebun Kelapa Warga" },
  { id: "g1", src: "./images/a (107).jpg", title: "Sawah Warga" },
  { id: "g1", src: "./images/a (108).jpg", title: "Sawah Warga" },
  { id: "g1", src: "./images/a (109).jpg", title: "Sawah Warga" },
  { id: "g1", src: "./images/a (110).jpg", title: "Sawah Warga" },
  { id: "g1", src: "./images/a (111).jpg", title: "Ternak Bebek" },
  { id: "g1", src: "./images/a (112).jpg", title: "Ternak Bebek" },
  { id: "g1", src: "./images/a (113).jpg", title: "Industri Meubel Warga" },
  { id: "g1", src: "./images/a (114).jpg", title: "Industri Meubel Warga" },
  { id: "g1", src: "./images/a (115).jpg", title: "Industri Meubel Warga" },
  { id: "g1", src: "./images/a (116).jpg", title: "Industri Meubel Warga" },
  { id: "g1", src: "./images/a (117).jpg", title: "Industri Meubel Warga" },
  { id: "g1", src: "./images/a (118).jpg", title: "Industri Meubel Warga" },
  { id: "g1", src: "./images/a (119).jpg", title: "Industri Meubel Warga" },
  { id: "g1", src: "./images/a (120).jpg", title: "Industri Meubel Warga" },
  { id: "g1", src: "./images/a (121).jpg", title: "Industri Meubel Warga" },
  { id: "g1", src: "./images/a (122).jpg", title: "Industri Meubel Warga" },
  { id: "g1", src: "./images/a (123).jpg", title: "Industri Meubel Warga" },
  { id: "g1", src: "./images/a (124).jpg", title: "Industri Meubel Warga" },
  { id: "g1", src: "./images/a (125).jpg", title: "Industri Meubel Warga" },
  { id: "g1", src: "./images/a (126).jpg", title: "Kerajinan Caping Warga" },
  { id: "g1", src: "./images/a (127).jpg", title: "Kerajinan Caping Warga" },
  { id: "g1", src: "./images/a (128).jpg", title: "Kerajinan Caping Warga" },
  { id: "g1", src: "./images/a (129).jpg", title: "Kerajinan Caping Warga" },
  { id: "g1", src: "./images/a (130).jpg", title: "Kerajinan Caping Warga" },
  { id: "g1", src: "./images/a (131).jpg", title: "Kerajinan Caping Warga" },
  { id: "g1", src: "./images/a (132).jpg", title: "Bengkel Di Desa" },
  { id: "g1", src: "./images/a (133).jpg", title: "Bengkel Di Desa" },
  { id: "g1", src: "./images/a (134).jpg", title: "Bengkel Di Desa" },
  { id: "g1", src: "./images/a (135).jpg", title: "Aktivitas Nelayan" },
  { id: "g1", src: "./images/a (137).jpg", title: "Aktivitas Nelayan" },
  { id: "g1", src: "./images/a (139).jpg", title: "Aktivitas Nelayan" },
  { id: "g1", src: "./images/a (141).jpg", title: "Aktivitas Nelayan" },
  { id: "g1", src: "./images/a (147).jpeg", title: "Produsen Gula Merah" },
  { id: "g1", src: "./images/a (148).jpeg", title: "Produsen Gula Merah" },
  { id: "g1", src: "./images/a (149).jpeg", title: "Produsen Gula Merah" },
  { id: "g1", src: "./images/a (150).jpeg", title: "Produsen Gula Merah" },
  { id: "g1", src: "./images/a (151).jpeg", title: "Produsen Gula Merah" },
  // { id: "g2", src: "./images/foto2.jpg", title: "Hutan Tropis Tepi Sungai" },

  // --- GAMBAR ONLINE (gunakan URL https://) ---
  // {
  //   id: "g1",
  //   src: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=800&q=80",
  //   title: "Aliran Hulu Rimbun"
  // },
  // {
  //   id: "g2",
  //   src: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=800&q=80",
  //   title: "Hutan Tropis Tepi Sungai"
  // },
  // {
  //   id: "g3",
  //   src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80",
  //   title: "Kabut Pagi Kalimantan"
  // },
  // {
  //   id: "g4",
  //   src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
  //   title: "Perahu Tradisional Nelayan"
  // }
];

// Load and Render Data from LocalStorage or Supabase Database
async function loadPageData() {
  const client = typeof getSupabaseClient === "function" ? getSupabaseClient() : null;

  let whatsapp = FALLBACK_WHATSAPP;
  let kadesName = FALLBACK_KADES_NAME;
  let heroImage = FALLBACK_HERO_IMAGE;
  let galleryData = DEFAULT_GALLERY;

  if (client) {
    try {
      // 1. Fetch settings from Supabase 'settings' table
      const { data: settings, error: settingsError } = await client
        .from('settings')
        .select('*');

      if (!settingsError && settings && settings.length > 0) {
        const settingsMap = {};
        settings.forEach(row => {
          settingsMap[row.key] = row.value;
        });
        if (settingsMap.sj_whatsapp) whatsapp = settingsMap.sj_whatsapp;
        if (settingsMap.sj_kades_name) kadesName = settingsMap.sj_kades_name;
        if (settingsMap.sj_hero_image) heroImage = settingsMap.sj_hero_image;
      }

      // 2. Fetch gallery items from Supabase 'gallery' table
      const { data: galleryItems, error: galleryError } = await client
        .from('gallery')
        .select('*')
        .order('created_at', { ascending: false });

      if (!galleryError && galleryItems) {
        galleryData = galleryItems.map(item => ({
          id: item.id,
          src: item.src,
          title: item.title
        }));
      }
    } catch (err) {
      console.warn("Koneksi Supabase gagal/belum dikonfigurasi, menggunakan LocalStorage fallback:", err);
    }
  } else {
    // LocalStorage Fallback Mode
    whatsapp = localStorage.getItem("sj_whatsapp") || FALLBACK_WHATSAPP;
    kadesName = localStorage.getItem("sj_kades_name") || FALLBACK_KADES_NAME;
    heroImage = localStorage.getItem("sj_hero_image") || FALLBACK_HERO_IMAGE;
    try {
      const raw = localStorage.getItem("sj_gallery");
      galleryData = raw ? JSON.parse(raw) : DEFAULT_GALLERY;
    } catch (e) {
      galleryData = DEFAULT_GALLERY;
    }
  }

  // 1. WhatsApp Sync
  whatsapp = String(whatsapp).replace(/\D/g, "");
  if (whatsapp.startsWith("0")) {
    whatsapp = "62" + whatsapp.slice(1);
  } else if (whatsapp.startsWith("+")) {
    whatsapp = whatsapp.slice(1);
  }

  const whatsappUrl = `https://wa.me/${encodeURIComponent(whatsapp)}?text=Halo%20Semesta%20Desa%20Sungai%20Jaga%20A%2C%20saya%20ingin%20bertanya%20mengenai...`;

  document.querySelectorAll(".btn-whatsapp").forEach(btn => {
    btn.href = whatsappUrl;
  });

  // 2. Kades Name
  const kadesElement = document.getElementById("kadesName");
  if (kadesElement) {
    kadesElement.textContent = kadesName;
  }

  // 3. Hero Image Sync
  const cleanHeroImage = sanitizeUrl(heroImage) || FALLBACK_HERO_IMAGE;
  const heroBgElement = document.getElementById("heroBg");
  if (heroBgElement) {
    heroBgElement.style.backgroundImage = `linear-gradient(135deg, rgba(69, 10, 10, 0.75) 0%, rgba(26, 5, 5, 0.90) 100%), url('${cleanHeroImage}')`;
  }

  // ── Gallery Carousel Slider ─────────────────────────
  const sliderTrack = document.getElementById("gallerySliderTrack");
  const prevBtn = document.getElementById("galleryPrevBtn");
  const nextBtn = document.getElementById("galleryNextBtn");
  const dotsWrap = document.getElementById("galleryDots");
  const slideInfo = document.getElementById("gallerySlideInfo");

  if (sliderTrack) {
    sliderTrack.innerHTML = "";

    if (!Array.isArray(galleryData) || galleryData.length === 0) {
      sliderTrack.innerHTML = `<p style="padding:40px;color:var(--color-text-light);">Belum ada dokumentasi foto galeri.</p>`;
    } else {
      // Build all slide elements
      galleryData.forEach(item => {
        const cleanSrc = sanitizeUrl(item.src) || FALLBACK_HERO_IMAGE;
        const cleanTitle = escapeHtml(item.title || "Foto Sungai Jaga A");
        const slide = document.createElement("div");
        slide.className = "gallery-slide";
        slide.innerHTML = `
          <img src="${cleanSrc}" alt="${cleanTitle}" class="gallery-slide-image" loading="lazy">
          <div class="gallery-slide-overlay">
            <p class="gallery-slide-title">${cleanTitle}</p>
            <div class="gallery-slide-zoom">
              <i data-lucide="zoom-in"></i>
            </div>
          </div>
        `;
        slide.addEventListener("click", () => {
          openLightbox(cleanSrc, item.title || "Dokumentasi Sungai Jaga A");
        });
        sliderTrack.appendChild(slide);
      });

      if (window.lucide) window.lucide.createIcons();

      // ── Carousel state ───────────────────────────────
      const total = galleryData.length;
      let currentPage = 0;

      function getItemsPerPage() {
        if (window.innerWidth <= 600) return 2;
        if (window.innerWidth <= 900) return 3;
        return 4;
      }

      function totalPages() {
        return Math.ceil(total / getItemsPerPage());
      }

      function buildDots() {
        if (!dotsWrap) return;
        dotsWrap.innerHTML = "";
        const pages = totalPages();
        for (let i = 0; i < pages; i++) {
          const dot = document.createElement("button");
          dot.className = "gallery-dot" + (i === 0 ? " active" : "");
          dot.setAttribute("aria-label", `Halaman ${i + 1}`);
          dot.addEventListener("click", () => goToPage(i));
          dotsWrap.appendChild(dot);
        }
      }

      function updateDots() {
        if (!dotsWrap) return;
        dotsWrap.querySelectorAll(".gallery-dot").forEach((d, i) => {
          d.classList.toggle("active", i === currentPage);
        });
      }

      function updateSlideInfo() {
        if (!slideInfo) return;
        const perPage = getItemsPerPage();
        const from = currentPage * perPage + 1;
        const to = Math.min(from + perPage - 1, total);
        slideInfo.textContent = `${from}–${to} / ${total}`;
      }

      function goToPage(page) {
        const perPage = getItemsPerPage();
        const pages = totalPages();
        currentPage = Math.max(0, Math.min(page, pages - 1));

        // Each slide width = (viewport - (perPage-1)*gap) / perPage
        const viewport = sliderTrack.parentElement;
        const gap = 14; // px — matches CSS gap
        const slideW = (viewport.offsetWidth - gap * (perPage - 1)) / perPage;
        const offset = currentPage * (slideW + gap) * perPage;

        sliderTrack.style.transform = `translateX(-${offset}px)`;

        if (prevBtn) prevBtn.disabled = currentPage === 0;
        if (nextBtn) nextBtn.disabled = currentPage >= pages - 1;
        updateDots();
        updateSlideInfo();
      }

      // Init
      buildDots();
      goToPage(0);

      if (prevBtn) prevBtn.addEventListener("click", () => goToPage(currentPage - 1));
      if (nextBtn) nextBtn.addEventListener("click", () => goToPage(currentPage + 1));

      // Rebuild on resize
      window.addEventListener("resize", () => {
        buildDots();
        goToPage(Math.min(currentPage, totalPages() - 1));
      });

      // Touch / swipe support
      let touchStartX = 0;
      const viewport = sliderTrack.parentElement;
      viewport.addEventListener("touchstart", e => { touchStartX = e.touches[0].clientX; }, { passive: true });
      viewport.addEventListener("touchend", e => {
        const diff = touchStartX - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 40) {
          diff > 0 ? goToPage(currentPage + 1) : goToPage(currentPage - 1);
        }
      }, { passive: true });
    }
  }

  // Initialize/re-initialize Scroll Animations
  setupScrollAnimations();
}


// Mobile Menu Navigation Controls
function setupNavbar() {
  const navbar = document.getElementById("navbar");
  const mobileToggle = document.getElementById("mobileToggle");
  const navMenu = document.getElementById("navMenu");
  const navLinks = document.querySelectorAll(".nav-link");
  const menuIcon = document.getElementById("menuIcon");

  // Sticky border & shadow on scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Toggle dynamic mobile menu
  mobileToggle.addEventListener("click", () => {
    navMenu.classList.toggle("open");
    const isOpen = navMenu.classList.contains("open");

    // Change menu icon to X if open
    if (isOpen) {
      menuIcon.setAttribute("data-lucide", "x");
    } else {
      menuIcon.setAttribute("data-lucide", "menu");
    }
    if (window.lucide) window.lucide.createIcons();
  });

  // Close nav on click link & set active
  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      navLinks.forEach(l => l.classList.remove("active"));
      link.classList.add("active");

      if (navMenu.classList.contains("open")) {
        navMenu.classList.remove("open");
        menuIcon.setAttribute("data-lucide", "menu");
        if (window.lucide) window.lucide.createIcons();
      }
    });
  });

  // Update active section link based on scroll position
  window.addEventListener("scroll", () => {
    let current = "";
    const sections = document.querySelectorAll("section, footer");
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPosition >= top && scrollPosition < top + height) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });
}

// Scroll Intersection Observers (Fade In effect)
function setupScrollAnimations() {
  const scrollElements = document.querySelectorAll(".scroll-trigger");

  const elementObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        elementObserver.unobserve(entry.target); // Trigger once
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  });

  scrollElements.forEach(el => {
    elementObserver.observe(el);
  });
}

// =========================================================
// Struktur Data 4 Pilar Utama Potensi Desa
// =========================================================
const PILAR_DATA = [
  {
    id: "perikanan",
    title: "Perikanan Tangkap & Budidaya",
    icon: "fish",
    badgeIcon: "anchor",
    sectorBadge: "Maritim & Bahari",
    description: "Kawasan perairan muara dan laut Sungai Jaga A menjadi sumber mata pencaharian utama ratusan keluarga nelayan dengan hasil tangkapan laut segar melimpah.",
    imageUrl: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80",
    stats: [
      { val: "20+ Unit", lbl: "Armada Kapal Motor" },
      { val: "10+ Jenis", lbl: "Komoditas Bernilai Tinggi" },
      { val: "100% Alami", lbl: "Hasil Tangkapan Segar" },
      { val: "3 Wilayah", lbl: "Jaringan Distribusi Pasar" }
    ],
    detailText: "Desa Sungai Jaga A memiliki letak geografis strategis di garis pesisir Kabupaten Bengkayang yang kaya akan keanekaragaman hayati laut. Wilayah muara sungai menjadi jalur lalu lintas utama armada nelayan tradisional menuju perairan laut lepas.",
    bulletPoints: [
      "<strong>Komoditas Tangkapan Utama:</strong> Menghasilkan ikan bernilai ekonomis tinggi seperti Ikan Tenggiri, Tongkol, Kakap Merah/Putih, Bawal, Kepiting Bakau, serta Udang Rebon & Vaname berkualitas prima.",
      "<strong>Budidaya:</strong> Budidaya udang yang melimpah dengan satu sektor menjaga keseimbangan hasil laut.",
      "<strong>Armada & Metode Ramah Lingkungan:</strong> Beroperasi menggunakan kapal motor tradisional dengan jaring insang dan pancing ulur yang menjaga kelestarian terumbu karang.",
      "<strong>Rantai Distribusi Terintegrasi:</strong> Hasil tangkapan harian langsung disalurkan ke Tempat Pelelangan Ikan (TPI), pasar basah lokal Bengkayang & Singkawang, serta sentra pengasinan ikan desa.",
      "<strong>Konservasi Wilayah Pesisir:</strong> Program kelompok nelayan menjaga kebersihan kawasan muara dari polusi dan penangkapan ikan ilegal."
    ],
    tags: ["Ikan Tenggiri", "Kakap & Bawal", "Udang Rebon", "Kepiting Bakau", "Kapal Tradisional"]
  },
  {
    id: "pertanian",
    title: "Pertanian & Perkebunan",
    icon: "sprout",
    badgeIcon: "leaf",
    sectorBadge: "Agraris & Pangan",
    description: "Lahan daratan subur di sepanjang aliran sungai dimanfaatkan optimal untuk pertanian pangan dan sentra perkebunan kelapa produktif warga.",
    imageUrl: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1200&q=80",
    stats: [
      { val: "Ratusan Ha", lbl: "Lahan Pertanian Aktif" },
      { val: "Komoditas", lbl: "Padi, Kelapa, Sawit, Cabai, Pinang & Sayuran" },
      { val: "100% Subur", lbl: "Irigasi Sub-Permukaan (Sub-Irrigation / Kanal Lahan Gambut)" },
      { val: "Swasembada", lbl: "Ketahanan Pangan Desa" }
    ],
    detailText: "Dataran alluvial di pesisir Desa Sungai Jaga A memiliki kandungan hara yang sangat tinggi, memungkinkan masyarakat mengembangkan pertanian pangan berkelanjutan serta perkebunan rakyat yang produktif.",
    bulletPoints: [
      "<strong>Tanaman Pangan & Beras Lokal:</strong> Lahan sawah dan ladang aktif menghasilkan padi berkualitas unggul yang pulen dan harum untuk ketahanan pangan keluarga petani.",
      "<strong>Sentra Pertanian:</strong> Ribuan pohon kelapa, sawit, pisang, pinang sebagai pertanian lokal yang dijadikan sebagai sumber penghasilan warga lokal. ",
      "<strong>Hortikultura Musiman:</strong> Budidaya cabai rawit, sayuran hijau, rambutan yang memasok kebutuhan pasar tradisional setiap hari.",
      "<strong>Irigasi Alur (Furrow):</strong> Air dialirkan melalui parit-parit kecil di antara barisan tanaman, cocok untuk palawija dan sayuran.."
    ],
    tags: ["Padi Sawah", "Kelapa Dalam", "Hortikultura", "Irigasi Alami", "Ketahanan Pangan"]
  },
  {
    id: "umkm",
    title: "UMKM Lokal",
    icon: "package",
    badgeIcon: "award",
    sectorBadge: "Olahan & Hilirisasi",
    description: "UMKM di Desa (ekonomi perdesaan) menjadi fondasi utama pertumbuhan ekonomi dari akar rumput dengan memaksimalkan potensi lokal.",
    imageUrl: "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?auto=format&fit=crop&w=1200&q=80",
    stats: [
      { val: "Puluhan KUB", lbl: "Kelompok Usaha Mandiri" },
      { val: "Khas Daerah", lbl: "Kerajinan Caping" },
      { val: "Usaha Harian", lbl: "tukang mengoncek kelapa" },
      { val: "Antar-Kota", lbl: "Pengeksopran hasil panen sawit, pisang, pinang dan kelapa" }
    ],
    detailText: "Sektor pengolahan hasil laut menjadi penggerak ekonomi kreatif desa dengan melibatkan kelompok perempuan dan pemuda nelayan untuk memproduksi olahan pangan berkualitas.",
    bulletPoints: [
      "<strong>Produk Olahan Khas Daerah:</strong> Ikan Asin jemur matahari tanpa bahan pengawet kimia berbahaya, Terasi Udang Rebon Super beraroma gurih alami, Ebi Kering, dan Kerupuk Ikan gurih renyah.",
      "<strong>Pemberdayaan KUB Nelayan:</strong> Melatih keterampilan pengolahan higienis dan manajemen usaha mikro bagi ibu rumah tangga desa.",
      "<strong>Produsen Tahu:</strong> Kelompok kecil masyarakat yang memproduksi tahu dengan alat tradisional sebagai usaha mikro.",
      "<strong>Produsen Gula Merah:</strong> Produktifitas gula merah yang dilakukan sekelompok kecil sebagai usaha sehari-hari.",
      "<strong>Industri Meubel:</strong> Produktifitas meubel kayu yang dilakukan beberapa warga sebagai usaha sehari-hari.",
      "<strong>Jaringan Pemasaran Luas:</strong> Menjadi oleh-oleh favorit yang didistribusikan ke pusat oleh-oleh Singkawang, Sambas, hingga Pontianak."
    ],
    tags: ["Ikan Asin Gurih", "Terasi Udang Super", "Ebi Kering Alami", "Produsen Tahu", "Industri Meubel", "KUB Desa Mandiri", "Gula Merah"]
  },
  {
    id: "peternakan",
    title: "Peternakan Lokal",
    icon: "beef",
    badgeIcon: "zap",
    sectorBadge: "Pangan & Hewani",
    description: "Usaha peternakan rakyat di Desa Sungai Jaga A menjadi sumber protein hewani dan penopang ekonomi keluarga dengan memanfaatkan lahan sekitar permukiman.",
    imageUrl: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=1200&q=80",
    stats: [
      { val: "5 Jenis", lbl: "Hewan Ternak Utama" },
      { val: "Ratusan Ekor", lbl: "Populasi Ternak Aktif" },
      { val: "100% Lokal", lbl: "Bibit & Pakan Alami" },
      { val: "Pasar Lokal", lbl: "Bengkayang & Sekitarnya" }
    ],
    detailText: "Sektor peternakan rakyat Desa Sungai Jaga A memanfaatkan lahan pekarangan dan padang rumput alami di sekitar permukiman. Warga secara turun-temurun mengembangkan usaha ternak skala keluarga yang kini mulai dikelola lebih terstruktur melalui kelompok tani ternak.",
    bulletPoints: [
      "<strong>Hewan Ternak Unggulan:</strong> Sapi lokal, kambing, babi, ayam, dan bebek dipelihara oleh ratusan keluarga peternak dengan sistem kandang dan semi-liar di pekarangan.",
      "<strong>Pakan Alami & Ramah Lingkungan:</strong> Memanfaatkan hijauan alam, dedak padi, dan limbah pertanian sebagai pakan utama sehingga biaya produksi lebih hemat dan produk lebih sehat.",
      "<strong>Potensi Pasar Hari Besar:</strong> Permintaan ternak meningkat signifikan pada momen Idul Adha, hari raya, dan acara adat sehingga memberikan penghasilan tambahan bagi peternak.",
      "<strong>Pengembangan Kelompok Tani Ternak:</strong> Desa mendorong pembentukan kelompok peternak untuk akses modal, pelatihan kesehatan hewan, dan pemasaran bersama.",
      "<strong>Diversifikasi Produk Hewani:</strong> Telur ayam kampung dan bebek menjadi komoditas harian bernilai jual stabil yang dipasok ke warung-warung lokal sekitar desa."
    ],
    tags: ["Sapi Lokal", "Kambing", "Ayam Kampung", "Bebek", "Telur Kampung", "Kelompok Tani Ternak"]
  },
];

// Potential Detail Modal Functions
const potentialModal = document.getElementById("potentialModal");
const potentialModalClose = document.getElementById("potentialModalClose");

function openPotentialModal(type) {
  const pilar = PILAR_DATA.find(item => item.id === type);
  if (!pilar || !potentialModal) return;

  const modalBadge = document.getElementById("modalBadge");
  const modalTitle = document.getElementById("modalTitle");
  const modalSubtitle = document.getElementById("modalSubtitle");
  const modalBody = document.getElementById("modalBody");

  if (modalBadge) modalBadge.innerHTML = `<i data-lucide="${pilar.badgeIcon}"></i> ${pilar.sectorBadge}`;
  if (modalTitle) modalTitle.textContent = pilar.title;
  if (modalSubtitle) modalSubtitle.textContent = pilar.description;

  if (modalBody) {
    let html = '';

    // 1. Support Photo / Image Banner
    if (pilar.imageUrl) {
      html += `
        <div class="modal-banner-imgwrap">
          <img src="${sanitizeUrl(pilar.imageUrl)}" alt="${escapeHtml(pilar.title)}" loading="lazy">
        </div>
      `;
    }

    // 2. Short Description Callout
    if (pilar.description) {
      html += `
        <div class="modal-desc-callout">
          <p>${escapeHtml(pilar.description)}</p>
        </div>
      `;
    }

    // 3. Stats Grid
    if (pilar.stats && pilar.stats.length > 0) {
      html += `<div class="modal-stats-grid">`;
      pilar.stats.forEach(st => {
        html += `
          <div class="modal-stat-box">
            <span class="modal-stat-val">${escapeHtml(st.val)}</span>
            <span class="modal-stat-lbl">${escapeHtml(st.lbl)}</span>
          </div>
        `;
      });
      html += `</div>`;
    }

    // 4. Detail Text & Bullet Points Section
    html += `
      <div class="modal-section-block">
        <h3 class="modal-sec-title">
          <i data-lucide="info"></i> Informasi & Potensi Unggulan
        </h3>
    `;

    if (pilar.detailText) {
      html += `<p class="modal-sec-content">${escapeHtml(pilar.detailText)}</p>`;
    }

    if (pilar.bulletPoints && pilar.bulletPoints.length > 0) {
      html += `<ul class="modal-bullet-list">`;
      pilar.bulletPoints.forEach(bp => {
        html += `
          <li class="modal-bullet-item">
            <i data-lucide="check-circle-2"></i>
            <div>${bp}</div>
          </li>
        `;
      });
      html += `</ul>`;
    }

    html += `</div>`;

    // 5. Tags / Komoditas Pills
    if (pilar.tags && pilar.tags.length > 0) {
      html += `
        <div class="modal-section-block">
          <h3 class="modal-sec-title">
            <i data-lucide="tag"></i> Komoditas & Kata Kunci Terkait
          </h3>
          <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-top: 6px;">
      `;
      pilar.tags.forEach(t => {
        html += `
          <span class="tag-pill"><i data-lucide="tag"></i> ${escapeHtml(t)}</span>
        `;
      });
      html += `
          </div>
        </div>
      `;
    }

    modalBody.innerHTML = html;
  }

  // Update contextual WhatsApp link for this specific potential
  const modalWhatsappBtn = document.getElementById("modalWhatsappBtn");
  if (modalWhatsappBtn) {
    const rawWa = localStorage.getItem("sj_whatsapp") || FALLBACK_WHATSAPP;
    let cleanWa = String(rawWa).replace(/\D/g, "");
    if (cleanWa.startsWith("0")) cleanWa = "62" + cleanWa.slice(1);
    else if (cleanWa.startsWith("+")) cleanWa = cleanWa.slice(1);
    const sectorName = encodeURIComponent(pilar.title);
    modalWhatsappBtn.href = `https://wa.me/${cleanWa}?text=Halo%20Kepala%20Desa%20Sungai%20Jaga%20A%2C%20saya%20ingin%20bertanya%20informasi%20detail%20mengenai%20${sectorName}...`;
  }

  potentialModal.classList.add("active");
  document.body.style.overflow = "hidden";

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function closePotentialModal() {
  if (!potentialModal) return;
  potentialModal.classList.remove("active");
  document.body.style.overflow = "";
}

if (potentialModalClose) {
  potentialModalClose.addEventListener("click", closePotentialModal);
}
if (potentialModal) {
  potentialModal.addEventListener("click", (e) => {
    if (e.target === potentialModal) {
      closePotentialModal();
    }
  });
}

// Lightbox modal functions
const lightboxModal = document.getElementById("lightboxModal");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxClose = document.getElementById("lightboxClose");

function openLightbox(src, alt) {
  lightboxImg.src = src;
  lightboxImg.alt = alt;
  lightboxModal.classList.add("active");
  document.body.style.overflow = "hidden"; // disable scroll
}

function closeLightbox() {
  if (!lightboxModal) return;
  lightboxModal.classList.remove("active");
  document.body.style.overflow = ""; // enable scroll
}

if (lightboxClose) {
  lightboxClose.addEventListener("click", closeLightbox);
}
if (lightboxModal) {
  lightboxModal.addEventListener("click", (e) => {
    if (e.target === lightboxModal) {
      closeLightbox();
    }
  });
}

// Global keydown handler for ESC key
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closePotentialModal();
    closeLightbox();
  }
});

// Set footer year
const yearElement = document.getElementById("currentYear");
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// Real-time synchronization
window.addEventListener("storage", (e) => {
  if (e.key === "sj_whatsapp" || e.key === "sj_hero_image" || e.key === "sj_gallery" || e.key === "sj_kades_name") {
    loadPageData();
  }
});

// Update data whenever page becomes visible/active again (in case edits occurred on this tab/browser session)
window.addEventListener("focus", loadPageData);

// Startup Initialization
document.addEventListener("DOMContentLoaded", () => {
  loadPageData();
  setupNavbar();

  // Setup Lucide Icons
  if (window.lucide) {
    window.lucide.createIcons();
  }
});
