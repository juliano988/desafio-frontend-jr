import React, { useEffect } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.scss';

export default function Home(): JSX.Element {

  useEffect(function(){
    window.location.replace('/login')
  },[])

  return (
    <div className={styles.container}>

    </div>
  )
}
