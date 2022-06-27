import React from "react";
type Props = {};

const Library = (props: Props) => {
	return (
		<section className="library container">
			<div className="library-wrapper">
				<div className="stack-center">
					<div className="library__title">Library</div>
				</div>
				<div className="library__repos">
					<div className="library__repo">
						<div className="repo__title">
							<div className="repo__title-icon"></div>
							<div className="repo__title-title">MERN-session-auth</div>
						</div>
						<div className="repo__description">desc</div>
						<div className="repo__details">
							<div className="repo__detail">.</div>
							<div className="repo__detail">Typescript</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Library;
