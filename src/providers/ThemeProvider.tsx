/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { ThemeProvider as StyledProvider } from 'styled-components';
import GlobalStyle from '../app/GlobalStyle';

interface ThemeProviderProps {
    children: any;
    mode?: 'light' | 'dark';
}

type Palette = {
    common?: Record<string, unknown>;
    primary: string;
    secondary: string;
    error: string;
    warning: string;
    success: string;
    text: string;
    background: string;
};

type Text = {
    fontFamily?: string;
    fontWeight: number;
    fontSize: string;
    lineHeight?: string;
    letterSpacing?: string;
    textTransform?: string;
};

type Typography = {
    fontFamily: string;
    fontSize: string;
    h1?: Text;
    h2?: Text;
    h3?: Text;
    h4?: Text;
    h5?: Text;
    h6?: Text;
    subtitle1?: Text;
    subtitle2?: Text;
    body1?: Text;
    body2?: Text;
    tooltip?: Text;
    button1?: Text;
    button2?: Text;
    input?: Text;
    display1?: Text;
};

interface Theme {
    palette: Palette;
    typography: Typography;
}

declare module 'styled-components' {
    // eslint-disable-next-line
    export interface DefaultTheme extends Theme {}
}

type ThemeContextType = {
    switchMode?: (themeType: 'dark' | 'light') => void;
    theme: Theme;
};

const defaultLightPalette: Palette = {
    common: {
        white: '#fff',
        black: '#000',
    },
    primary: '#031D38',
    secondary: '#8B112F',
    error: '#8B112F',
    warning: 'yellow',
    success: '#028561',
    text: '#031D38',
    background: '#E9E9E9',
};

const defaultDarkPalette: Palette = {
    common: {
        white: '#fff',
        black: '#000',
    },
    primary: '#fff',
    secondary: '#8B112F',
    error: '#8B112F',
    warning: 'yellow',
    success: '#028561',
    text: '#fff',
    background: '#031D38',
};

const defaultTypography: Typography = {
    fontFamily: 'Avenir',
    fontSize: '1.4rem',
    h1: {
        fontWeight: 800,
        fontSize: '3.2rem',
        letterSpacing: '2.86px',
    },
    h2: {
        fontWeight: 800,
        fontSize: '2.4rem',
        letterSpacing: '2.14px',
    },
    subtitle1: {
        fontWeight: 800,
        fontSize: '1.8rem',
        letterSpacing: '1.61px',
    },
    body1: {
        fontWeight: 500,
        fontSize: '1.8rem',
        letterSpacing: '1.61px',
    },
    button1: {
        fontWeight: 800,
        fontSize: '3.2rem',
        letterSpacing: '2.86px',
        textTransform: 'uppercase',
    },
    button2: {
        fontWeight: 800,
        fontSize: '2.4rem',
        letterSpacing: '2.14px',
        textTransform: 'uppercase',
    },
    input: {
        letterSpacing: '1.43px',
        fontSize: '1.6rem',
        fontWeight: 500,
    },
    tooltip: {
        fontSize: '1.6rem',
        fontWeight: 500,
    },
    display1: {
        fontSize: '3.2rem',
        fontWeight: 800,
        letterSpacing: '2.86px',
        textTransform: 'uppercase',
    },
};

const themeContextState: ThemeContextType = {
    theme: {
        palette: defaultLightPalette,
        typography: defaultTypography,
    },
};

export const ThemeContext = React.createContext<ThemeContextType>(themeContextState);

export const ThemeProvider = ({ children, mode }: ThemeProviderProps) => {
    const [themeMode, setThemeMode] = useState<'dark' | 'light'>(mode ? mode : 'light');
    const [lightPalette, setLightPalette] = useState<Palette>(defaultLightPalette);
    const [darkPalette, setDarkPalette] = useState<Palette>(defaultDarkPalette);

    const switchMode = (mode: 'dark' | 'light') => setThemeMode(mode);
    const theme = {
        palette: mode === 'light' ? lightPalette : darkPalette,
        typography: defaultTypography,
    };

    return (
        <ThemeContext.Provider
            value={{
                switchMode,
                theme,
            }}
        >
            <StyledProvider theme={theme}>
                <GlobalStyle />
                {children}
            </StyledProvider>
        </ThemeContext.Provider>
    );
};
