import React, { useState } from "react";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";

import Logo from "../../assets/logoDevPlay.png";
import { Container, ContainerItems } from "./styles.js";
import { Button } from "../../components/Button/styles.js";

export function Register() {
  const history = useHistory();

  const schema = Yup.object().shape({
    email: Yup.string()
      .email("Digite um e-mail válido")
      .required("O e-mail é obrigatorio"),
    name: Yup.string().min(4),
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

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const onSubmit = (data, e) => {
    e.preventDefault();

    const Users = JSON.parse(localStorage.getItem("users")) || [];
    const isUserRegistered = Users.find((user) => user.email === data.email);
    if (isUserRegistered) {
      history.push("/login");
      return alert("Usuario já registrado!");
    }

    Users.push({ name: data.name, email: data.email, password: data.password });
    localStorage.setItem("users", JSON.stringify(Users));
    alert("Registro Realizado!");
  };
  return (
    <Container>
      <ContainerItems>
        <img src={Logo} alt="Logo" />

        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            type="name"
            placeholder="Nome"
            {...register("name")}
          />
          {errors.name && <span>Campo Obrigatorio</span>}

          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
            placeholder="E-mail"
            {...register("email")}
          />
          {errors.email && <span>Campo Obrigatorio</span>}

          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Password"
            type="password"
            {...register("password")}
          />
          {errors.password && <span>Campo Obrigatorio</span>}

          <Button type="submit"> Registrar</Button>

          <a href="./login"> Voltar para o Login! </a>
        </form>
      </ContainerItems>
    </Container>
  );
}
