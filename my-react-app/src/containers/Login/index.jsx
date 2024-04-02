import React from "react";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { Container, ContainerItems } from "./styles.js";

import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";

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
        <h1>Login</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input type="email" {...register("email")} />
          {errors.email && <span>This field is required</span>}

          <input type="password" {...register("password")} />

          {errors.password && <span>This field is required</span>}
          <button type="submit">LOGIN</button>
        </form>
      </ContainerItems>
    </Container>
  );
}
