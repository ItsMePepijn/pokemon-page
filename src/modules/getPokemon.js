export default async function getPokemon(offset){
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=30&offset=${offset}`)
    .then(res => res.json())
    return res.results;
  } catch (err) {
    console.error(err);
    return false;
  }
}