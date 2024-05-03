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

  :hover {
    scale: 1.1;
    cursor: pointer;
  }
`;
