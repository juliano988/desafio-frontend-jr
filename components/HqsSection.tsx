import React from 'react';
import styles from '../styles/components/HqsSection-styles.module.scss';
import HqsCard from './HqsCard';

export default function HqsSection(): JSX.Element {
  return (
    <section className={styles.container}>
      <div className={styles.centralizing_div}>
        <HqsCard
          hqImg='/imgs/thor-hq.png'
          hqName='Thor: Vikings'
          hqDescription='Garth Ennis e sua violência atacam novamente na HQ que leva a violência das histórias de Thor ao limite! Na minissérie de 2003 vemos vikings de um passado distante voltando a vida.'
          hqBuy={[
            <a key={11} href=""><img key={12} src="/imgs/americanas.png" alt="Americanas"></img></a>,
            <a key={11} href=""><img key={12} src="/imgs/amazon.png" alt="Americanas"></img></a>
          ]}
          fansRate={5}
        />
        <HqsCard
          hqImg='/imgs/surfista-hq.png'
          hqName='Surfista Prateado: Parábola'
          hqDescription='O único oponente do Devorador de Mundos é o herói que ele aprisionou na Terra: o Surfista Prateado, Galactus jurou não consumir o planeta, mas e se, em vez disso, ele transformar a civilização em seus adoradores?'
          hqBuy={[
            <a key={11} href=""><img key={12} src="/imgs/americanas.png" alt="Americanas"></img></a>,
            <a key={11} href=""><img key={12} src="/imgs/amazon.png" alt="Americanas"></img></a>
          ]}
          fansRate={5}
        />
        <HqsCard
          hqImg='/imgs/wolverine-hq.png'
          hqName='Wolverine: Origens'
          hqDescription='Origem é uma minissérie em quadrinhos publicada pela Marvel Comics em seis edições, entre 2001 e 2002. A história conta a revelação do passado do personagem Wolverine.'
          hqBuy={[
            <a key={11} href=""><img key={12} src="/imgs/americanas.png" alt="Americanas"></img></a>,
            <a key={11} href=""><img key={12} src="/imgs/amazon.png" alt="Americanas"></img></a>
          ]}
          fansRate={5}
        />
      </div>
    </section>
  )
}