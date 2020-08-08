import React from 'react';
import styled from 'styled-components';
import { isCard } from '../../../../helpers';

const baseImagePath = '/deck';

interface ImageProps {
    path: string | undefined;
    color?: string;
}

const BaseCard = styled('div')`
    border: 3px solid
        ${({ theme, color }) =>
            !color
                ? theme.palette.secondary
                : theme.palette[color]
                ? theme.palette[color]
                : theme.palette.common[color]};
    border-radius: 3px;
    width: 62px;
`;

const Image = styled('div')<ImageProps>`
    padding-top: 140%;
    background: ${({ path, theme }) => (path != undefined ? `url(${path})` : theme.palette.background)};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`;

interface CardProps {
    variant?: string;
    color?: string;
}

const Card = ({ variant, color }: CardProps) => {
    return (
        <BaseCard color={color}>
            <Image path={isCard(variant) ? `${baseImagePath}/${variant}.svg` : undefined} />
        </BaseCard>
    );
};

export default Card;
