// Tunggu library jquery berhasil diload
$(function () {
  // Ambil data theme di storage
  var config = localStorage.getItem("theme");
  // Jika ada set tema bootstrap
  if (config != null) {
    $("html").attr("data-bs-theme", config);
  }
});
