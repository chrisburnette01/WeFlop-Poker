import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${({ theme }) => theme.palette.background};
        margin: 0;
        box-sizing: border-box;
    }

    
`;

export default GlobalStyle;
