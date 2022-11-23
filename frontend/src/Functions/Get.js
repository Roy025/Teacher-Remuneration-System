import React from 'react';

export const teacher = () => {
	const Teacher = JSON.parse(localStorage.getItem('teacher'));
	console.log(Teacher);

	return Teacher;
};
