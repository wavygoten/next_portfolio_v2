import React from "react";
import Image from "next/image";
import { images } from "../../utils/images";
import Tippy from "../Utils/Tippy";
import { FadeIn } from "../Animations";
import Spotify from "./Spotify";
type Props = {
	contentRef: React.MutableRefObject<HTMLDivElement | null>;
};

const Content = ({ contentRef }: Props) => {
	return (
		<section className="content container" ref={contentRef}>
			<FadeIn className="profile">
				<div className="stack-center">
					<div className="details">
						<div className="details__subtitle">
							Hey! Welcome to my Portfolio
						</div>
						<div className="details__title">
							You can call me Ihsaan
							{/* <div className="text-gradient" style={{ marginLeft: 6 }}>
									Ihsaan
								</div>{" "} */}
						</div>
						<p className="details__description">
							I{"'"}m a software developer living in Chicago, US.
						</p>

						<p className="details__description">
							I focus on building frontend and backend applications with React
							and Typescript.
						</p>
						<div className="push-down"></div>
						<ul className="details__tooltips">
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
						</ul>
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
