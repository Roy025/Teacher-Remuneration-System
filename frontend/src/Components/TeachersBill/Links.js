import React from 'react';

const Links = () => {
	return (
		<div className="Link col-md-3">
			<ul>
				<li>
					<a
						class="list-group-item main-nav-link"
						href="/director">
						Director
					</a>
				</li>
				<li>
					<a
						class="list-group-item main-nav-link"
						href="/committee-member">
						Committee Member
					</a>
				</li>
				<li>
					<a
						class="list-group-item main-nav-link"
						href="/teacher">
						Teacher
					</a>
				</li>
				<li>
					<a
						class="list-group-item main-nav-link"
						href="/chief-invigilator">
						Chief Invigilator
					</a>
				</li>
			</ul>
			<div className="vr ms-auto" />
		</div>
	);
};

export default Links;
