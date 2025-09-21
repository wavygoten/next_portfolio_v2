import { useState, useEffect, useContext, Children } from "react";
import { FadeIn } from "../Animations";
import { AppContext } from "../../store/context";
import { Knowles, Latan, UIC } from "../Svg";
type Props = {
	experienceRef: React.MutableRefObject<HTMLDivElement | null>;
	// handleJobDescClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const Experience = ({ experienceRef }: Props) => {
	const [data, setData] = useState([]);
	useEffect(() => {
		fetch("/api/experience")
			.then((res) => res.json())
			.then((data) => {
				// console.log(data);
				setData(data.data);
			});
	}, []);

	return (
		<section className="experience" ref={experienceRef}>
			<FadeIn className="experience-wrapper">
				<div className="stack-center">
					<div className="experience__title">Experience</div>
				</div>

				{Children.toArray(
					data?.length > 0 ? (
						data?.map((v: any, i: number) => {
							return (
								<div key={i}>
									<div className="experiences__experience">
										{i == 0 ? <Knowles /> : i == 1 ? <UIC /> : <Latan />}
										<div className="v-stack experience-container">
											<div className="v-stack">
												<div className="stack">
													<div className="experience_title">{v.title}</div>
													<span className="push-right"></span>
													<div className="experience__subtitle">
														{v.datefrom} - {v.dateto}
													</div>
												</div>
												<div className="stack">
													<div className="experience__subtitle">
														{v.company}
													</div>
													<span className="push-right"></span>
													<div className="experience__subtitle">
														{v.location}
													</div>
												</div>
											</div>
											<span className="break"></span>

											{/* <div className="v-stack experience__descriptions">
												{openJobIndex === i ? (
													<>
														{v.messages.map((element: string, j: number) => (
															<li
																key={`${i}-${j}`}
																className="experience__description"
															>
																{element}
															</li>
														))}
													</>
												) : (
													<button
														onClick={() => handleJobDescClick(i)}
														className="show__jobs_btn"
													>
														Show more
													</button>
												)}
											</div> */}

											<ul className="stack">
												{v.skills.map((element: string, k: number) => {
													return (
														<li key={`${i}+${k}`} className="experience_skill">
															{element}
														</li>
													);
												})}
											</ul>
										</div>
									</div>
								</div>
							);
						})
					) : (
						<>
							<p>loading</p>
						</>
					)
				)}
				{/* <div className="experience__repos">
					<div className="experience__repo">
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
				</div> */}
			</FadeIn>
		</section>
	);
};

export default Experience;
