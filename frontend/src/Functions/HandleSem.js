import React from 'react';

function HandleSem(child, exam, setExam) {
	let newExam = { ...exam };
	if (child.length === 6) return;
	else if (child.length === 7) {
		newExam.session = child;
		console.log(child.length);
	} else if (child.length === 3) {
		newExam.semester = child;
		console.log(child.length);
	}
	setExam(newExam);
}

export default HandleSem;
