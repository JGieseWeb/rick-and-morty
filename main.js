import { createCharacterElement } from "./components/character";
import "./style.css";
import { createElement } from "./lib/elements";

const characters = [
  {
    imgSrc: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    name: "Rick Sanchez",
    status: "Alive",
    species: "Human",
    origin: {
      name: "Earth",
    },
  },
  {
    imgSrc: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
    name: "Morty Smith",
    status: "Alive",
    species: "Human",
    origin: {
      name: "Earth",
    },
  },
];

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
  children: characters.map(createCharacterElement),
});
const footer = createElement("footer", {
  className: "footer",
  children: [
    createElement("span", { innerText: "this is" }),
    createElement("span", { innerText: "my footer" }),
  ],
});
document.querySelector("#app").append(header, section, footer);
