function toggleDropdown() {
    var dropdownContent = document.getElementById("myDropdown");
    dropdownContent.style.display === "none"
      ? (dropdownContent.style.display = "block")
      : (dropdownContent.style.display = "none");
  }