import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const TextCenter = styled.img`
  position: absolute;
  width: 60vw;
  height: 55vh;
  margin-left: 25vw;
  margin-top: -15vh;
`;

export const ContainerHome = styled.div`
  margin-left: 15%;

  div {

  }
  a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    font-weight: bold;
    font-style: italic;
    font-size: 25px;

    img {
      width: 150px;
      height: 150px;
      object-fit: cover;
      image-rendering: optimizeQuality;
    }

  }
  a:hover {
    cursor: pointer;
    scale: 1.15;
  }

  .Planeta1 {
    position: absolute;
    margin-top: 25vh;
    margin-left: 30%;
    a {
      color: orange;
    }
  }
  .Planeta2 {
    position: absolute;
    margin-top: 50vh;
    margin-left: 10%;

    a {
      color: yellowgreen;
    }
  }
  .Planeta3 {
    position: absolute;
    margin-top: 75vh;
    margin-left: 24%;

    a {
      color: green;
    }
  }
`;

export const AstronaultGuy = styled.img`
  position: fixed;
  margin-top: 15%;
  margin-left: 60%;
  width: 25vw;
  height: 35vh;
`;

export const Cloud = styled.div`
  position: fixed;
  margin-top: 140%;
  width: 100vw;
  height: 65%;

  img {
    width: 100%;
    height: 100%;
  }
`;
