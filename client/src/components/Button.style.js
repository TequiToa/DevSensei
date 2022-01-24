import styled from "styled-components";
import Button from "./Button";

export const StyledButton = styled(Button)`
  width: 200px;
  height: 50px;
  background-color: ${(props) => props.backgroundColor};

  &:hover {
    background-color: coral;
  }
`;
