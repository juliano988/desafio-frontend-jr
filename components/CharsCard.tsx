import React, { useEffect, useState } from 'react';
import styles from '../styles/components/CharsCard-styles.module.scss'

export default function CharsCard(props: { charImg: string, charName: string, charDescription: string, charAppearances: JSX.Element, fansRate: number }): JSX.Element {

  const [showGradient, setshowGradient] = useState<boolean>(false);

  const [starsArr, setstarsArr] = useState<Array<React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>>>([])

  useEffect(function () {
    const tempArr = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= props.fansRate) {
        tempArr.push(<img src="/imgs/star-on.png"></img>)
      } else {
        tempArr.push(<img src="/imgs/star-off.png"></img>)
      }
    }
    setstarsArr(tempArr);
  }, [props.fansRate])

  function handleClick() {
    setshowGradient(!showGradient);
  }

  return (
    <>
      <div onClick={handleClick} style={{ display: (showGradient ? 'initial' : 'none'), zIndex: (showGradient ? 10 : 'initial') }} className={styles.gradient}></div>
      <div className={styles.card_content}>
        <div style={{ zIndex: (showGradient ? 15 : 'initial') }} className={styles.main_content}>
          <img className={styles.char_img} src={props.charImg}></img>
          <div style={{ display: (showGradient ? 'none' : '') }} className={styles.char_description}>
            <h4>{props.charName}</h4>
            <p>{props.charDescription}</p>
            <p onClick={handleClick}>Ver Detalhes</p>
          </div>
        </div>
        <div style={{ display: (showGradient ? 'initial' : 'none'), zIndex: (showGradient ? 14 : 'initial') }} className={styles.full_description}>
          <div className={styles.full_description_content}>
            <span onClick={handleClick} className={styles.close_btn} >ⓧ</span>
            <h3>{props.charName}</h3>
            <div>
              <h4>Aparições:</h4>
              {props.charAppearances}
            </div>
            <div>
              <h4>Avaliações dos Fãs:</h4>
              {starsArr}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}