import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

export const App = () => {
  return (
    <GlobalStyle />

  );
}

const GlobalStyle = createGlobalStyle`
  ${reset}
  html {
      font-size: 100%;
  }

  body {
      font-family: 'Montserrat Alternates', sans-serif;
      font-family: 'Noto Sans JP', sans-serif;
      line-height: 1.7;
      color: #333;
  }

  a {
      text-decoration: none;
  }

  img {
      max-width: 100%;
  }
`;