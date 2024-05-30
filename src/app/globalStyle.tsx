"use client";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        background: rgb(67,34,195);
        background: linear-gradient(350deg, rgba(67,34,195,1) 0%, rgba(44,6,89,1) 66%);
        background-repeat: no-repeat;
        height: 100vh;
    }
`;
