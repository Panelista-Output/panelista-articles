function toggleMobileDropdown() {
  document.getElementById("mobileDropdownContent").classList.toggle("show-content");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.mobile-dropdown-trigger')) {
  var myDropdown = document.getElementById("mobileDropdownContent");
    if (myDropdown.classList.contains('show-content')) {
      myDropdown.classList.remove('show-content');
    }
  }
}