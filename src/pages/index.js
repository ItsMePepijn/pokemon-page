import Head from 'next/head'
import styles from '@/styles/Home.module.scss'
import { useState, useEffect } from 'react'

import Navbar from '@/components/Navbar'
import PokemonList from '@/components/PokemonList'
import ToTop from '@/components/ToTop'

export default function Home() {
  const [offset, setOffset] = useState(0);
  const [shouldScroll, setShouldScroll] = useState(false);

  function onScroll(event) {
    if((window.innerHeight - window.scrollY - 500) * -1 > 1) setShouldScroll(true);
    else setShouldScroll(false);
    
    let yOffset = event.target.body.clientHeight - window.innerHeight - window.scrollY;
    if(yOffset < 200) setOffset(offset + 30);
  }
  
  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll, { passive: true });
    }
  }, [offset, shouldScroll]);

  return (
    <>
      <Head>
        <title>Pokédex</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/pokeball.png" />
      </Head>

      <ToTop shouldScroll={shouldScroll}/>
      
      <Navbar />

      <main className={styles.main}>
        <PokemonList offset={offset} />
      </main>
    </>
  )
}
