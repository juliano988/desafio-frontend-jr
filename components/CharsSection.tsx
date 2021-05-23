import React from 'react';
import styles from '../styles/components/CharsSection-styles.module.scss';
import CharsCard from './CharsCard';

export default function CharsSection(): JSX.Element {
  return (
    <section className={styles.container}>
      <div className={styles.centralizing_div}>
        <CharsCard
          charImg='/imgs/homem-aranha.png'
          charName='Homem-Aranha'
          charDescription='Após ser mordido por uma aranha radioativa, Peter Parker se torna o amigo da vizinhança, o Homem-Aranha.'
        />
        <CharsCard
          charImg='/imgs/homem-aranha.png'
          charName='Homem-Aranha'
          charDescription='Após ser mordido por uma aranha radioativa, Peter Parker se torna o amigo da vizinhança, o Homem-Aranha.'
        />
        <CharsCard
          charImg='/imgs/homem-aranha.png'
          charName='Homem-Aranha'
          charDescription='Após ser mordido por uma aranha radioativa, Peter Parker se torna o amigo da vizinhança, o Homem-Aranha.'
        />
      </div>
    </section>
  )
}