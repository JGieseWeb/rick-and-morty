import { createCharacterElement } from "./components/character";
import "./style.css";
import { createElement } from "./lib/elements";
import { getCharacters } from "./lib/api";

const characterSection = createElement("section", {
  className: "resultsSection",
});

getCharacters().then((characters) => {
  characterSection.append(...characters.map(createCharacterElement));
});

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

const footer = createElement("footer", {
  className: "footer",
  children: [
    createElement("span", { innerText: "this is" }),
    createElement("span", { innerText: "my footer" }),
  ],
});
document.querySelector("#app").append(header, characterSection, footer);
