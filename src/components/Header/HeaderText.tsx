import React from "react";
import { StyledHeaderText } from "./styled";

export type HeaderTextProps = {
  text: string;
};

export const HeaderText = (props: HeaderTextProps) => {
  return <StyledHeaderText>{props.text}</StyledHeaderText>;
};
