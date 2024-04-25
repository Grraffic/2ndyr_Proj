const clickedUrl = localStorage.getItem("clickedUrl");
const clickedTitle = localStorage.getItem("clickedTitle");

if (clickedUrl && clickedTitle) {
  const clickedImageDiv = document.getElementById("clickedImage");
  clickedImageDiv.innerHTML = `<img src="${clickedUrl}" alt="Clicked Image">
        <p class='title'>${clickedTitle}</p>`;
} else {
  window.location.href = "/List_Screen.html";
}

document.getElementById("backButton").addEventListener("click", () => {
  // Check if there's a URL to redirect to (page2.html)
  if (localStorage.getItem("clickedUrl")) {
    window.location.href = "/List_Screen.html";
  } else {
    window.location.href = "/login.html";
  }
});
