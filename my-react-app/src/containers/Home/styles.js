import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const ContainerMenu = styled.div``;

export const ContainerHome = styled.div`
  .Planeta1 {
    position: absolute;
    margin-top: 20vh;
    margin-left: 73vh;

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      text-decoration: none;
      color: orange;
      font-weight: bold;
      font-style: italic;

      img {
        width: 10vw;
        height: 20vh;
        object-fit: cover;
        image-rendering: optimizeQuality;
      }
    }
  }
`;
export const TextCenter = styled.img`
  position: absolute;
  margin-top: -15vh;
  margin-left: 50vh;
  width: 50vw;
  height: 50vh;
`;
