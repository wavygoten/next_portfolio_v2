import React from "react";
import Image from "next/image";
import { images } from "../../utils/images";
import Tippy from "../Utils/Tippy";
import { FadeIn } from "../Animations";
import Spotify from "./Spotify";
type Props = {
	contentRef: React.MutableRefObject<HTMLDivElement | null>;
	handleScrollClick: (link: string) => void;
};

const Content = ({ contentRef, handleScrollClick }: Props) => {
	return (
		<section className="content container" ref={contentRef}>
			<FadeIn className="profile">
				<div className="stack-center">
					<div className="details">
						<div className="details__subtitle">
							Hey! Welcome to my Portfolio
						</div>
						<div className="details__title">You can call me Ihsaan</div>
						<p className="details__description">
							I{"'"}m an aspiring software engineer living in Chicago, IL.
						</p>

						<p className="details__description">
							I am currently studying computer science and have a passion for
							building and creating anything tech related.
						</p>
						<p className="details__description">Feel free to look around.</p>
						<div
							style={{
								display: "flex",
								flexFlow: "row wrap",
								justifyContent: "center",
								alignItems: "center",
							}}
							className="details__description"
						>
							<p className="details__desc__sub">
								If you would like to reach me, send me a message
							</p>
							<button
								className="details__button"
								onClick={() => handleScrollClick("contact")}
							>
								Contact
							</button>
						</div>

						<div className="push-down"></div>
						{/* <ul className="details__tooltips">
							<Tippy label="NextJS">
								<li className="details__tooltip">
									<Image
										src={images.nextjs}
										width={24}
										height={24}
										alt="nextjs-icon"
									/>
								</li>
							</Tippy>
							<Tippy label="ReactJS">
								<li className="details__tooltip">
									<Image
										src={images.reactjs}
										width={24}
										height={24}
										alt="reactjs-icon"
									/>
								</li>
							</Tippy>
							<Tippy label="Typescript">
								<li className="details__tooltip">
									<Image
										src={images.typescript}
										width={24}
										height={24}
										alt="typescript-icon"
									/>
								</li>
							</Tippy>
							<Tippy label="Javascript">
								<li className="details__tooltip">
									<Image
										src={images.javascript}
										width={24}
										height={24}
										alt="javascript-icon"
									/>
								</li>
							</Tippy>
							<Tippy label="HTML">
								<li className="details__tooltip">
									<Image
										src={images.html5}
										width={24}
										height={24}
										alt="html5-icon"
									/>
								</li>
							</Tippy>
							<Tippy label="CSS">
								<li className="details__tooltip">
									<Image
										src={images.css3}
										width={24}
										height={24}
										alt="css3-icon"
									/>
								</li>
							</Tippy>
							<Tippy label="SCSS/SASS">
								<li className="details__tooltip">
									<Image
										src={images.scss}
										width={24}
										height={24}
										alt="scss-icon"
									/>
								</li>
							</Tippy>{" "}
							<Tippy label="Emotion CSS">
								<li className="details__tooltip">
									<Image
										src={images.emotion}
										width={24}
										height={24}
										alt="emotion-icon"
									/>
								</li>
							</Tippy>{" "}
							<Tippy label="Styled Components ">
								<li className="details__tooltip">
									<Image
										src={images.styledcomponents}
										width={24}
										height={24}
										alt="sc-icon"
									/>
								</li>
							</Tippy>{" "}
						</ul> */}
						{/* <div className="details__spotify">
							<Spotify />
						</div> */}
					</div>
					{/* <div className="hero-img"></div> */}
				</div>
			</FadeIn>
		</section>
	);
};

export default Content;
