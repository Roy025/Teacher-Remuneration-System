import React from 'react';
import { Link } from 'react-router-dom';

const Links = () => {
	return (
		<div className="Link col-md-3">
			<ul>
				<li>
					<Link
						class="list-group-item main-nav-link"
						to="/director">
						Director
					</Link>
				</li>
				<li>
					<Link
						class="list-group-item main-nav-link"
						to="/committee-chairman">
						Committee Chairman
					</Link>
				</li>
				<li>
					<Link
						class="list-group-item main-nav-link"
						to="/teacher">
						Teacher
					</Link>
				</li>
				<li>
					<Link
						class="list-group-item main-nav-link"
						to="/chief-invigilator">
						Chief Invigilator
					</Link>
				</li>
			</ul>
			<div className="vr ms-auto" />
		</div>
	);
};

export default Links;
