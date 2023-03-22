import styles from '@/styles/ToTop.module.scss';
import Image from 'next/image';
import { createRef } from 'react';

export default function ToTop({shouldScroll}){
  const isBrowser = () => typeof window !== 'undefined';

  function scrollToTop() {
      if (!isBrowser()) return;
      window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const active = shouldScroll ? ' ' + styles.active : '';
  
  return(
    <div className={styles.container + active} onClick={scrollToTop}>
      <Image src="/arrow_up.png" alt="To Top" width={60} height={60} draggable={false}></Image>
    </div>
  )
}