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
          charAppearances={<ul>
            <li>Vingadores - Era de Ultron</li>
            <li>Capitão América - Guerra Civil</li>
            <li>Vingadores - Guerra Infinita</li>
            <li>Vingadores - Ultimato</li>
          </ul>}
          fansRate={4}
        />
        <CharsCard
          charImg='/imgs/wanda.png'
          charName='Wanda Maximoff'
          charDescription='Wanda Maximoff foi sequestrada da Sérvia e trazida para a Montanha Wundagore, base do Alto Evolucionário. Durante anos, ela e seu irmão gêmeo, Pietro, acreditavam que eram filhos de um casal de ciganos.'
          charAppearances={<ul>
            <li>Vingadores - Era de Ultron</li>
            <li>Capitão América - Guerra Civil</li>
            <li>Vingadores - Guerra Infinita</li>
            <li>Vingadores - Ultimato</li>
          </ul>}
          fansRate={4}
        />
        <CharsCard
          charImg='/imgs/thanos.png'
          charName='Thanos'
          charDescription="A lua Titã era governada por Mentor (A'Lars), quando então reinava paz e tecnologia. Mentor tinha dois filhos: Eros e Thanos.  Ao contrário do irmão, Thanos, era bem mais poderoso e almejava ainda mais."
          charAppearances={<ul>
            <li>Vingadores</li>
            <li>Guardiões da Galáxia - vol. I</li>
            <li>Vingadores - Guerra Infinita</li>
            <li>Vingadores - Ultimato</li>
          </ul>}
          fansRate={5}
        />
      </div>
    </section>
  )
}