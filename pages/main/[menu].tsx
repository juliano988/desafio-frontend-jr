import React, { useEffect, useState } from 'react';
import styles from '../../styles/main/[menu]-styles.module.scss';
import { useRouter } from 'next/router'
import Bg from '../../components/Bg';
import { MarvelLogoSmall, MenuLink } from '../../styled-components/[menu]-sc';
import Link from 'next/link';
import CharsSection from '../../components/CharsSection';
import MoviesSection from '../../components/MoviesSection';
import HqsSection from '../../components/HqsSection';

export default function Main(): JSX.Element {

  const { menu } = useRouter().query;

  const [selectedSection, setselectedSection] = useState<JSX.Element>();

  useEffect(function () {
    switch (menu) {
      case 'chars': setselectedSection(<CharsSection />); break;
      case 'movies': setselectedSection(<MoviesSection />); break;
      case 'hqs': setselectedSection(<HqsSection />); break;
      default: setselectedSection(<CharsSection />); break;
    }
  },[menu])

  return (
    <>
      <Bg />
      <div className={styles.container}>
        <div className={styles.menu_div}>
          <div className={styles.menu_div_col1}>
            <MarvelLogoSmall>
              <p>MARVEL</p>
            </MarvelLogoSmall>
          </div>
          <nav className={styles.menu_div_col2}>
            <MenuLink>
              <Link href="/main/chars"><p style={{ color: (menu !== 'chars' ? 'gray' : '') }}>Personagens</p></Link>
            </MenuLink>
            <MenuLink>
              <Link href="/main/movies"><p style={{ color: (menu !== 'movies' ? 'gray' : '') }}>Filmes</p></Link>
            </MenuLink>
            <MenuLink>
              <Link href="/main/hqs"><p style={{ color: (menu !== 'hqs' ? 'gray' : '') }}>HQs</p></Link>
            </MenuLink>
          </nav>
          <div className={styles.menu_div_col3}>
            <div>
              <img src='/imgs/avatar.png' alt="Avatar image"></img>
              <Link href="/login">Sair</Link>
            </div>
          </div>
        </div>
        {selectedSection}
      </div>
    </>
  )
}