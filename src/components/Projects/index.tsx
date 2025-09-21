import { MutableRefObject, useState, useEffect, Children } from "react";
import Image from "next/image";
import { images } from "../../utils/images";
import { FadeIn } from "../Animations";
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
										</div>
										{/* 
										<div className="center-image">
											<Image
												src={
													i == 0
														? images.tswebapp
														: i == 1
														? images.loginpage
														: images.vaccineradar
												}
												width={360}
												height={180}
												alt="ts-web"
											/>
										</div> */}
									</div>
								</a>
							);
						})
					) : (
						<>
							<p>loading</p>
						</>
					)
				)}
			</FadeIn>
		</section>
	);
};

export default Projects;
