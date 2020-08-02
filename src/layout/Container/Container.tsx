import React from 'react';
import styled from 'styled-components';
import './index.scss';

const Container = ({ children }) => {
	return (
		<div className="container">
			{ children }
		</div>
	);
}

export default Container;
