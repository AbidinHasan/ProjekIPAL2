// Toggle dropdown on click
(function () {
  const dropdown = document.getElementById("laporanDropdown");
  const btn = dropdown.querySelector(".dropdown-btn");

  btn.addEventListener("click", function (e) {
    const isOpen = dropdown.classList.toggle("open");
    // accessibility attribute
    btn.setAttribute("aria-expanded", String(isOpen));
    e.stopPropagation();
  });

  // klik di mana saja selain dropdown -> tutup
  document.addEventListener("click", function () {
    if (dropdown.classList.contains("open")) {
      dropdown.classList.remove("open");
      dropdown
        .querySelector(".dropdown-btn")
        .setAttribute("aria-expanded", "false");
    }
  });

  // keyboard Esc untuk menutup
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && dropdown.classList.contains("open")) {
      dropdown.classList.remove("open");
      dropdown
        .querySelector(".dropdown-btn")
        .setAttribute("aria-expanded", "false");
      dropdown.querySelector(".dropdown-btn").focus();
    }
  });
})();
