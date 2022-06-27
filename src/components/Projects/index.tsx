import React from "react";
import Image from "next/image";
import { images } from "../../utils/images";
import { FadeIn } from "../Animations";
type Props = {
	projectsRef: React.MutableRefObject<HTMLDivElement | null>;
};
const Projects = ({ projectsRef }: Props) => {
	return (
		<section className="projects container" ref={projectsRef}>
			<FadeIn className="projects__wrapper">
				<div className="stack-center">
					<div className="projects__title">Projects</div>
				</div>
				<a
					href="https://traitsurfer.app"
					target="_blank"
					rel="noopener noreferrer"
				>
					<div className="projects__project">
						<div className="v-stack">
							<div className="project__title">
								Trait Surfer App (Web App + Google Extension)
							</div>
							<p className="project__subtitle">
								Traitsurfer is an app that calculates and displays NFT rarity
								ranks. The extension provides easy accessibility to the ranks on
								NFT platforms such as Opensea, LooksRare, and more.
							</p>
						</div>

						<div className="center-image">
							<Image
								src={images.tswebapp}
								width={360}
								height={180}
								alt="ts-web"
							/>
						</div>
					</div>
				</a>
				<a
					href="https://github.com/wavygoten/MERN-session-auth/tree/master"
					target="_blank"
					rel="noopener noreferrer"
				>
					<div className="projects__project">
						<div className="v-stack">
							<div className="project__title">
								MERN Session Auth (Login + Register + Reset Password +
								Dashboard)
							</div>
							<p className="project__subtitle">
								For this project, I utilized the MERN stack which allows full
								authentication control from frontend to backend systems. This
								uses express-session in the backend server to retain session
								control within the frontend.
							</p>
						</div>
						<div className="center-image">
							<Image
								src={images.loginpage}
								width={200}
								height={220}
								alt="mern-web"
							/>
						</div>
					</div>
				</a>
				<a
					href="https://github.com/wavygoten/vaccine-finder"
					target="_blank"
					rel="noopener noreferrer"
				>
					<div className="projects__project">
						<div className="v-stack">
							<div className="project__title">Vaccine Radar/Finder</div>
							<p className="project__subtitle">
								A project I made to find the nearest in stock COVID-19 vaccine.
								All you have to do is enter your zip code and it will pull up
								the nearest pharmacies and their info based on approximity.
							</p>
						</div>
						<div className="center-image">
							<Image
								src={images.vaccineradar}
								width={360}
								height={180}
								alt="vr-web"
							/>
						</div>
					</div>
				</a>
			</FadeIn>
		</section>
	);
};

export default Projects;
