import React from 'react';
import styled from 'styled-components';

interface BaseTypographyProps {
    variant: string;
    as: React.ElementType;
    color?: 'primary' | 'secondary' | 'initial' | string;
}

interface TypographyProps {
    component: React.ElementType;
    variant?: string;
    children: any;
    color?: 'primary' | 'secondary' | 'initial' | string;
}

const BaseTypography = styled('div')<BaseTypographyProps>`
    font-size: ${({ theme, variant }) => theme.typography[variant].fontSize};
    font-style: ${({ theme, variant }) => theme.typography[variant].fontStyle};
    font-family: ${({ theme }) => theme.typography.fontFamily};
    font-weight: ${({ theme, variant }) => theme.typography[variant].fontWeight};
    letter-spacing: ${({ theme, variant }) => theme.typography[variant].letterSpacing};
    text-transform: ${({ theme, variant }) => theme.typography[variant].textTransform};
    color: ${({ theme, color }) => (theme.palette[color!] ? theme.palette[color!] : theme.palette.common[color!])};
    margin: 0;
    & > p {
        margin: 0;
    }
    opacity: 0;
    animation: ${({ theme }) => theme.animations.text};
`;

const Typography = ({ component, children, variant, color }: TypographyProps) => {
    return (
        <BaseTypography color={color} variant={variant ? variant : component} as={component}>
            {children}
        </BaseTypography>
    );
};

Typography.defaultProps = {
    color: 'primary',
};

export default Typography;
