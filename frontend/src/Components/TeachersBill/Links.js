import React from 'react';
// import { ReactDOM } from "react-dom";
import { Link } from "react-router-dom";
import "./Links.css";

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
    // console.log(this.state);
    return (
      <>
        {/* <nav className="Link col-md-2 this.state.show?'active':'hidden' "> */}
        <div
          // className={
          //   this.state.show ? "Link col-md-2 active" : "Link col-md-2 hidden"
          // }
          className={this.state.show ? "Link active" : "Link hidden"}
        >
          {/* <ul>
          <li> */}
          {/* <Link className="list-group-item main-nav-link" to="/director"> */}
          <Link className="rolelink" to="/director">
            Director
          </Link>
          {/* </li>
          <li> */}
          {/* <Link
            className="list-group-item main-nav-link"
            to="/committee-chairman"
          > */}
          <Link className="rolelink" to="/committee-chairman">
            Committee Chairman
          </Link>
          {/* </li>
          <li> */}
          {/* <Link className="list-group-item main-nav-link" to="/teacher">
            Teacher
          </Link> */}
          <Link className="rolelink" to="/teacher">
            Teacher
          </Link>
          {/* </li>
          <li> */}
          {/* <Link
            className="list-group-item main-nav-link"
            to="/chief-invigilator"
          >
            Chief Invigilator
          </Link> */}
          <Link className="rolelink" to="/chief-invigilator">
            Chief Invigilator
          </Link>
          {/* </li>
        </ul> */}
					{/* <div className="vr ms-auto" /> */}
				</div>
			</>
		);
	}
}

export default Links;
