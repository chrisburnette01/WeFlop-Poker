import React, { useState, memo } from 'react';
import styled from 'styled-components';
import { isCard } from '../../../../helpers';
import { useSpring, animated } from 'react-spring';

const baseImagePath = '/deck';

interface CardProps {
    className?: string;
    variant?: string;
    color?: string;
    right?: boolean;
    left?: boolean;
    animated?: boolean;
    flipped?: boolean;
    onClick?: any;
    style?: any;
}

interface BaseCardProps {
    back?: boolean;
    opacity?: any;
    transform?: any;
}

interface ImageProps {
    path: string | undefined;
    color?: string;
}

interface BaseCardWrapper {
    animated?: boolean;
    right?: boolean;
    left?: boolean;
}

const BaseCard = styled(animated.div)<BaseCardProps>`
    border: 3px solid
        ${({ theme, color }) =>
            !color
                ? theme.palette.secondary
                : theme.palette[color]
                ? theme.palette[color]
                : theme.palette.common[color]};
    background: ${({ theme, back }) => back && theme.palette.secondary};
    border-radius: 3px;
    width: 5.8rem;
    height: 7.9rem;
    position: absolute;
`;

const Image = styled.div<ImageProps>`
    padding-top: 140%;
    background: ${({ path, theme }) => (path != undefined ? `url(${path})` : theme.palette.background)};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`;

const Card = React.forwardRef(({ variant, color, flipped, onClick, style, className }: CardProps, ref: any) => {
    const isCardRes = isCard(variant);
    const { opacity, transform, top } = useSpring<any>({
        opacity: flipped ? 1 : 0,
        transform: `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`,
        config: { mass: 5, tension: 500, friction: 80 },
    });

    return (
        <animated.div className={className} onClick={onClick} style={style} ref={ref}>
            <BaseCard
                color={color}
                style={{ opacity, top, transform: transform.interpolate((t) => `${t} rotateX(180deg)`) }}
            >
                <Image path={isCardRes ? `${baseImagePath}/${variant}.svg` : undefined} />
            </BaseCard>
            {isCardRes && <BaseCard back style={{ opacity: opacity.interpolate((o: any) => 1 - o), transform, top }} />}
        </animated.div>
    );
});

Card.defaultProps = {
    flipped: false,
};

export default styled(Card)`
    position: ${({ animated }) => (animated ? 'absolute' : 'static')};
    right: ${({ right }) => (right ? '0' : 'unset')};
    left: ${({ left }) => (left ? '0' : 'unset')};
    width: 58px;
    height: 79px;
`;
