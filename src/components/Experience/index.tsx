import { useState, useEffect, useContext, Children } from "react";
import { FadeIn } from "../Animations";
import { Knowles, Latan, UIC } from "../Svg";
type Props = {
	experienceRef: React.MutableRefObject<HTMLDivElement | null>;
};

const Experience = ({ experienceRef }: Props) => {
	const [data, setData] = useState([]);
	useEffect(() => {
		fetch("/api/experience")
			.then((res) => res.json())
			.then((data) => {
				setData(data.data);
			});
	}, []);

	return (
		<section className="experience container" ref={experienceRef}>
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
							<div className="experiences__experience">
								<div className="skeleton-content"></div>
							</div>
						</>
					)
				)}
			</FadeIn>
		</section>
	);
};

export default Experience;
