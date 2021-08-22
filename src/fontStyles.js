import { createGlobalStyle } from "styled-components";
import Oswald from "./assets/fonts/Oswald.ttf";

const FontStyles = createGlobalStyle`

@font-face {
  font-family: 'Oswald';
  src: url(${Oswald}) format('truetype');
}

body {
  font-family: 'Oswald';
}
`;

export default FontStyles;