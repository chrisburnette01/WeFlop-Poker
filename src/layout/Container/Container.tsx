import React from 'react';
import styled from 'styled-components';

interface ContainerProps {
    children: JSX.Element[];
    className?: string;
}

const Container = ({ children, className }: ContainerProps) => {
    return <div className={className}>{children}</div>;
};

export default styled(Container)`
    height: 100vh;
    padding: 60px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
`;
