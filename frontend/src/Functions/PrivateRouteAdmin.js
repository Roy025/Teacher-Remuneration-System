import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import GetRole from './GetRole';
import GetToken from './GetToken';

const PrivateRouteAdmin = (props) => {
	const { Component } = props;
	const navigate = useNavigate();
	useEffect(() => {
		const role = GetRole();
		const token = GetToken();
		console.log(role);
		if (role !== 'Admin' && token) {
			navigate('/home');
		} else if (!token) {
			navigate('/');
		}
	});

	return <Component />;
};
export default PrivateRouteAdmin;
