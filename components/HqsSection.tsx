import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { NavLeftArrow, NavRightArrow } from '../styled-components/[menu]-sc';
import styles from '../styles/components/HqsSection-styles.module.scss';
import HqsCard from './HqsCard';

export default function HqsSection(): JSX.Element {

  const page = Number(useRouter().query.page);

  const [hqsCards, sethqsCards] = useState<Array<typeof HqsCard>>([]);
  const [pageCount, setpageCount] = useState<number>(1);

  useEffect(function(){
    setpageCount(page);
  },[page]);

  useEffect(function () {
    const tempArr = [
      <HqsCard
        key={1}
        hqImg='/imgs/thor-hq.png'
        hqName='Thor: Vikings'
        hqDescription='Garth Ennis e sua violência atacam novamente na HQ que leva a violência das histórias de Thor ao limite! Na minissérie de 2003 vemos vikings de um passado distante voltando a vida.'
        hqBuy={[
          <a key={11} href=""><img key={12} src="/imgs/americanas.png" alt="Americanas"></img></a>,
          <a key={11} href=""><img key={12} src="/imgs/amazon.png" alt="Americanas"></img></a>
        ]}
        fansRate={5}
      />,
      <HqsCard
        key={2}
        hqImg='/imgs/surfista-hq.png'
        hqName='Surfista Prateado: Parábola'
        hqDescription='O único oponente do Devorador de Mundos é o herói que ele aprisionou na Terra: o Surfista Prateado, Galactus jurou não consumir o planeta, mas e se, em vez disso, ele transformar a civilização em seus adoradores?'
        hqBuy={[
          <a key={11} href=""><img key={12} src="/imgs/americanas.png" alt="Americanas"></img></a>,
          <a key={11} href=""><img key={12} src="/imgs/amazon.png" alt="Americanas"></img></a>
        ]}
        fansRate={5}
      />,
      <HqsCard
        key={3}
        hqImg='/imgs/wolverine-hq.png'
        hqName='Wolverine: Origens'
        hqDescription='Origem é uma minissérie em quadrinhos publicada pela Marvel Comics em seis edições, entre 2001 e 2002. A história conta a revelação do passado do personagem Wolverine.'
        hqBuy={[
          <a key={11} href=""><img key={12} src="/imgs/americanas.png" alt="Americanas"></img></a>,
          <a key={11} href=""><img key={12} src="/imgs/amazon.png" alt="Americanas"></img></a>
        ]}
        fansRate={5}
      />
    ] as unknown as Array<typeof HqsCard>;
    sethqsCards(tempArr)
  }, []);

  function handleArrowClick(direc: string) {
    switch (direc) {
      case 'L': window.location.href="/main/hqs?page="+(pageCount - 1); break;
      case 'R': window.location.href="/main/hqs?page="+(pageCount + 1); break;
      default: break;
    }
  }

  return (
    <section className={styles.container}>
      <NavLeftArrow style={{ display: pageCount === 1 ? 'none' : 'initial' }} onClick={() => handleArrowClick('L')}>
        <span>⮜</span>
      </NavLeftArrow>
      <NavRightArrow style={{ display: hqsCards.slice((pageCount - 1) * 3, ((pageCount - 1) * 3) + 3).length === 3 ? 'initial' : 'none' }} onClick={() => handleArrowClick('R')}>
        <span>⮞</span>
      </NavRightArrow>
      <div className={styles.centralizing_div}>
        {hqsCards.slice((pageCount - 1) * 3, ((pageCount - 1) * 3) + 3)}
      </div>
    </section>
  )
}