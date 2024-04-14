import React from "react";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";

import Logo from "../../assets/logoDevPlay.png";
import { Container, ContainerItems, Button } from "./styles.js";

export function Register() {
  const history = useHistory();

  const schema = Yup.object().shape({
    email: Yup.string()
      .email("Digite um e-mail válido")
      .required("O e-mail é obrigatorio"),
    nome: Yup.string().min(4).required("O nome é obrigatorio"),
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
        {/* aqui vai a logo */}
        <img src={Logo} alt="Logo" width="500" height="600" />
        <div>
          <h1> divs e h1 para preencher espaço apenas </h1>
        </div>
        {/* apagar as divs e h1 apos adicionar logo  */}
        <div>
          <h1>divs e h1 para preencher espaço apenas</h1>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <input type="nome" placeholder="Nome" {...register("nome")} />

          <input type="email" placeholder="E-mail" {...register("email")} />

          <input
            placeholder="Password"
            type="password"
            {...register("password")}
          />

          <Button> Registrar</Button>

          {/* aqui vai o botão/link para redirecionar para o login de forma manual */}
          <a href="./Login"> Voltar para o Login! </a>
        </form>
      </ContainerItems>
    </Container>
  );
}
