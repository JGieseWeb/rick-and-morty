import "./style.css";
import styles from "./details.module.css";
import { createElement } from "./lib/elements";
import { getCharacter } from "./lib/api";
import { createCharacterDetailsElement } from "./components/characterDetails";

const params = new URLSearchParams(location.search);
const characterId = params.get("id");

// getCharacter(characterId).then((response) => console.log(response));

const mainElement = createElement("main", {
  className: styles.main,
});
getCharacter(characterId).then((response) => {
  const characterDetailsElement = createCharacterDetailsElement(response);
  mainElement.append(characterDetailsElement);
});

document.querySelector("#app").append(mainElement);
