import React from 'react';

const GetRole = () => {
	const role = localStorage.getItem('role');
	console.log(role);

	return role;
};

export default GetRole;
