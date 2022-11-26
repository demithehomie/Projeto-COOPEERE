import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    width: 100vw;
    height: 100vh;
    background-image: url("https://coopeere.microcampos.com.br/img/turbinas-2.jfif");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
	  height: 100%;
	 
    font-family: Arial, Helvetica, sans-serif;
  }
`;

export default GlobalStyle;
