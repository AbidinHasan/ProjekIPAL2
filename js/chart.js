const GAS_URL =
  "https://script.google.com/macros/s/AKfycbyScDvv2xn_7_bxjo6769sU5z25aLwiuK-jSG--aoC3OmluMRq5mcs38tHk6f7A6dfk/exec";
let allData = [];
let chartInstance = null;

// Kolom yang tidak boleh muncul
const excludedColumns = [
  "Tanggal",
  "Water Meter Inlet STP ( mᶟ )",
  "Water Meter Inlet WWTP ( mᶟ )",
  "Water Meter Outlet STP (mᶟ )",
  "Water Meter Outlet WWTP ( mᶟ )",
];

function renderTable(dataArr) {
  const headRow = document.getElementById("tableHead");
  const bodyTable = document.getElementById("tableBody");
  const kategoriSelect = document.getElementById("kategoriSelect");

  if (!dataArr || dataArr.length === 0) {
    headRow.innerHTML = "<th>Tidak ada data</th>";
    bodyTable.innerHTML = "<tr><td>Kosong</td></tr>";
    kategoriSelect.innerHTML = "<option value=''>-- Tidak Ada Data --</option>";
    hideLoading();
    return;
  }

  const headers = Object.keys(dataArr[0]);
  headRow.innerHTML = headers.map((h) => `<th>${h}</th>`).join("");
  bodyTable.innerHTML = dataArr
    .map(
      (row) =>
        `<tr>${headers.map((h) => `<td>${row[h] ?? ""}</td>`).join("")}</tr>`
    )
    .join("");
  // Filter kolom yang boleh muncul di dropdown
  const filteredHeaders = headers.filter((h) => !excludedColumns.includes(h));
  // isi dropdown kategori
  kategoriSelect.innerHTML =
    `<option value="">-- Pilih Kolom --</option>` +
    filteredHeaders.map((h) => `<option value="${h}">${h}</option>`).join("");

  // pilih default kolom pertama dari hasil filter
  const defaultColumn = filteredHeaders[4];
  if (defaultColumn) {
    kategoriSelect.value = defaultColumn;
    updateChart(defaultColumn);
  }

  hideLoading();
}

function tampilkanData(data) {
  if (!data || !data.hasil) return;
  allData = data.hasil;
  renderTable(allData);
}
// Hilangkan spinner setelah data tampil
function hideLoading() {
  const overlay = document.getElementById("loadingOverlay");
  if (overlay) overlay.style.display = "none";
}

// Update chart (dengan animasi naik)
function updateChart(kategori) {
  const col = kategori || document.getElementById("kategoriSelect").value;
  if (!col) return;

  const labels = allData.map((r) => r.Tanggal || "Tanpa Tanggal");
  const values = allData.map((r) => parseFloat(r[col]) || 0);
  const ctx = document.getElementById("kategoriChart");

  // animasi naik
  ctx.classList.remove("active");
  void ctx.offsetWidth; // trigger reflow
  ctx.classList.add("active");

  if (chartInstance) chartInstance.destroy();

  chartInstance = new Chart(ctx, {
    type: "bar",
    data: {
      labels,
      datasets: [
        {
          label: col,
          data: values,
          backgroundColor: "rgba(54, 162, 235, 0.6)",
          borderColor: "rgba(54, 162, 235, 1)",
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      animation: {
        duration: 1200,
        easing: "easeOutCubic", // efek naik halus
      },
      scales: {
        y: { beginAtZero: true },
      },
    },
  });
}

// Ambil data dari GAS
const script = document.createElement("script");
script.src = GAS_URL + "?callback=tampilkanData";
document.body.appendChild(script);
