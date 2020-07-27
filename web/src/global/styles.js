import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin:0;
        padding:0;
    }
    body {
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
    }
    html, body, #root {
        height: 100%;
    }
`;
