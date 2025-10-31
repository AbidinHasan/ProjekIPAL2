function loading() {
  const tunggu = document.getElementById("loadingOverlay");
  if (tunggu) tunggu.style.display = "flex";
}
function Home() {
  loading();
  window.location.href = "index.html";
}
function stp() {
  loading();
  window.location.href = "DebitSTP.html";
}
function wwtp() {
  loading();
  window.location.href = "DebitWWTP.html";
}
function internalLAB() {
  loading();
  window.location.href = "HasilLAB.html";
}
function msds() {
  loading();
  window.location.href = "msds.html";
}
function diagram() {
  loading();
  window.location.href = "chart.html";
}

function wi() {
  loading();
  window.location.href = "wi.html";
}
function tentang() {
  loading();
  window.location.href = "tentang.html";
}
//btn arsip disable
function klikarsip() {
  //alert("Berhenti !\nAnda bukan siapa-siapa\ndi hidupnya :)");
  loading();
  window.location.href = "../dokumenArsip/arsip.html";
}
