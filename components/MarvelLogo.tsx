import React from 'react';
import styles from '../styles/components/MarvelLogo-styles.module.scss'
import { MarvelLogoRedDiv, MarvelLogoText } from '../styled-components/login-sc';

export default function MarvelLogo():JSX.Element {
  return (
    <div className={styles.marvel_logo}>
      <MarvelLogoRedDiv>
        <MarvelLogoText>MARVEL</MarvelLogoText>
      </MarvelLogoRedDiv>
    </div>
  )
}