import "./style.css";
import { createElement } from "./.lib/elements";

const header = createElement("header", {
  className: "header",
  children: [
    createElement("h1", {
      className: "header_title",
      innerText: "Rick & Morty",
    }),
    createElement("input", {
      className: "input",
      placeholder: "Search charackter",
      autofocus: true,
    }),
  ],
});

const section = createElement("section", {
  className: "results",
  children: [
    createElement("div", {
      innerText: "No results",
    }),
  ],
});
const footer = createElement("footer", {
  className: "footer",
  children: [
    createElement("span", { innerText: "this is" }),
    createElement("span", { innerText: "my footer" }),
  ],
});
document.querySelector("#app").append(header, section, footer);
