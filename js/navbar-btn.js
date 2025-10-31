function loadNavbar() {
  const navbarHTML = `
    <nav class="kon1">
      <ul>
        <li><a id="Home" onclick="Home()">合</a></li>
        <li class="dropdown" id="laporanDropdown">
          <button class="dropdown-btn" aria-haspopup="true" aria-expanded="false">
            <strong>三</strong>
          </button>
          <div class="dropdown-content" role="menu" aria-label="Laporan">
            <a id="stp" onclick="stp()">Debit STP</a>
            <a id="wwtp" onclick="wwtp()">Debit WWTP</a>
            <a id="internalLAB" onclick="internalLAB()">LAB Internal</a>
            <a id="msds" onclick="msds()">MSDS</a>
            <a id="wi" onclick="wi()">Work Instriction</a>
            <a id="arsip" onclick="klikarsip()">Arsip</a>
          </div>
        </li>
      </ul>
    </nav>
  `;
  document.body.insertAdjacentHTML("afterbegin", navbarHTML);
  initfunsidropdown();
}

// Fungsi toggle dropdown
function initfunsidropdown() {
  const dropdown = document.getElementById("laporanDropdown");
  const btn = dropdown.querySelector(".dropdown-btn");

  btn.addEventListener("click", function (e) {
    const isOpen = dropdown.classList.toggle("open");
    btn.setAttribute("aria-expanded", String(isOpen));
    e.stopPropagation();
  });

  document.addEventListener("click", function () {
    if (dropdown.classList.contains("open")) {
      dropdown.classList.remove("open");
      btn.setAttribute("aria-expanded", "false");
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && dropdown.classList.contains("open")) {
      dropdown.classList.remove("open");
      btn.setAttribute("aria-expanded", "false");
      btn.focus();
    }
  });
}

// Jalankan saat DOM selesai
window.addEventListener("DOMContentLoaded", loadNavbar);
