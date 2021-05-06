import "./character.css";
import { createElement } from "../lib/elements";

export function createCharacterElement({
  image,
  name,
  status,
  species,
  origin,
  id,
}) {
  return createElement("div", {
    className: "character-card",
    children: [
      createElement("a", {
        href: `details.html?id=${id}`,
        children: [
          createElement("img", { src: image, href: `details.html?id=${id}` }),
        ],
      }),

      createElement("h2", { innerText: name }),
      createElement("p", { innerText: status }),
      createElement("p", { innerText: species }),
      createElement("p", { innerText: origin.name }),
    ],
  });
}
