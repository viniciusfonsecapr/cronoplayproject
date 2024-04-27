import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;
export const ContainerHome = styled.div`

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    font-weight: bold;
    font-style: italic;

    img {
      width: 8vw;
      height: 16vh;
      object-fit: cover;
      image-rendering: optimizeQuality;
    }
  }

  h1 {
    margin-left: 10%;
  }
  .Planeta1 {
    position: absolute;
    margin-top: 25vh;
    margin-left: 75vh;
    a {
      color: orange;
    }
  }
  .Planeta2 {
    position: absolute;
    margin-top: 48vh;
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
  margin-top: -25vh;
  margin-left: 50vh;
  width: 50vw;
  height: 70vh;
`;

export const AstronaultGuy = styled.img`
position: fixed;
margin-top: 15%;
margin-left: 60%;
width: 25vw;
height: 35vh;
`

export const Cloud = styled.div`
position: fixed;
margin: 0 auto;
margin-top: 31%;
width: 100vw;
height: 60vh;

img {
  width: 100%;
  height:100%;
}

`

