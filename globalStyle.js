import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
 *{
     marging: 0;
     padding: 0;
     box-sizing: border-box;
     font-family: 'Source Sans Pro', sans-serif;
 }
 html, body {
     overflow-x: hidden;
 }
`


export default GlobalStyle;
