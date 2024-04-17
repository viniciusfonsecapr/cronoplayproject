import React from "react";
import { Button } from "./styles";

const ButtonCustomized = ({ type, text, onClick }) => {
  return <Button type={type} text={text} onClick={onClick} />;
};
export default ButtonCustomized;
