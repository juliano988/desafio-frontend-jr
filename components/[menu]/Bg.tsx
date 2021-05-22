import React from 'react';
import styles from '../../styles/components/[menu]/Bg-styles.module.scss'

export default function Bg(): JSX.Element {

  return (
    <>
      <div className={styles.gradient_effect}></div>
      <div className={styles.page_content_div}>
        <div className={styles.col1}></div>
        <div className={styles.col2}> </div>
      </div>
    </>
  )
}