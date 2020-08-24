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
		min-width: 352px;
    }

    .button-play {
        margin: 48px -25px 0 -25px;
        min-width: 286px;
    }

    .d-flex {
        display: flex;
    }

    .justify-content-center {
        justify-content: center;
    }

    .justify-content-start {
        justify-content: flex-start;
    }

    .justify-content-end {
        justify-content: flex-end;
    }

    .align-items-center {
        align-items: center;
    }

    .align-items-start {
        align-items: flex-start;
    }

    .align-items-end {
        align-items: flex-end;
    }
`;

export default GlobalStyle;
