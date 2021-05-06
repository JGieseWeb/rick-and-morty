export async function getCharacters(name) {
  const promise = fetch(
    `https://rickandmortyapi.com/api/character?name=${name}`
  );
  const response = await promise;
  if (response.status === 404) {
    return [];
  }
  const data = await response.json();
  return data.results;
}

export async function getCharacter(id) {
  const promise = fetch(`https://rickandmortyapi.com/api/character/${id}`);
  const response = await promise;
  if (response.status === 404) {
    return {};
  }
  const data = await response.json();
  return data;
}
