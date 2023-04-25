import styled from "styled-components";
import { WHITE } from "../constants/colors";



export const StyledLogin = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  gap: 15px;
  h1 {
    color: ${WHITE};
    font-family: 'Saira Stencil One', cursive;
    font-size: 32px;
    line-height: 50px;
  }
  a {
    color: ${WHITE};
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    text-decoration: none;
  }
`;

export const StyledLoginForm = styled.form`
  min-height: 250px;
  max-width: 375px;
  width: 100%;
  display: flex;
  gap: 13px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;