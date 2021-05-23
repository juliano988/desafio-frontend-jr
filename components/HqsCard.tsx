import React, { useEffect, useState } from 'react';
import styles from '../styles/components/HqsCard-styles.module.scss';

export default function HqsCard(props: { hqImg: string, hqName: string, hqDescription: string, hqBuy: Array<JSX.Element>, fansRate: number }): JSX.Element {

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
          <img className={styles.char_img} src={props.hqImg}></img>
          <div style={{ display: (showGradient ? 'none' : '') }} className={styles.char_description}>
            <h4>{props.hqName}</h4>
            <p>{props.hqDescription}</p>
            <p onClick={handleClick}>Ver Detalhes</p>
          </div>
        </div>
        <div style={{ display: (showGradient ? 'initial' : 'none'), zIndex: (showGradient ? 14 : 'initial') }} className={styles.full_description}>
          <div className={styles.full_description_content}>
            <span onClick={handleClick} className={styles.close_btn} >ⓧ</span>
            <h3>{props.hqName}</h3>
            <p>{props.hqDescription}</p>
            <div>
              <h4>Disponível para comprar:</h4>
              <div className={styles.buy_arr}>
                {props.hqBuy}
              </div>
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