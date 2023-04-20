import React from 'react';
import { StyledButton } from "./styled";

export type ButtonProps = {
  text: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export const Button = (props: ButtonProps) => {
  return <StyledButton onClick={props.onClick}>{props.text}</StyledButton>;
};
