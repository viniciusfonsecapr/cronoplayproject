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

export const Curiosity = styled.div`
position: fixed;
margin-top: 8%;
margin-left: 2%;
border-radius: 10px;
border: none;
background: gray;
color: white;
text-align: center;
-webkit-box-shadow: 25px 9px 21px 3px rgba(0,0,0,0.54);
-moz-box-shadow: 25px 9px 21px 3px rgba(0,0,0,0.54);
box-shadow: 25px 9px 21px 3px rgba(0,0,0,0.54);
width: 20vw;
height: 80vh;

h2 {
  
  margin-top: 15px;
}

p {
  padding: 15px;
}

`