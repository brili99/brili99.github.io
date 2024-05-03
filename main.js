// Tunggu library jquery berhasil diload
$(function () {
  // Ambil data theme di storage
  var config = localStorage.getItem("theme");
  // Jika ada set tema
  if (config != null) {
    $("html").attr("data-bs-theme", config);
    // Jika tema light
    if (config == "light") {
      // Ubah icon btn ke matahari
      $("#btn-theme").html(`<i class="fa-solid fa-sun"></i>`);
      // Ubah color btn ke putih
      $("#btn-theme").css("color", "white");
    } else {
      // Jika tema hitam
      // Ubah icon btn ke bulan
      $("#btn-theme").html(`<i class="fa-solid fa-moon"></i>`);
      // Ubah color btn ke hitam
      $("#btn-theme").css("color", "black");
    }
  }

  // Buat on event click btn theme
  $("#btn-theme").on("click", function () {
    // Ambil tema sekarang
    var current_theme = $("html").attr("data-bs-theme");
    // Ganti tema ke dark jika light
    if (current_theme == "light") {
      // Ubah tema ke dark
      $("html").attr("data-bs-theme", "dark");
      // Save tema ke storage
      localStorage.setItem("theme", "dark");
      // Ubah icon btn ke bulan
      $(this).html(`<i class="fa-solid fa-moon"></i>`);
      // Ubah color btn ke hitam
      $("#btn-theme").css("color", "black");
    } else {
      // Ganti tema ke light jika dark
      $("html").attr("data-bs-theme", "light");
      // Save tema ke light
      localStorage.setItem("theme", "light");
      // Ubah icon btn ke matahari
      $(this).html(`<i class="fa-solid fa-sun"></i>`);
      // Ubah color btn ke putih
      $("#btn-theme").css("color", "white");
    }
  });
});
