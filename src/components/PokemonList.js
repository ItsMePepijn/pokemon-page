import getPokemon from "@/modules/getPokemon";
import { useEffect, useState } from "react";
import styles from "@/styles/PokemonList.module.scss";
import getIdFromUrl from "@/modules/getIdFromUrl";
import Image from "next/image";

export default function PokemonList({offset}) {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    if(pokemon.length <= offset){
      (async () => {
        const data = await getPokemon(offset);
        await setPokemon([...pokemon, ...data]);
      })();
    }
  }, [offset]);

  if(!pokemon) return <div>Loading...</div>
  return(
    <div className={styles.container}>
      {pokemon.map((pokemon) => (
        <div className={styles.pokemon} key={pokemon.name}>
          <Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getIdFromUrl(pokemon.url)}.png`} width={100} height={100} alt={pokemon.name}></Image>
          <p className={styles.pokemon__label}><b>{getIdFromUrl(pokemon.url)}.</b> {pokemon.name}</p>
        </div>
      ))}
    </div>
  )
}