import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { NavLeftArrow, NavRightArrow } from '../styled-components/[menu]-sc';
import styles from '../styles/components/CharsSection-styles.module.scss';
import CharsCard from './CharsCard';

export default function CharsSection(): JSX.Element {

  const page = Number(useRouter().query.page);

  const [charsCards, setcharsCards] = useState<Array<typeof CharsCard>>([]);
  const [pageCount, setpageCount] = useState<number>(1);

  useEffect(function(){
    setpageCount(page);
  },[page]);

  useEffect(function () {
    const tempArr = [
      <CharsCard
        key={1}
        charImg='/imgs/homem-aranha.png'
        charName='Homem-Aranha'
        charDescription='Após ser mordido por uma aranha radioativa, Peter Parker se torna o amigo da vizinhança, o Homem-Aranha.'
        charAppearances={<ul>
          <li>Vingadores - Era de Ultron</li>
          <li>Capitão América - Guerra Civil</li>
          <li>Vingadores - Guerra Infinita</li>
          <li>Vingadores - Ultimato</li>
        </ul>}
        fansRate={4} />,
      <CharsCard
        key={2}
        charImg='/imgs/wanda.png'
        charName='Wanda Maximoff'
        charDescription='Wanda Maximoff foi sequestrada da Sérvia e trazida para a Montanha Wundagore, base do Alto Evolucionário. Durante anos, ela e seu irmão gêmeo, Pietro, acreditavam que eram filhos de um casal de ciganos.'
        charAppearances={<ul>
          <li>Vingadores - Era de Ultron</li>
          <li>Capitão América - Guerra Civil</li>
          <li>Vingadores - Guerra Infinita</li>
          <li>Vingadores - Ultimato</li>
        </ul>}
        fansRate={4} />,
      <CharsCard
        key={3}
        charImg='/imgs/thanos.png'
        charName='Thanos'
        charDescription="A lua Titã era governada por Mentor (A'Lars), quando então reinava paz e tecnologia. Mentor tinha dois filhos: Eros e Thanos.  Ao contrário do irmão, Thanos, era bem mais poderoso e almejava ainda mais."
        charAppearances={<ul>
          <li>Vingadores</li>
          <li>Guardiões da Galáxia - vol. I</li>
          <li>Vingadores - Guerra Infinita</li>
          <li>Vingadores - Ultimato</li>
        </ul>}
        fansRate={5} />,
        <CharsCard
        key={4}
        charImg='/imgs/hulk.png'
        charName='Hulk'
        charDescription="Na história original dos quadrinhos, o Hulk é um selvagem e poderoso alter ego do Dr. Robert Bruce Banner, um cientista que foi atingido por raios gama enquanto salvava um adolescente durante o teste militar."
        charAppearances={<ul>
          <li>Vingadores</li>
          <li>Vingadores - Era de Ultron</li>
          <li>Thor - Ragnarok</li>
          <li>Vingadores - Guerra Infinita</li>
          <li>Vingadores - Ultimato</li>
        </ul>}
        fansRate={5} />
    ] as unknown as Array<typeof CharsCard>;
    setcharsCards(tempArr)
  }, []);

  function handleArrowClick(direc: string) {
    switch (direc) {
      case 'L': window.location.href="/main/chars?page="+(pageCount - 1); break;
      case 'R': window.location.href="/main/chars?page="+(pageCount + 1); break;
      default: break;
    }
  }

  return (
    <section className={styles.container}>
      <NavLeftArrow style={{display: pageCount === 1 ? 'none' : 'initial'}} onClick={()=>handleArrowClick('L')}>
        <span>⮜</span>
      </NavLeftArrow>
      <NavRightArrow style={{display: charsCards.slice((pageCount-1)*3,((pageCount-1)*3)+3).length === 3 ? 'initial' : 'none'}} onClick={()=>handleArrowClick('R')}>
        <span>⮞</span>
      </NavRightArrow>
      <div className={styles.centralizing_div}>
        {charsCards.slice((pageCount-1)*3,((pageCount-1)*3)+3)}
      </div>
    </section>
  )
}