import Link from 'next/link';
import React from 'react';
import { LoginCheckInput, LoginTextInput, MarvelLogoRedDiv, MarvelLogoText, SubmitBtn } from '../styled-components/login-sc';
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

function MarvelLogo() {
  return (
    <div className={styles.marvel_logo}>
      <MarvelLogoRedDiv>
        <MarvelLogoText>MARVEL</MarvelLogoText>
      </MarvelLogoRedDiv>
    </div>
  )
}

function LoginForm() {
  return (
    <form className={styles.login_form}>
      <LoginTextInput type="text" placeholder="Usuário" />
      <LoginTextInput type="text" placeholder="Senha" />

      <div className={styles.save_forgot_div}>
        <div>
          <LoginCheckInput id="save" type="checkbox" />
          <label htmlFor="save">Salvar login</label>
        </div>
        <a className={styles.forgot_pass_link} href="">Esqueci a senha</a>
      </div>

      <Link href="/main">
        <SubmitBtn type="button" >Entrar</SubmitBtn>
      </Link>

      <div className={styles.create_acc_div}>
        <p>Ainda não tem o login?</p>
        <a href="" >Cadastre-se</a>
      </div>
    </form>
  )
}