import _ from "lodash";
// import printMe from "./print.js";

function component() {
  const element = document.createElement("div");
  const btn = document.createElement("button");

  element.innerHTML = _.join(["Hello", "webpack"], " ");

  btn.innerHTML = "Click me and check the console!";
  // btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}
component();
// const btn = document.createElement("button");

// btn.innerHTML = "Click me dynamic import!";

// document.body.appendChild(btn);

// btn.onclick = async function getComponent() {
//   const element = document.createElement("div");
//   const { default: _ } = await import("lodash");

//   element.innerHTML = _.join(["Hello", "webpack"], " ");

//   return element;
// };

// getComponent().then((component) => {
//   document.body.appendChild(component);
// });
