import x from "./x.js";
import png from "./assets/1.png";
console.log(png);
const div = document.getElementById("app");
console.log("div");
console.log(div);
// div.innerHTML = `
//   <img src="${png}">
// `

div.innerHTML = `       
<img src="${png}">
`;
const button = document.createElement("button");
button.innerText = "懒加载";
button.onclick = () => {
  const Promise = import("./lazy");
  Promise.then(
    (module) => {
      module.default();
    },
    () => {
      console.log("模块加载错误");
    }
  );
};
div.appendChild(button);
