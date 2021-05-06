import "./characterDetails.css";
import { createElement } from "../lib/elements";

export function createCharacterDetailsElement(characterObject) {
  return createElement("div", {
    className: "character-card",
    children: [
      createElement("img", { src: characterObject.image }),
      createElement("div", {
        className: "character-card__info",
        children: [
          createElement("h2", { innerText: characterObject.name }),
          createElement("p", {
            innerText: `${characterObject.status} - ${characterObject.species}`,
          }),
        ],
      }),
    ],
  });
}
