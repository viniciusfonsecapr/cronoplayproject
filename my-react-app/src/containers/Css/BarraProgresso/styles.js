import styled from "styled-components";

export const Container = styled.div`
 
`;

export const ContainerProgressBar = styled.div`
  position: absolute;
  width: 45%;
  margin-left: 25vw;
  margin-top: 3%;

  .progress{
    background: gray;
  }
  .progress-bar{
    background: green;
  }
  
  h6{
   text-align: center;
   color: white;
   font-weight: 900;
   font-size: 15px;
   padding-left: 20%;
  }

  @media (max-width: 600px) {
  margin-top:23%;
  width: 80%;
  margin-left: 10vw;

 h6 {
  font-size: 12px;
  padding-left: 10%;
 }
}
`;

