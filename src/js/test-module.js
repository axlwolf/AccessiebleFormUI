export const AccessibleFormUI = (() => {
  console.log("AccessibleFormUI");

  const init = () => {
    console.log("Init AccessibleFormUI");
    eventHandlers();
  };

  const renderForm = (e) => {
    console.log("Render Form");
  };

  const eventHandlers = () => {
    document.querySelector(".form").addEventListener("submit", handleFormSubmit);
    document.querySelectorAll(".input").forEach(input => {
      input.addEventListener("input", handleInput);
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const firstName = form.fname.value.trim();
    const lastName = form.lname.value.trim();
    const email = form.email.value.trim();
    const birthday = form.birthday.value.trim();

    clearErrors();

    let valid = true;

    if (!firstName) {
      showError("fname", "First name is required");
      valid = false;
    }

    if (!lastName) {
      showError("lname", "Last name is required");
      valid = false;
    }

    if (!email || !isValidEmail(email)) {
      showError("email", "Valid email is required");
      valid = false;
    }

    if (!birthday) {
      showError("birthday", "Birthday is required");
      valid = false;
    }

    if (valid) {
      console.log("Form is valid");
      // Add form submission logic here
    }
  };

  const handleInput = (e) => {
    const input = e.target;
    if (input.value.trim()) {
      clearError(input.id);
    }
  };

  const showError = (id, message) => {
    const input = document.getElementById(id);
    const error = document.createElement("div");
    error.className = "form-error";
    error.innerText = message;
    input.parentNode.appendChild(error);
    input.setAttribute("aria-invalid", "true");
  };

  const clearError = (id) => {
    const input = document.getElementById(id);
    const error = input.parentNode.querySelector(".error");
    if (error) {
      error.remove();
    }
    input.removeAttribute("aria-invalid");
  };

  const clearErrors = () => {
    document.querySelectorAll(".form-error").forEach(error => error.remove());
    document.querySelectorAll("[aria-invalid]").forEach(input => input.removeAttribute("aria-invalid"));
  };

  const isValidEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\] )|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  return {
    init,
  };
})();
