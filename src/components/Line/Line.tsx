import styled from 'styled-components';

interface LineProps {
    width: string;
    align?: 'left' | 'right';
    color?: 'primary' | 'secondary';
}

const Line = styled.span<LineProps>`
    background-color: ${({ theme, color }) =>
        color === 'primary' ? '#E9E9E9' : color === 'secondary' ? '#031D38' : theme.palette.secondary};
    display: block;
    min-width: ${({ width }) => (width === 'short' ? '9px' : '16px')};
    margin-right: ${({ width, align }) => (align === 'left' ? '16px' : null)};
    margin-left: ${({ width, align }) => (align === 'right' ? '16px' : width === 'short' ? '7px' : null)};
`;

export default Line;
