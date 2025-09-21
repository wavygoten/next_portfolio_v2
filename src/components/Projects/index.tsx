import { MutableRefObject, useState, useEffect, Children } from "react";
import Image from "next/image";
import { images } from "../../utils/images";
import { FadeIn } from "../Animations";
import Tippy from "../Utils/Tippy";

type Props = {
	projectsRef: React.MutableRefObject<HTMLDivElement | null>;
};

const Projects = ({ projectsRef }: Props) => {
	const [data, setData] = useState([]);

	useEffect(() => {
		fetch("/api/projects")
			.then((res) => res.json())
			.then((data) => {
				setData(data.data);
			});
	}, []);

	return (
		<section className="projects container" ref={projectsRef}>
			<FadeIn className="projects__wrapper">
				<div className="stack-center">
					<div className="projects__title">Projects</div>
				</div>
				{Children.toArray(
					data?.length > 0 ? (
						data?.map((v: any, i: number) => {
							return (
								<a
									href={v.link}
									target="_blank"
									rel="noopener noreferrer"
									key={i}
								>
									<div className="projects__project">
										<div className="v-stack">
											<div className="project__title">{v.title}</div>
											<p className="project__subtitle">{v.message}</p>
											{i == 0 ? (
												<>
													<ul className="details__tooltips stack">
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
														<Tippy label="PostgreSQL">
															<li className="details__tooltip">
																<Image
																	src={images.postgresql}
																	width={24}
																	height={24}
																	alt="postgresql-icon"
																/>
															</li>
														</Tippy>
														<Tippy label="TailwindCSS">
															<li className="details__tooltip">
																<Image
																	src={images.tailwind}
																	width={24}
																	height={24}
																	alt="tailwind-icon"
																/>
															</li>
														</Tippy>
													</ul>
												</>
											) : i == 1 ? (
												<>
													<ul className="details__tooltips stack">
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
													</ul>
												</>
											) : i == 3 ? (
												<ul className="details__tooltips stack">
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
													<Tippy label="Ethers">
														<li className="details__tooltip">
															<Image
																src={images.ethers}
																width={24}
																height={24}
																alt="ethers-icon"
															/>
														</li>
													</Tippy>
												</ul>
											) : i == 2 ? (
												<ul className="details__tooltips stack">
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
													<Tippy label="MongoDB">
														<li className="details__tooltip">
															<Image
																src={images.mongodb}
																width={24}
																height={24}
																alt="mongodb-icon"
															/>
														</li>
													</Tippy>
												</ul>
											) : i == 4 ? (
												<>
													<ul className="details__tooltips stack">
														<Tippy label="Java">
															<li className="details__tooltip">
																<Image
																	src={images.java}
																	width={24}
																	height={24}
																	alt="java-icon"
																/>
															</li>
														</Tippy>
														<Tippy label="Maven">
															<li className="details__tooltip">
																<Image
																	src={images.maven}
																	width={24}
																	height={24}
																	alt="maven-icon"
																/>
															</li>
														</Tippy>
													</ul>
												</>
											) : (
												<></>
											)}
										</div>
									</div>
								</a>
							);
						})
					) : (
						<>
							<div className="projects__project">
								<div className="v-stack">
									<div className="skeleton-content"></div>
								</div>
							</div>
						</>
					)
				)}
			</FadeIn>
		</section>
	);
};

export default Projects;
