import { StyledButton } from "../components/Button.style.js";
import React from "react";

export const HomePage = () => {
  return (
    <div>
      <StyledButton backgroundColor="pink" buttonLabel="CLICK" />
      <p>Home</p>
    </div>
  );
};

export default HomePage;
