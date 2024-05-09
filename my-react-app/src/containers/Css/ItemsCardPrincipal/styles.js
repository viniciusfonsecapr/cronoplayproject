import styled from "styled-components";

export const Container = styled.div``;

export const ContainerListItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 40px;
  justify-content: space-around;
  h1 {
    margin-left: 30%;
  }
  span {
    color: #674c16;
  }
  :hover {
    scale: 1.1;
    cursor: pointer;
  }

  @media (max-width: 600px) {
    gap: 45px;
    button {
      display: flex;
      
    }
    span {
      padding: 10px 0px 0px 5px;
    }
  }
`;
