function showToast(message, type) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.className = 'show ' + type;

  setTimeout(function () {
    toast.classList.remove('show');
  }, 3000);
}

function kirimPendaftaran() {
  const nama = document.getElementById('nama').value.trim();
  const nik = document.getElementById('nik').value.trim();
  const jalur = document.getElementById('jalur').value;

  // Cek field kosong
  if (nama === '' || nik === '' || jalur === '') {
    showToast('❌ Semua field wajib diisi!', 'error');
    return;
  }

  // Validasi NIK: harus 16 digit angka
  const nikRegex = /^\d{16}$/;
  if (!nikRegex.test(nik)) {
    showToast('❌ NIK harus berisi 16 digit angka!', 'error');
    return;
  }

  // Sukses
  showToast('✅ Pendaftaran berhasil dikirim!', 'success');

  // Reset form
  document.getElementById('nama').value = '';
  document.getElementById('nik').value = '';
  document.getElementById('jalur').value = '';
}