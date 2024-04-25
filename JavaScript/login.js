async function login() {
  try {
    // Fetch user data from JSONPlaceholder API
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();

    // Access the login form
    const form = document.getElementById("form");

    // Add event listener to form submission
    form.addEventListener("submit", (e) => {
      e.preventDefault(); // Prevent default form submission behavior

      // Get the entered password and username from the form
      const password = document.getElementById("password").value;
      // console.log(password);
      const formData = new FormData(form);
      const searchUsername = Object.fromEntries(formData).username;

      // Find the user with the entered username (case-insensitive)
      const user = data.find(
        (u) => u.username.toLowerCase() === searchUsername.toLowerCase()
      );

      // If user exists
      if (user) {
        // Check if the entered password matches the correct password
        if (password === "secret123") {
          console.log("Correct Password");
          // Redirect to List_Screen.html if login is successful
          window.location.href = "/List_Screen.html";
        } else {
          // If password is incorrect, display error message
          console.error("Incorrect Password");
          const errorMessage = document.getElementById("error-message");
          errorMessage.textContent = "Incorrect password";
        }
      } else {
        // If user does not exist, display error message
        const errorMessage = document.getElementById("error-message");
        errorMessage.textContent = `${searchUsername} cannot be found`;
      }
    });
  } catch (error) {
    // Catch and log any errors that occur during the login process
    console.log(error.message);
  }
}
login();
