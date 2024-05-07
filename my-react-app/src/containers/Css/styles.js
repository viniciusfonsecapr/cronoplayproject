import styled from "styled-components";
import Background from "../../assets/StepOneCss/BackgroundCss.png";


export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: url("${Background}");
  background-repeat: no-repeat;
  background-size: cover;

 #Astronalta{
  position: absolute;
  margin: 12% 0% 0% 8%;
  width: 20%;
  height: 35%;
 }
`;


export const ContainerCardMission = styled.div`
  position: absolute;
  margin-top: 10%;
  margin-left: 35vw;
  width: 25%;
  height: 60%;
  background: #fad05a;
  border-radius: 50px;



  h1 {
    text-align: center;
    padding-top: 20px;
    color: #866215;
    font-weight: 900;
  }

  
`;
