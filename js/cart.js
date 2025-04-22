let containerCart = document.querySelector(".container-cart");
let formCart = document.querySelector("#form-cart");
console.log("cart page before function", formCart);

formCart.addEventListener("submit", onSubmitCart);

function onSubmitCart(e) {
  e.preventDefault();

  const data = new FormData(e.target);
  const dataObject = Object.fromEntries(data.entries());

  console.log("our data:", dataObject);

  let name = dataObject.name;
  let email = dataObject.email;
  let password = dataObject.password;

  // let namePara = document.createElement("p");
  // namePara.textContent = name;
  // console.log("name", namePara);
  // containerCart.appendChild(namePara);
  // // console.log("changed text content", namePara);
  // console.log("added paragraph to div", container);

  // let emailPara = document.createElement("p");
  // emailPara.textContent = email;
  // containerCart.appendChild(emailPara);
  // // console.log("changed text content", emailPara);
  // console.log("added paragraph to div", container);

  // let passwordPara = document.createElement("p");
  // passwordPara.textContent = password;
  // containerCart.appendChild(passwordPara);
  // console.log("added paragraph to div", container);

  let loginMessage = `Welcome, ${name}! You are logged in!`;
  console.log("Data Results", loginMessage);
  let loginMessagePara = document.createElement("p");
  loginMessagePara.textContent = loginMessage;
  containerCart.appendChild(loginMessagePara);
}
