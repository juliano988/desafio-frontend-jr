import React from 'react';
import styles from '../styles/components/MoviesSection-styles.module.scss';
import MoviesCard from './MoviesCard';

export default function MoviesSection(): JSX.Element {
  return (
    <section className={styles.container}>
      <div className={styles.centralizing_div}>
        <MoviesCard
          charImg='/imgs/homem-aranha.png'
          charName='Homem-Aranha'
          charDescription='Após ser mordido por uma aranha radioativa, Peter Parker se torna o amigo da vizinhança, o Homem-Aranha.'
          charAppearances={<ul>
            <li>Vingadores - Era de Ultron</li>
            <li>Capitão América - Guerra Civil</li>
            <li>Vingadores - Guerra Infinita</li>
            <li>Vingadores - Ultimato</li>
          </ul>}
          fansRate={4}
        />
      </div>
    </section>
  )
}