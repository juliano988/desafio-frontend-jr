import React from 'react';
import LoginForm from '../components/LoginForm';
import MarvelLogo from '../components/MarvelLogo';
import styles from '../styles/login-styles.module.scss'

export default function Login(): JSX.Element {
  return (
    <>
      <div className={styles.gradient_effect}></div>

      <div className={styles.page_content_div}>
        <div className={styles.col1}>
          <MarvelLogo />
          <div className={styles.above_marvel_logo}>
            <h2>Bem-vindo(a) de volta!</h2>
            <p>Acesse sua conta:</p>
            <LoginForm />
          </div>
        </div>

        <div className={styles.col2}> </div>
      </div>
    </>
  )
}