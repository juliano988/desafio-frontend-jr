import React, { useEffect, useState } from 'react';
import styles from '../styles/components/MoviesCard-styles.module.scss';

export default function MoviesCard(props: { movieImg: string, charName: string, movieDescription: string, movieName: string, movieBuy: Array<JSX.Element>, fansRate: number }): JSX.Element {

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
          <img className={styles.char_img} src={props.movieImg}></img>
          <div style={{ display: (showGradient ? 'none' : '') }} className={styles.char_description}>
            <h4>{props.charName}</h4>
            <p>{props.movieDescription}</p>
            <p onClick={handleClick}>Ver Detalhes</p>
          </div>
        </div>
        <div style={{ display: (showGradient ? 'initial' : 'none'), zIndex: (showGradient ? 14 : 'initial') }} className={styles.full_description}>
          <div className={styles.full_description_content}>
            <span onClick={handleClick} className={styles.close_btn} >ⓧ</span>
            <h3>{props.movieName}</h3>
            <p>{props.movieDescription}</p>
            <div>
              <h4>Disponível em streaming:</h4>
              <div className={styles.buy_arr}>
                {props.movieBuy}
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