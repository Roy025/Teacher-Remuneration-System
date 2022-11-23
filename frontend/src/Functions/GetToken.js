import React from 'react';
const GetToken = () => {
	const token = localStorage.getItem('accesstoken');
	console.log(token);

	return token;
};

export default GetToken;
