import styled from "styled-components";

export const StyledInputSpan = styled.div`
  display: flex;
  padding: 4px;
  width: 40%;
`;

export const StyledInputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledInput = styled.input.attrs(() => ({
  type: "number",
}))`
  font-size: 16px;
  font-weight: 600;
  width: 50%;
  margin-top: 16px;
  margin-bottom: 16px;
  height: 24px;
`;
