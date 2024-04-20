import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const ContainerMenu = styled.div``;

export const ContainerHome = styled.div`

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    font-weight: bold;
    font-style: italic;

    img {
      width: 10vw;
      height: 21vh;
      object-fit: cover;
      image-rendering: optimizeQuality;
    }
  }

  h1 {
    margin-left: 10%;
  }
  .Planeta1 {
    position: absolute;
    margin-top: 20vh;
    margin-left: 75vh;
    a {
      color: orange;
    }
  }
  .Planeta2 {
    position: absolute;
    margin-top: 45vh;
    margin-left: 63vh;

    a {
      color: yellowgreen;
    }
  }
  .Planeta3 {
    position: absolute;
    margin-top: 70vh;
    margin-left: 78vh;

    a {
      color: green;
    }
  }
`;
export const TextCenter = styled.img`
  position: absolute;
  margin-top: -15vh;
  margin-left: 50vh;
  width: 50vw;
  height: 50vh;
`;
