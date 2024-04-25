async function display() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/photos");
    const data = await response.json();
    let displayData = "";

    for (let i = 0; i < 50; i++) {
      const value = data[i];
      displayData += `<div class="product">
              <a href="${value.url}" target="_blank">
                <img src="${value.thumbnailUrl}" alt="${value.title}" title="${value.title}">
              </a>
              <a href="#" class="url" data-url="${value.url}" data-title="${value.title}">${value.url}</a>
              <p class="title">${value.title}</p>
            </div>`;
    }

    document.querySelector(".products").innerHTML = displayData;

    const allProducts = document.querySelectorAll(".product");
    const searchBar = document.getElementById("searchBar");

    searchBar.addEventListener("input", () => {
      const searchText = searchBar.value.toLowerCase().trim();

      allProducts.forEach((product) => {
        const title = product.querySelector(".title").textContent.toLowerCase();

        if (title.includes(searchText)) {
          product.style.display = "block";
        } else {
          product.style.display = "none";
        }
      });
    });

    allProducts.forEach((item) => {
      item.addEventListener("click", (event) => {
        event.preventDefault();

        const clickedUrl = item.querySelector(".url").getAttribute("data-url");
        const clickedTitle = item
          .querySelector(".url")
          .getAttribute("data-title");
        console.log(`Clicked URL: ${clickedUrl}`);
        console.log(`Clicked Title: ${clickedTitle}`);

        // Store the clicked URL and title in localStorage
        localStorage.setItem("clickedUrl", clickedUrl);
        localStorage.setItem("clickedTitle", clickedTitle);

        // Redirect to Page 3
        window.location.href = "/Post_Detail.html";
      });
    });
  } catch (error) {
    console.log(error);
  }
}

display();
