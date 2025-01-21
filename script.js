function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

document.getElementById('showPopupBtn').addEventListener('click', function() {
  Swal.fire({
    title: 'Pleasse be patient',
    text: 'Sometimes it may take a while to start back-end of the system. Use Username : ramesh50 Password : 1234',
    icon: 'info',
    confirmButtonText: 'OK'
  }).then((result) => {
    if (result.isConfirmed) {
      // Redirect to the URL when the OK button is clicked
      window.location.href = 'https://inventory-t4nh.onrender.com/'; 
    }
  });
});


