import { createCharacterElement } from "./components/character";
import "./style.css";
import { createElement, removeChildren } from "./lib/elements";
import { getCharacters } from "./lib/api";
import { debounce } from "./lib/timer";

const header = createElement("header", {
  className: "header",
  children: [
    createElement("h1", {
      className: "header_title",
      innerText: "Rick & Morty",
    }),

    createElement("input", {
      className: "input",
      placeholder: "Search character",
      autofocus: true,
      oninput: debounce((event) => {
        removeChildren(characterSection);
        const search = event.target.value;
        getCharacters(search).then((characters) => {
          characterSection.append(...characters.map(createCharacterElement));
        });
      }, 300),
    }),
  ],
});
const characterSection = createElement("section", {
  className: "resultsSection",
});

const footer = createElement("footer", {
  className: "footer",
  children: [
    createElement("span", { innerText: "this is" }),
    createElement("span", { innerText: "my footer" }),
  ],
});
document.querySelector("#app").append(header, characterSection, footer);
