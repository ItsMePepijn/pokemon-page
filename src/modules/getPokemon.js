export default async function getPokemon(){
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=999999`)
    .then(res => res.json())
    return res.results;
  } catch (err) {
    console.error(err);
    return false;
  }
}