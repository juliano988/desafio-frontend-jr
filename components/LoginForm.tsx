import Link from "next/link";
import React from "react";
import styles from '../styles/components/LoginForm-styles.module.scss';
import { LoginCheckInput, LoginTextInput, SubmitBtn } from "../styled-components/login-sc";


export default function LoginForm():JSX.Element {
  return (
    <form className={styles.login_form}>
      <LoginTextInput type="text" placeholder="Usuário" />
      <LoginTextInput type="password" placeholder="Senha" />

      <div className={styles.save_forgot_div}>
        <div>
          <LoginCheckInput id="save" type="checkbox" />
          <label htmlFor="save">Salvar login</label>
        </div>
        <a className={styles.forgot_pass_link} href="">Esqueci a senha</a>
      </div>

      <Link href="/main/chars?page=1">
        <SubmitBtn type="button" >Entrar</SubmitBtn>
      </Link>

      <div className={styles.create_acc_div}>
        <p>Ainda não tem o login?</p>
        <a href="" >Cadastre-se</a>
      </div>
    </form>
  )
}