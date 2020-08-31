import React from 'react';
import styled from 'styled-components';

interface LineProps {
    type: 'horizontal' | 'vertical';
    lineBottom?: boolean;
    lineTop?: boolean;
}

const Line = styled.div<LineProps>`
    width: ${({ type }) => (type === 'vertical' ? '1.6rem' : '2.4rem')};
    height: ${({ type }) => (type === 'vertical' ? '2.4rem' : '1.6rem')};
    border-radius: 0.2rem;
    background-color: ${({ theme }) => theme.palette.secondary};
    margin: ${({ lineTop, lineBottom }) =>
        lineTop && lineBottom ? 0 : lineBottom ? '0 0 2.4rem 0' : lineTop ? '2.4rem 0 0 0' : 0};
`;

interface BaseDividerProps {
    rightContent?: JSX.Element;
    leftContent?: JSX.Element;
    margin?: string;
}

const BaseDivider = styled.div<BaseDividerProps>`
    .rect-divider {
        height: 3.2rem;
        width: 3.2rem;
        margin: 0.6rem;
        background-color: ${({ theme }) => theme.palette.secondary};
        border-radius: 0.2rem;
    }
    .vertical-lines-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .horizontal-lines-wrapper {
        display: flex;
        align-items: center;
    }
`;

interface DividerProps {
    lineLeft?: boolean;
    lineRight?: boolean;
    lineTop?: boolean;
    lineBottom?: boolean;
    rightContent?: JSX.Element;
    leftContent?: JSX.Element;
    className?: string;
    margin?: string;
    topContent?: JSX.Element;
}

const Divider = ({
    lineLeft,
    lineRight,
    lineTop,
    lineBottom,
    rightContent,
    leftContent,
    topContent,
    className,
    margin,
}: DividerProps) => {
    return (
        <BaseDivider rightContent={rightContent} leftContent={leftContent} className={className} margin={margin}>
            <div className="horizontal-lines-wrapper">
                {leftContent || (lineLeft && <Line type="horizontal" lineTop={lineTop} lineBottom={lineBottom} />)}
                <div className="vertical-lines-wrapper">
                    {topContent || (lineTop && <Line type="vertical" />)}
                    <div className="rect-divider" />
                    {lineBottom && <Line type="vertical" />}
                </div>
                {rightContent || (lineRight && <Line type="horizontal" lineTop={lineTop} lineBottom={lineBottom} />)}
            </div>
        </BaseDivider>
    );
};

export default Divider;
