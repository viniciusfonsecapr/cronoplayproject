import React, { useState } from "react";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";

import Logo from "../../assets/logoDevPlay.png";
import { Container, ContainerItems } from "./styles.js";
import { Home } from "../Home/index.jsx";

export function Login() {
  const schema = Yup.object().shape({
    email: Yup.string()
      .email("Digite um e-mail válido")
      .required("O e-mail é obrigatorio"),
    password: Yup.string("Digite uma senha válida")
      .required("A Senha é obrigatoria")
      .min(6, "A senha deve ter pelo menos 6 digitos"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const onSubmit = (data) => {
    const Users = JSON.parse(localStorage.getItem("users")) || [];
    const validUser = Users.find(
      (user) => user.email === data.email && user.password === data.password
    );
    if (!validUser) {
      return alert("Usuario ou senha incorretos!");
    }
    alert(`Bem vindo Senhor ${validUser.name}`);
    localStorage.setItem("login_success", JSON.stringify(validUser));
    window.location.href = "/";
  };

  return (
    <Container>
      <ContainerItems>
        <img src={Logo}></img>

        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
            placeholder="E-mail"
            {...register("email")}
          />
          {errors.email && <span>Campo Obrigatório</span>}

          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Password"
            type="password"
            {...register("password")}
          />
          {errors.password && <span>Campo Obrigatório</span>}
          <button type="submit">LOGIN</button>

          <a href="./register"> Não tem conta ainda ? Criar Conta! </a>
        </form>
      </ContainerItems>
    </Container>
  );
}
