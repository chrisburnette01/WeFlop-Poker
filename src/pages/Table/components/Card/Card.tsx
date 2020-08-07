import React from 'react';
import styled from 'styled-components';
import { isCard } from '../../../../helpers';

const baseImagePath = '/deck';

interface ImageProps {
    path: string | undefined;
}

const BaseCard = styled('div')`
    border: 3px solid ${({ theme }) => theme.palette.secondary};
    border-radius: 3px;
    width: 62px;
`;

const Image = styled('div')<ImageProps>`
    padding-top: 140%;
    background: ${({ path, theme }) => path != undefined ? `url(${path})` : theme.palette.background};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`;

interface CardProps {
    variant: string;
}

const Card = ({variant}: CardProps) => {
    return (
        <BaseCard>
            <Image path={isCard(variant) ? `${baseImagePath}/${variant}.svg` : undefined} />
        </BaseCard>
    );
};

export default Card;
