import React from "react";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";

import Logo from "../../assets/logoDevPlay.png";
import { Container, ContainerItems } from "./styles.js";

export function Login() {
  const history = useHistory();

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

  const onSubmit = (data) => console.log(data);

  return (
    <Container>
      <ContainerItems>
        <img src={Logo}></img>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input type="email" placeholder="E-mail" {...register("email")} />
          {errors.email && <span>Campo Obrigatório</span>}
          <input
            placeholder="Password"
            type="password"
            {...register("password")}
          />
          {errors.password && <span>Campo Obrigatório</span>}
          <button type="submit">LOGIN</button>
        </form>
      </ContainerItems>
    </Container>
  );
}
