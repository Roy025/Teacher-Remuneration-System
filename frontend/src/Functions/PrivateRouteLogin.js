import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import GetToken from './GetToken';

const PrivateRouteLogin = (props) => {
	const { Component } = props;
	const navigate = useNavigate();
	useEffect(() => {
		const token = GetToken();
		if (!token) {
			navigate('/');
		}
	});

	return <Component />;
};

export default PrivateRouteLogin;
