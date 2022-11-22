import React from 'react';
// import { ReactDOM } from "react-dom";
import { Link } from 'react-router-dom';
import GetRole from '../../Functions/GetRole';
import './Links.css';

class Links extends React.Component {
	role = GetRole();
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
	director = () => {
		if (this.role === 'Director') {
			<>
				<Link
					className="rolelink"
					to="/director">
					Director
				</Link>
				;
			</>;
		}
	};
	render() {
		return (
			<>
				<div className={this.state.show ? 'Link active' : 'Link hidden'}>
					{this.director}
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
