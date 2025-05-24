import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #F5F8FA;
    --blue-low: #DDE9F0;
    --brand-blue: #115D8C;
    --brand-orange: #F25D27;
    --exclude: #DE3838;
    --green: #51B853;
    --green-low: #DCF5DD;
    --orange-low: #FFA585;
    --shape-1: #FFFFFF;
    --shape-2: #DCE2E5;
    --text-title: #123952;
    --text-body: #617480;
    --text-placeholder: #A0ACB2;
    --yellow: #EFB866;

    --max-width: 1120px;
    --border-radius: 12px;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  html,
  body {
    max-width: 100vw;
    overflow-x: hidden;
  }
`;
