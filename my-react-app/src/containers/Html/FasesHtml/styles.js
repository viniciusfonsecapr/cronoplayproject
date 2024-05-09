import styled from "styled-components";

export const Container = styled.div`
  width: 50vw;
  height: 50px;
  /* background: #3456; */
  position: absolute;
  margin-top:90vh;
  margin-left: 22vw;
`;

export const AlignLi = styled.div`


  ul {
    display: flex;
    justify-content: center;
    flex-direction: row;
    color: #000;
    gap: 18%;
    text-decoration:none
  }

  li {
    text-align: center;
    font-size: 25px;
    padding: 10px;
    list-style-type: none;
    background: #5b3d1c;
    width: 60px;
    height: 60px;
    border-radius:50px; 
    color: orange;

  }

  
  li:hover {
      scale: 1.1;
      cursor: pointer;
      background: gray;
    }
`;
