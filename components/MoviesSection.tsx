import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { NavLeftArrow, NavRightArrow } from '../styled-components/[menu]-sc';
import styles from '../styles/components/MoviesSection-styles.module.scss';
import MoviesCard from './MoviesCard';

export default function MoviesSection(): JSX.Element {

  const page = Number(useRouter().query.page);

  const [moviesCards, setmoviesCards] = useState<Array<typeof MoviesCard>>([]);
  const [pageCount, setpageCount] = useState<number>(1);

  useEffect(function(){
    setpageCount(page);
  },[page]);

  useEffect(function () {
    const tempArr = [
      <MoviesCard
        key={1}
        movieImg='/imgs/cap-america-movie.png'
        charName='Capitão América'
        movieDescription='Em Capitão América: O Primeiro Vingador, conhecemos a história de Steve Rogers (Chris Evans) e como ele se tornou o melhor soldado do mundo. '
        movieName='Capitão América: Primeiro Vingador'
        movieBuy={[
          <a key={11} href=""><img key={12} src="/imgs/disney-plus.png" alt="Disney Plus"></img></a>
        ]}
        fansRate={4}
      />,
      <MoviesCard
        key={2}
        movieImg='/imgs/cap-marvel.png'
        charName='Capitã Marvel'
        movieDescription='Capitã Marvel, parte do exército de elite dos Kree, uma raça alienígena, encontra-se no meio de uma batalha entre seu povo e os Skrulls.'
        movieName='Capitã Marvel'
        movieBuy={[
          <a key={11} href=""><img key={12} src="/imgs/disney-plus.png" alt="Disney Plus"></img></a>
        ]}
        fansRate={4}
      />,
      <MoviesCard
        key={3}
        movieImg='/imgs/homem-de-ferro.png'
        charName='Homem de Ferro'
        movieDescription='Tony Stark é um industrial bilionário, que também é um brilhante inventor, ao ser sequestrado, ele é obrigado a construir uma arma devastadora, mas ao invés disso, cria uma armadura capaz de mudar a história.'
        movieName='Homem de Ferro'
        movieBuy={[
          <a key={11} href=""><img key={12} src="/imgs/disney-plus.png" alt="Disney Plus"></img></a>
        ]}
        fansRate={3}
      />,
      <MoviesCard
      key={4}
      movieImg='/imgs/homem-de-ferro-2.png'
      charName='Homem de Ferro 2'
      movieDescription='O mundo já sabe que o inventor bilionário Tony Stark é o super-herói blindado Homem de Ferro. Sofrendo pressão do governo, da mídia e do público para compartilhar sua tecnologia com as forças armadas.'
      movieName='Homem de Ferro 2'
      movieBuy={[
        <a key={11} href=""><img key={12} src="/imgs/disney-plus.png" alt="Disney Plus"></img></a>
      ]}
      fansRate={3}
    />,
    <MoviesCard
    key={5}
    movieImg='/imgs/thor-movie.png'
    charName='Thor'
    movieDescription='Quando é banido do reino de Asgard e exilado na Terra, o arrogante guerreiro Thor (Chris Hemsworth) é obrigado a lutar para reaver seus poderes perdidos. '
    movieName='Thor'
    movieBuy={[
      <a key={11} href=""><img key={12} src="/imgs/disney-plus.png" alt="Disney Plus"></img></a>
    ]}
    fansRate={3}
  />
    ] as unknown as Array<typeof MoviesCard>;
    setmoviesCards(tempArr)
  }, []);

  function handleArrowClick(direc: string) {
    switch (direc) {
      case 'L': window.location.href="/main/movies?page="+(pageCount - 1); break;
      case 'R': window.location.href="/main/movies?page="+(pageCount + 1); break;
      default: break;
    }
  }

  return (
    <section className={styles.container}>
      <NavLeftArrow style={{ display: pageCount === 1 ? 'none' : 'initial' }} onClick={() => handleArrowClick('L')}>
        <span>⮜</span>
      </NavLeftArrow>
      <NavRightArrow style={{ display: moviesCards.slice((pageCount - 1) * 3, ((pageCount - 1) * 3) + 3).length === 3 ? 'initial' : 'none' }} onClick={() => handleArrowClick('R')}>
        <span>⮞</span>
      </NavRightArrow>
      <div className={styles.centralizing_div}>
      {moviesCards.slice((pageCount-1)*3,((pageCount-1)*3)+3)}
      </div>
    </section>
  )
}