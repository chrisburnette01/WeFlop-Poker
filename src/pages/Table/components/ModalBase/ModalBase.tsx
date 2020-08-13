import React from 'react';
import styled from 'styled-components';

interface ModalBaseProps {
    className?: string;
    children: JSX.Element | JSX.Element[];
}

const ModalBase = ({ className, children }: ModalBaseProps) => {
    return <div className={className}>{children}</div>;
};

export default styled(ModalBase)`
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: rgba(3, 24, 45, 0.8);
    top: 0;
    left: 0;
    z-index: 5;
    display: flex;
    justify-content: center;
`;
