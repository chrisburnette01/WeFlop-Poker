import React from 'react';
import styled from 'styled-components';

interface BaseTypographyProps {
    variant: string;
    as: React.ElementType;
    fontWeight?: 200 | 500 | 600 | 700 | 800;
    fontStyle?: 'italic' | 'normal';
    textTransform?: 'uppercase' | 'lowercase' | 'capitalize' | 'none';
    color?: 'primary' | 'secondary' | 'initial' | string;
    className?: string;
    style?: Record<string, unknown> | null;
}

interface TypographyProps {
    component: React.ElementType;
    variant?: string;
    children: any;
    fontWeight?: 200 | 500 | 600 | 700 | 800;
    fontStyle?: 'italic' | 'normal';
    textTransform?: 'uppercase' | 'lowercase' | 'capitalize' | 'none';
    color?: 'primary' | 'secondary' | 'initial' | string;
    className?: string;
    style?: Record<string, unknown> | null;
}

const BaseTypography = styled('div')<BaseTypographyProps>`
    font-size: ${({ theme, variant }) => theme.typography[variant].fontSize};
    font-family: ${({ theme }) => theme.typography.fontFamily};
    font-weight: ${({ theme, variant, fontWeight }) =>
        fontWeight ? fontWeight : theme.typography[variant].fontWeight};
    letter-spacing: ${({ theme, variant }) => theme.typography[variant].letterSpacing};
    text-transform: ${({ theme, variant, textTransform }) =>
        textTransform ? textTransform : theme.typography[variant].textTransform};
    font-style: ${({ theme, variant, fontStyle }) => (fontStyle ? fontStyle : theme.typography[variant].fontStyle)};
    color: ${({ theme, color }) => (theme.palette[color!] ? theme.palette[color!] : theme.palette.common[color!])};
    margin: 0;
    & > p {
        margin: 0;
    }
    opacity: 0;
    animation: ${({ theme, style }) => (style?.opacity ? 'none' : theme.animations.text)};
`;

const Typography = ({
    component,
    children,
    variant,
    color,
    className,
    textTransform,
    fontStyle,
    fontWeight,
    style,
}: TypographyProps) => {
    return (
        <BaseTypography
            color={color}
            variant={variant ? variant : component}
            as={component}
            fontWeight={fontWeight}
            fontStyle={fontStyle}
            textTransform={textTransform}
            className={className}
            style={style}
        >
            {children}
        </BaseTypography>
    );
};

Typography.defaultProps = {
    color: 'primary',
};

export default Typography;
