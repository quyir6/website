function eyeButtonOne() {
  var x = document.getElementById("password-box")
  var y = document.getElementById("hide-1")
  var z = document.getElementById("hide-2")

  if (x.type === 'password') {
    x.type = "text";
    y.style.display = "block";
    z.style.display = "none";
  } else{
    x.type = "password";
    y.style.display = "none";
    z.style.display = "block";
  }
}


const correctPassword = "RefLOGIN@GJSWebsite";

// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault(); // Prevent default form submission
    
    // Get the entered password
    const enteredPassword = document.getElementById("password-box").value;
    
    // Check if the entered password matches the correct password
    if (enteredPassword === correctPassword) {
        // Redirect to another page
        window.location.href = "/website/references.html";
    } else {
        // Display an error message or perform other actions
        alert("Incorrect password. Please try again.");
    }
}

// Add event listener to the form for form submission
document.getElementById("loginForm").addEventListener("submit", handleSubmit);