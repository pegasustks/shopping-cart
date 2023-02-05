import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

const GlobalStyles = createGlobalStyle`
  * {
    ${reset}
    font-family: 'Rubik', sans-serif !important;
  }
`;

export default GlobalStyles;
