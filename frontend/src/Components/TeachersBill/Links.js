import React from "react";
// import { ReactDOM } from "react-dom";
import { Link } from "react-router-dom";

class Links extends React.Component {
  constructor() {
    super();
    this.state = {
      show: true,
      scrollPos: 0,
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  handleScroll = () => {
    // console.log(document.body.getBoundingClientRect());
    this.setState({
      scrollPos: document.body.getBoundingClientRect().top,
      show: document.body.getBoundingClientRect().top > this.state.scrollPos,
    });
  };

  render() {
    console.log(this.state);
    return (
      <>
        {/* <nav className="Link col-md-2 this.state.show?'active':'hidden' "> */}
        <div
          className={
            this.state.show ? "Link col-md-2 active" : "Link col-md-2 hidden"
          }
        >
          {/* <ul>
          <li> */}
          <Link className="list-group-item main-nav-link" to="/director">
            Director
          </Link>
          {/* </li>
          <li> */}
          <Link
            className="list-group-item main-nav-link"
            to="/committee-chairman"
          >
            Committee Chairman
          </Link>
          {/* </li>
          <li> */}
          <Link className="list-group-item main-nav-link" to="/teacher">
            Teacher
          </Link>
          {/* </li>
          <li> */}
          <Link
            className="list-group-item main-nav-link"
            to="/chief-invigilator"
          >
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
