import React from 'react';
import styles from '../styles/components/MoviesSection-styles.module.scss';
import MoviesCard from './MoviesCard';

export default function MoviesSection(): JSX.Element {
  return (
    <section className={styles.container}>
      <div className={styles.centralizing_div}>
        <MoviesCard
          movieImg='/imgs/cap-america-movie.png'
          charName='Capitão América'
          movieDescription='Em Capitão América: O Primeiro Vingador, conhecemos a história de Steve Rogers (Chris Evans) e como ele se tornou o melhor soldado do mundo. '
          movieName='Capitão América: Primeiro Vingador'
          movieBuy={[
            <a key={11} href=""><img key={12} src="/imgs/disney-plus.png" alt="Disney Plus"></img></a>
          ]}
          fansRate={4}
        />
        <MoviesCard
          movieImg='/imgs/cap-marvel.png'
          charName='Capitã Marvel'
          movieDescription='Capitã Marvel, parte do exército de elite dos Kree, uma raça alienígena, encontra-se no meio de uma batalha entre seu povo e os Skrulls.'
          movieName='Capitã Marvel'
          movieBuy={[
            <a key={11} href=""><img key={12} src="/imgs/disney-plus.png" alt="Disney Plus"></img></a>
          ]}
          fansRate={4}
        />
        <MoviesCard
          movieImg='/imgs/homem-de-ferro.png'
          charName='Homem de Ferro'
          movieDescription='Tony Stark é um industrial bilionário, que também é um brilhante inventor, ao ser sequestrado, ele é obrigado a construir uma arma devastadora, mas ao invés disso, cria uma armadura capaz de mudar a história.'
          movieName='Homem de Ferro'
          movieBuy={[
            <a key={11} href=""><img key={12} src="/imgs/disney-plus.png" alt="Disney Plus"></img></a>
          ]}
          fansRate={3}
        />
      </div>
    </section>
  )
}