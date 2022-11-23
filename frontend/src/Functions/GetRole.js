import React from 'react';

const GetRole = () => {
	return localStorage.getItem('role');
};

export default GetRole;
