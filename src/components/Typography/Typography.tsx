import React from 'react';
import styled from 'styled-components';

interface BaseTypographyProps {
    variant: string;
    as: React.ElementType;
    color?: 'primary' | 'secondary' | 'initial';
}

interface TypographyProps {
    component: React.ElementType;
    variant?: string;
    children: any;
    color?: 'primary' | 'secondary' | 'initial';
}

const BaseTypography = styled('div')<BaseTypographyProps>`
    font-size: ${({ theme, variant }) => theme.typography[variant].fontSize};
    font-family: ${({ theme }) => theme.typography.fontFamily};
    font-weight: ${({ theme, variant }) => theme.typography[variant].fontWeight};
    letter-spacing: ${({ theme, variant }) => theme.typography[variant].letterSpacing};
    text-transform: ${({ theme, variant }) => theme.typography[variant].textTransform};
    color: ${({ theme, color }) =>
        color === 'primary' ? theme.palette.primary : color === 'initial' ? '#fff' : theme.palette.secondary};
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
