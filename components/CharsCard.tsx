import React, { useState } from 'react';
import styles from '../styles/components/CharsCard-styles.module.scss'

export default function CharsCard(props: { charImg: string, charName: string, charDescription: string }): JSX.Element {

  const [showGradient, setshowGradient] = useState<boolean>(false);

  function handleClick() {
    setshowGradient(!showGradient);
  }

  return (
    <>
      <div style={{ display: (showGradient ? 'initial' : 'none'), zIndex: (showGradient ? 10 : 'initial') }} className={styles.gradient}></div>
      <div className={styles.card_content}>
        <div style={{ zIndex: (showGradient ? 15 : 'initial') }} className={styles.main_content}>
          <img className={styles.char_img} src={props.charImg}></img>
          <div className={styles.char_description}>
            <h4>{props.charName}</h4>
            <p>{props.charDescription}</p>
            <p onClick={handleClick}>Ver Detalhes</p>
          </div>
        </div>
        <div style={{ display: (showGradient ? 'initial' : 'none'), zIndex: (showGradient ? 14 : 'initial') }} className={styles.full_description}>
          <div className={styles.full_description_content}>
            aaaaaaaaaaa
          </div>
        </div>
      </div>
    </>
  )
}