import styled from "styled-components";
import Background from '../../assets/stepOne/background.png'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: url('${Background}');
  background-repeat: no-repeat;
  background-size: cover;
  
`;


export const ContainerDiv = styled.div`
position: absolute;
margin-top: 12%;
margin-left: 30%;
width: 700px;
height: 500px;
background: #9b4f06;
border-radius: 50px;
  

h1 {
  text-align: center;
  padding-top: 20px;
  color: orange;
  font-weight: 900;
}
ul {
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding-top: 50px;
  
}
li {
  color: orange;
  text-decoration: none;
  list-style-type: none;
}

div {
 width: 50px;
 background: white;
 height: 50px;
 border: none;
  border-radius: 10px;
  
}

`

export const AlignLi = styled.div`
`