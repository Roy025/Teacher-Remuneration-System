import React, { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import DirectorsBill from '../Components/TeachersBill/DirectorsBill';
import GetRole from './GetRole';
import GetToken from './GetToken';

const PrivateRouteDirector = (props) => {
	const { Component } = props;
	const navigate = useNavigate();
	useEffect(() => {
		const role = GetRole();
		const token = GetToken();
		console.log(role);
		if (role !== 'Director' && token) {
			navigate('/home');
		} else if (!token) {
			navigate('/');
		}
	});

	return <Component />;
};

export default PrivateRouteDirector;
