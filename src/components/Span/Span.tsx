import React from "react";
import { StyledSpan } from "./styled";

export type SpanProps = {
  text: string;
};

export const Span = (props: SpanProps) => {
  return <StyledSpan>{props.text}</StyledSpan>;
};
