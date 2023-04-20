import { format } from "date-fns";
import React from "react";
import { ChangeEventHandler } from "react";
import { StyledInput, StyledInputContainer, StyledInputSpan } from "./styled";

export type DateInputProps = {
  displayText: string;
  displayTextEnd?: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

export const DateInput = (props: DateInputProps) => {
  return (
    <StyledInputContainer>
      <StyledInputSpan>{props.displayText}</StyledInputSpan>
      <StyledInput
        type="datetime-local"
        value={props.value}
        onChange={props.onChange}
        min={format(new Date(), "yyyy-MM-dd kk:mm:ss")}
      />
      <StyledInputSpan>{props.displayTextEnd}</StyledInputSpan>
    </StyledInputContainer>
  );
};
