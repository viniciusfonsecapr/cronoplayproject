import styled from "styled-components";

export const Container = styled.div``;

export const ContainerItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin: 0 auto;
  margin-top: 8%;
  height: 68%;
  width: 20%;
  padding: 1%;
  border-radius: 25px;
  background-color: #000;
  box-shadow: 0px 4px 15px rgba(108, 144, 226, 0.24);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);

  h1 {
    margin-bottom: 25px;
    text-align: center;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    color: #fff;
  }
`;

export const Button = styled.div`
  
   
  button {
      border-radius: 25px;
      border: none;
      height: 50px;
      width: 50%;
      margin: 0 auto;

      font-size: 20px;
      font-weight: bold;
      color: white;
      background: #2247b5;
      cursor: pointer;
      text-decoration: none;

      &:hover {
        opacity: 0.7;
        cursor: pointer;
        transform: scale(1.1);
      }
      &:active {
        opacity: 0.6;
      }
    }
  
  
  
  /* border-radius: 25px;
  border: none;
  height: 50px;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin: 0 auto;

  font-size: 20px;
  font-weight: bold;
  color: white;
  background: #9ca41f;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    opacity: 0.7;
    cursor: pointer;
    transform: scale(1.1);
  }
  &:active {
    opacity: 0.6;
  } */
`;
