import styles from "@/styles/PokemonList.module.scss";
import getIdFromUrl from "@/modules/getIdFromUrl";
import formatId from "@/modules/formatId";
import Image from "next/image";
import { useRouter } from "next/router";

export default function PokemonList({limit, pokemon}) {
  let pokemonList = pokemon.slice(0, limit);
  const router = useRouter();

  function handleClick(e){
    console.log(e.currentTarget.id);
    router.push(`/${e.currentTarget.id}`);
  }

  if(!pokemon) return <div>Loading...</div>
  return(
    <div className={styles.container}>
      {pokemonList.map((pokemon) => (
        <div className={styles.pokemon} key={pokemon.name} onClick={handleClick} id={getIdFromUrl(pokemon.url)}>
          <Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${getIdFromUrl(pokemon.url)}.png`} width={100} height={100} alt={pokemon.name} />
          <p className={styles.pokemon__label}><b>#{formatId(getIdFromUrl(pokemon.url))}.</b> {pokemon.name}</p>
        </div>
      ))}
    </div>
  )
}