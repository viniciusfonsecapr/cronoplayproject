import styled from "styled-components";
import Background from "../../assets/stepOne/background.png";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: url("${Background}");
  background-repeat: no-repeat;
  background-size: cover;
`;


export const ContainerCardMission = styled.div`
  position: absolute;
  margin-top: 10%;
  margin-left: 25vw;
  width: 45%;
  height: 60%;
  background: #9b4f06;
  border-radius: 50px;

  h1 {
    text-align: center;
    padding-top: 20px;
    color: orange;
    font-weight: 900;
  }

  
`;
