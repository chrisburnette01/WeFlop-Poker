import React from 'react';
import styled from 'styled-components';

interface ContainerProps {
    children: JSX.Element | JSX.Element[] | null;
    className?: string;
    type?: 'table' | 'initial';
}

interface BaseContainerProps {
	type: 'table' | 'initial';
}

const BaseContainer = styled('div')<BaseContainerProps>`
	height: 100vh;
    padding: ${({type}) => type === 'initial' ? '60px' : '120px 100px 0 100px'};
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
`;

const Container = ({ children, className, type }: ContainerProps) => {
    return (
    	<BaseContainer className={className} type={type!}>
	    	{children}
	   	</BaseContainer>
	);
};

Container.defaultProps = {
	type: 'initial'
}

export default Container;
