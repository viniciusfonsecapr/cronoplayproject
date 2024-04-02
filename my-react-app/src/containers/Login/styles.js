import styled from "styled-components";

export const Container = styled.div`
  background-image: url("https://wallpaper4k.top/wp-content/uploads/2023/09/Night-Sky-Stars-Iphone-Wallpaper-Sky-above-the-1024x640.jpg");
  background-repeat: no-repeat;
  background-size: 100%;
  object-fit: cover;
  height: 100vh;
`;
export const ContainerItems = styled.div`
  height: 75%;
  width: 300px;
  background-color: #000;
  border-radius: 25px;
  padding: 25px 75px;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;

  h1 {
    margin-top: 50px;
    text-align: center;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    color: #fff;
  }

  form {
    display: flex;
    flex-direction: column;
  }
`;
