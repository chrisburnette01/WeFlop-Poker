import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${({ theme }) => theme.palette.background};
        margin: 0;
        box-sizing: border-box;
    }

    .button-form {
    	bottom: -96px;
		margin: 0 -25px 0 -25px;
		position: absolute;
		min-width: 340px;
    }

    .button-play {
        margin: 48px -25px 0 -25px;
        min-width: 286px;
    }
`;

export default GlobalStyle;
