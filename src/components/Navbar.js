import Image from 'next/image'
import styles from '@/styles/Navbar.module.scss'

export default function Navbar() {

  return(
    <nav className={styles.navbar}>
      <Image src="/pokemon.png" alt="pokeball" width={320} height={117} priority={true}/>
    </nav>
  )
}