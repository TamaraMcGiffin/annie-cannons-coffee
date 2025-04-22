let containerContact = document.querySelector(".container-contact");
let formContact = document.querySelector("#form-contact");
console.log("form contact before function", formContact);

formContact.addEventListener("submit", onSubmitContact);

function onSubmitContact(e) {
  e.preventDefault();

  const data = new FormData(e.target);
  const dataObject = Object.fromEntries(data.entries());

  console.log("our data:", dataObject);
  // form.reset();

  let name = dataObject.name;
  let email = dataObject.email;
  let comments = dataObject.comments;
  let coffeeFlavor = dataObject.coffeeflavor;
  let coffeeOrEmployment = dataObject.which;

  // // let namePara = document.createElement("p");
  // namePara.textContent = name;
  // console.log("name", namePara);
  // containerContact.appendChild(namePara);
  // // console.log("changed text content", namePara);
  // console.log("added paragraph to div", containerContact);

  // let emailPara = document.createElement("p");
  // emailPara.textContent = email;
  // containerContact.appendChild(emailPara);
  // // console.log("changed text content", emailPara);
  // console.log("added paragraph to div", containerContact);

  // let commentsPara = document.createElement("p");
  // commentsPara.textContent = comments;
  // containerContact.appendChild(commentsPara);

  // let coffeeFlavorPara = document.createElement("p");
  // coffeeFlavorPara.textContent = coffeeFlavor;
  // containerContact.appendChild(coffeeFlavorPara);

  // let coffeeOrEmploymentPara = document.createElement("p");
  // coffeeOrEmploymentPara.textContent = coffeeOrEmployment;
  // containerContact.appendChild(coffeeOrEmploymentPara);
  // // console.log("changed text content", coffeeOrEmployment);

  let thankYouMessage = `Thank You! ${name}. You are logged in!`;
  console.log("Data Results", thankYouMessage);
  let thankYouMessagePara = document.createElement("p");
  thankYouMessagePara.textContent = thankYouMessage;
  containerContact.appendChild(thankYouMessagePara);
}

// let containerCart = document.querySelector(".container-cart");
// let formCart = document.querySelector("#form-cart");
// console.log("cart page before function", formCart);

// formCart.addEventListener("submit", onSubmitCart);

// function onSubmitCart(e) {
//   e.preventDefault();

//   const data = new FormData(e.target);
//   const dataObject = Object.fromEntries(data.entries());

//   console.log("our data:", dataObject);

//   let name = dataObject.name;
//   let email = dataObject.email;
//   let password = dataObject.password;

//   // let namePara = document.createElement("p");
//   // namePara.textContent = name;
//   // console.log("name", namePara);
//   // containerCart.appendChild(namePara);
//   // // console.log("changed text content", namePara);
//   // console.log("added paragraph to div", container);

//   // let emailPara = document.createElement("p");
//   // emailPara.textContent = email;
//   // containerCart.appendChild(emailPara);
//   // // console.log("changed text content", emailPara);
//   // console.log("added paragraph to div", container);

//   // let passwordPara = document.createElement("p");
//   // passwordPara.textContent = password;
//   // containerCart.appendChild(passwordPara);
//   // console.log("added paragraph to div", container);

//   let loginMessage = `Welcome, ${name}! You are logged in!`;
//   console.log("Data Results", loginMessage);
//   let loginMessagePara = document.createElement("p");
//   loginMessagePara.textContent = loginMessage;
//   containerCart.appendChild(loginMessagePara);
// }
