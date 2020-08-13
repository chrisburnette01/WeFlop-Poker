import React from 'react';
import styled from 'styled-components';

interface LineProps {
    type: 'horizontal' | 'vertical';
    lineLeft?: boolean;
    lineRight?: boolean;
}

const Line = styled.div<LineProps>`
    width: ${({ type }) => (type === 'vertical' ? '16px' : '24px')};
    height: ${({ type }) => (type === 'vertical' ? '24px' : '16px')};
    border-radius: 2px;
    background-color: ${({ theme }) => theme.palette.secondary};
    margin: ${({ lineLeft, lineRight }) =>
        lineRight && lineLeft ? 0 : lineRight ? '0 24px 0 0' : lineLeft ? '0 0 0 24px' : 0};
`;

interface BaseDividerProps {
    rightContent?: JSX.Element;
    leftContent?: JSX.Element;
    margin?: string;
}

const BaseDivider = styled.div<BaseDividerProps>`
    .rect-divider {
        height: 32px;
        width: 32px;
        margin: ${({ margin, leftContent, rightContent }) =>
            margin ? margin : !leftContent && !rightContent ? '12px' : '6px'};
        background-color: ${({ theme }) => theme.palette.secondary};
        border-radius: 2px;
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
}

const Divider = ({
    lineLeft,
    lineRight,
    lineTop,
    lineBottom,
    rightContent,
    leftContent,
    className,
    margin,
}: DividerProps) => {
    return (
        <BaseDivider rightContent={rightContent} leftContent={leftContent} className={className} margin={margin}>
            <div className="vertical-lines-wrapper">
                {lineTop && <Line type="vertical" lineLeft={lineLeft} lineRight={lineRight} />}
                <div className="horizontal-lines-wrapper">
                    {leftContent || (lineLeft && <Line type="horizontal" />)}
                    <div className="rect-divider" />
                    {rightContent || (lineRight && <Line type="horizontal" />)}
                </div>
                {lineBottom && <Line type="vertical" lineLeft={lineLeft} lineRight={lineRight} />}
            </div>
        </BaseDivider>
    );
};

export default Divider;
