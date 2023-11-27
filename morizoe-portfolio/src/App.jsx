import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
ffff
import { IndexPage } from "./components/index-page/IndexPage";
import { DetailPages } from "./components/detail-pages/DeatailPages";


export const App = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="" element={<IndexPage />}>
          </Route>
          <Route path="/" element={<DetailPages />}>
            <Route path="profile">

            </Route>
            <Route path="with-grit">

            </Route>
            <Route path="vision">

            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
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
    line-height: 1.3;
    color: #333;
}

a {
    text-decoration: none;
}

img {
    max-width: 100%;
}
`;