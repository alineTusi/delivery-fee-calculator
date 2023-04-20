import React from "react";
import { StyledInput, StyledInputContainer, StyledInputSpan } from "./styled";

export type NumberInputProps = {
  displayText: string;
  displayTextEnd?: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

export const NumberInput = (props: NumberInputProps) => {
  return (
    <StyledInputContainer>
      <StyledInputSpan>{props.displayText}</StyledInputSpan>
      <StyledInput value={props.value} onChange={props.onChange} />
      <StyledInputSpan>{props.displayTextEnd}</StyledInputSpan>
    </StyledInputContainer>
  );
};
