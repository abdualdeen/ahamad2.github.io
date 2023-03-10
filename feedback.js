const form = document.getElementById("feedback-form");
      form.addEventListener("submit", (event) => {
        event.preventDefault();
        const message = form.elements["message"].value;
        const rating = form.elements["rating"].value;
        const email = form.elements["email"].value;
        // check if an email is valid
        const emailRegex = /^\S+@\S+\.\S+$/;
        if (!emailRegex.test(email)) {
          alert("Please enter a valid email address.");
          return;
        }
        alert(`Message: ${message}\nRating: ${rating}\nEmail: ${email}`);
        form.reset();
      });