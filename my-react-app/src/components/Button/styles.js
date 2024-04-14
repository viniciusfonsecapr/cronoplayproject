import styled from 'styled-components'

export const Button = styled.button`
  border-radius: 25px;
  border: none;
  height: 50px;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin: 0 auto;

  font-size: 20px;
  font-weight: bold;
  color: white;
  background: #2247b5;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    opacity: 0.7;
    cursor: pointer;
    transform: scale(1.1);
  }
  &:active {
    opacity: 0.6;
  } 
`