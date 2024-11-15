export const AccessibleFormUI = (() => {
  console.log("AccessibleFormUI");

  const init = () => {
    console.log("Init AccessibleFormUI");
    // TODO: Separate canvas logic into its specific method
    const canvas = document.getElementById('myCanvas');
    const context = canvas.getContext('2d');

// Dibujar el círculo
    context.beginPath();
    context.arc(100, 100, 90, 0, 2 * Math.PI); // (x, y, radio, ángulo inicial, ángulo final)
    context.fillStyle = '#f0f0f0'; // Color de relleno del círculo
    context.fill();
    context.strokeStyle = '#000000'; // Color del borde del círculo
    context.stroke();

// Añadir el texto dentro del círculo
    context.fillStyle = '#000000'; // Color del texto
    context.font = '20px Arial'; // Fuente y tamaño del texto
    context.textAlign = 'center'; // Alineación del texto
    context.textBaseline = 'middle'; // Posición del texto
    context.fillText('0%', 100, 100); // Texto y su posición (x, y)

    renderForm();
    eventHandlers();
  };

  const renderForm = () => {
    console.log("Render Form");
    document.querySelector(".form-percentage-data").innerText = `0%`;
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
    updateProfileCompleteness();
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

  const updateProfileCompleteness = () => {
    const totalFields = 4;
    let completedFields = 0;
    if (document.getElementById('fname').value.trim()) completedFields++;
    if (document.getElementById('lname').value.trim()) completedFields++;
    if (document.getElementById('email').value.trim()) completedFields++;
    if (document.getElementById('birthday').value.trim()) completedFields++;
    const completeness = Math.round((completedFields / totalFields) * 100);
    document.querySelector(".form-percentage-data").innerText = `${completeness}%`;
    drawCanvas(completeness);
  }

  const drawCanvas = (percentage) => {
    const canvas = document.getElementById('myCanvas');
    const context = canvas.getContext('2d');

    // Limpiar el canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Dibujar el círculo
    context.beginPath();
    context.arc(100, 100, 90, 0, 2 * Math.PI); // (x, y, radio, ángulo inicial, ángulo final)
    context.fillStyle = '#f0f0f0'; // Color de relleno del círculo
    context.fill();
    context.strokeStyle = 'purple'; // Color del borde del círculo
    context.stroke();

    // Dibujar el arco que representa el porcentaje completado
    context.beginPath();
    context.arc(100, 100, 90, -Math.PI / 2, (2 * Math.PI * (percentage / 100)) - (Math.PI / 2)); // (x, y, radio, ángulo inicial, ángulo final)
    context.strokeStyle = '#4caf50'; // Color del arco de progreso
    context.lineWidth = 10;
    context.stroke();

    // Añadir el texto dentro del círculo
    context.fillStyle = '#000000'; // Color del texto
    context.font = '20px Arial'; // Fuente y tamaño del texto
    context.textAlign = 'center'; // Alineación del texto
    context.textBaseline = 'middle'; // Posición del texto
    context.fillText(`${percentage}%`, 100, 100); // Texto y su posición (x, y)
  }

  return {
    init,
  };
})();
