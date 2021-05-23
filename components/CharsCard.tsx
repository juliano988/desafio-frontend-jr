import React from 'react';
import styles from '../styles/components/CharsCard-styles.module.scss'

export default function CharsCard(props: { charImg: string, charName: string, charDescription: string }): JSX.Element {
  return (
    <div className={styles.container}>
      <img className={styles.char_img} src={props.charImg}></img>
      <div className={styles.char_description}>
        <h4>{props.charName}</h4>
        <p>{props.charDescription}</p>
        <p>Ver Detalhes</p>
      </div>

    </div>
  )
}