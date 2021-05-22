import React, { useEffect } from 'react';
import styles from '../../styles/main/[menu]-styles.module.scss'
import { useRouter } from 'next/router'

export default function Main(): JSX.Element {

  const { menu } = useRouter().query;

  console.log(menu)

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