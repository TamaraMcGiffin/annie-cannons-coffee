let container = document.querySelector(".container");
let form = document.querySelector("form");
console.log(form);

form.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();

  const data = new FormData(form);
  const dataObject = Object.fromEntries(data.entries());

  console.log("our data:", dataObject);
  // form.reset();

  let name = dataObject.name;
  let email = dataObject.email;
  let comments = dataObject.comments;
  let coffeeFlavor = dataObject.coffeeflavor;
  let coffeeOrEmployment = dataObject.which;

  let namePara = document.createElement("p");
  namePara.textContent = name;
  console.log("name", namePara);
  container.appendChild(namePara);
  // console.log("changed text content", namePara);
  console.log("added paragraph to div", container);

  let emailPara = document.createElement("p");
  emailPara.textContent = email;
  container.appendChild(emailPara);
  // console.log("changed text content", emailPara);
  console.log("added paragraph to div", container);

  let commentsPara = document.createElement("p");
  commentsPara.textContent = comments;
  container.appendChild(commentsPara);

  let coffeeFlavorPara = document.createElement("p");
  coffeeFlavorPara.textContent = coffeeFlavor;
  container.appendChild(coffeeFlavorPara);

  let coffeeOrEmploymentPara = document.createElement("p");
  coffeeOrEmploymentPara.textContent = coffeeOrEmployment;
  container.appendChild(coffeeOrEmploymentPara);
  // console.log("changed text content", coffeeOrEmployment);

  let thankYouMessage = `Thank You!`;
  console.log("Data Results", thankYouMessage);
  let thankYouMessagePara = document.createElement("p");
  thankYouMessagePara.textContent = thankYouMessage;
  container.appendChild(thankYouMessagePara);
}

let container = document.querySelector(".container");
let form = document.querySelector("form");
console.log(form);

form.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();

  const data = new FormData(form);
  const dataObject = Object.fromEntries(data.entries());

  console.log("our data:", dataObject);

  let name = dataObject.name;
  let email = dataObject.email;
  let password = dataObject.password;

  let namePara = document.createElement("p");
  namePara.textContent = name;
  console.log("name", namePara);
  container.appendChild(namePara);
  // console.log("changed text content", namePara);
  console.log("added paragraph to div", container);

  let emailPara = document.createElement("p");
  emailPara.textContent = email;
  container.appendChild(emailPara);
  // console.log("changed text content", emailPara);
  console.log("added paragraph to div", container);

  let passwordPara = document.createElement("p");
  passwordPara.textContent = password;
  container.appendChild(passwordPara);
  console.log("added paragraph to div", container);

  let loginMessage = `Welcome, ${name}! You are logged in!`;
  console.log("Data Results", loginMessage);
  let loginMessagePara = document.createElement("p");
  loginMessagePara.textContent = loginMessage;
  container.appendChild(loginMessagePara);
}
