import React, { useState } from 'react';
import styled from 'styled-components';
import { isCard } from '../../../../helpers';
import { useSpring, animated } from 'react-spring';

const baseImagePath = '/deck';

interface CardProps {
    variant?: string;
    color?: string;
}

interface BaseCardProps {
    back?: boolean;
}

interface ImageProps {
    path: string | undefined;
    color?: string;
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
    width: 58px;
    height: 79px;
    position: absolute;
`;

const Image = styled.div<ImageProps>`
    padding-top: 140%;
    background: ${({ path, theme }) => path != undefined ? `url(${path})` : theme.palette.background};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`;


const Card = ({ variant, color }: CardProps) => {
    const isCardRes = isCard(variant);
    const [isFlipped, setIsFlipped] = useState(false);
    const { transform, opacity } = useSpring({
        opacity: isFlipped ? 1 : 0,
        transform: `perspective(600px) rotateY(${isFlipped ? 180 : 0}deg)`,
        config: { mass: 5, tension: 500, friction: 80 },
    });
    return (
        <div
            style={{ position: 'relative', width: '58px', height: '79px' }}
            onClick={isCardRes ? () => setIsFlipped((state) => !state) : undefined}
        >
            <BaseCard color={color} style={{ opacity: opacity.interpolate((o: any) => 1 - o), transform }}>
                <Image path={isCardRes ? `${baseImagePath}/${variant}.svg` : undefined} />
            </BaseCard>
            <BaseCard back style={{ opacity, transform: transform.interpolate((t) => `${t} rotateX(180deg)`) }} />
        </div>
    );
};

export default Card;
