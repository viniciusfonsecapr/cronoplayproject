import styled from "styled-components";

export const Container = styled.div`
  width: 50vw;
  height: 50px;
  /* background: #3456; */
  position: absolute;
  margin-top:85vh;
  margin-left: 22vw;
`;

export const AlignLi = styled.div`


  ul {
    display: flex;
    justify-content: center;
    flex-direction: row;
    color: #000;
    gap: 25%;
  }

  li {
    text-align: center;
    font-size: 25px;
    padding: 20px;
    text-decoration:none;
    list-style-type: none;
    background: #5b3d1c;
    width: 80px;
    height: 80px;
    border-radius:50px; 
    color: orange;
  }
`;
