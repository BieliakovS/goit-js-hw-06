const loginFormEl = document.querySelector(".login-form");

const handleFormSubmit = (event) => {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    alert("Sorry, not all fields are filled");
  }

  const formValuesObj = {
    email: email.value,
    password: password.value,
  };

  console.log(formValuesObj);
  event.currentTarget.reset();
};

loginFormEl.addEventListener("submit", handleFormSubmit);
