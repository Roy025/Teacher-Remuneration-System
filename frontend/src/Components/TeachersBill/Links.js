import React from 'react';
// import { ReactDOM } from "react-dom";
import { Link } from 'react-router-dom';
import { teacher } from '../../Functions/Get';

import './Links.css';
function DirectorLink() {
	return (
		<Link
			className="rolelink"
			to="/director">
			Director
		</Link>
	);
}
const teachers = teacher();
class Links extends React.Component {
	constructor() {
		super();
		this.state = {
			show: true,
			scrollPos: 0,
		};
	}
	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll);
	}
	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
	}
	handleScroll = () => {
		// console.log(document.body.getBoundingClientRect());
		this.setState({
			scrollPos: document.body.getBoundingClientRect().top,
			show: document.body.getBoundingClientRect().top > this.state.scrollPos,
		});
	};

	render() {
		console.log(teachers.role);
		let director;
		if (teachers.role === 'Director') {
			director = <DirectorLink />;
		}
		return (
			<>
				<div className={this.state.show ? 'Link active' : 'Link hidden'}>
					{director}

					<Link
						className="rolelink"
						to="/committee-chairman">
						Committee Chairman
					</Link>
					<Link
						className="rolelink"
						to="/teacher">
						Teacher
					</Link>
					<Link
						className="rolelink"
						to="/chief-invigilator">
						Chief Invigilator
					</Link>
				</div>
			</>
		);
	}
}

export default Links;
