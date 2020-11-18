import { createGlobalStyle } from 'styled-components';



const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root{
    height: 100%;
  }

  *, button, input {
    border: 0;
    outline: 0;
    -webkit-font-smoothing: antialiased;
  }

  :root {
    --gold-gradient: linear-gradient(0deg, #785E2B, #CDBE91);
    --blue-gradient: linear-gradient(0deg, #055468, #67B6E3);
    --dark-blue-gradient: linear-gradient(0deg, #030D16, #0D1F2A);
    --dark-blue: #0A0A0E;
    --navy-blue: #0D1F2A;
    
    --yellow: #E3BA3D;
    --gold: #CDBE91;
    --blue: #0ACAE5;
    --beige: #F0E6D2;
    --purple: #D950E5;
    --green: #1DB954;
    
    --white: #fff;
    --light-gray: #EDEDED;
    --gray: #999;
    --black: #000;

  }
`;

export default GlobalStyles;