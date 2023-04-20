import styled from "styled-components";

export const StyledInputSpan = styled.div`
  display: flex;
  align-items: center;
  padding: 4px;
  width: 40%;
`;

export const StyledInputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
`;

export const StyledInput = styled.input.attrs(() => ({
  type: "datetime-local",
}))`
  height: auto;
  font-size: 16px;
  font-weight: 600;
  width: 50%;
  padding: 2px;
`;
