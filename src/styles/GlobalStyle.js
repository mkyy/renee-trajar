import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*{box-sizing: border-box}
body, html{
    margin:0;
    padding:0;
    overflow-x: hidden;
}

.h-active{
    background: #fff;
    height: 63px;

    .content #black-logo{
        display: block;
    }
    #logo{
        display: none;
    }


}

`;
