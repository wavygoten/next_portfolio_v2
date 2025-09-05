import React, {
	FC,
	Fragment,
	useContext,
	useRef,
	useEffect,
	ButtonHTMLAttributes,
} from "react";
import { AppContext } from "../store/context";
import {
	Header,
	Content,
	Projects,
	Experience,
	Contact,
	Footer,
} from "../components";
import { useScrollTo } from "../hooks";
import { trpc } from "../utils/trpc";
import dynamic from "next/dynamic";
type Props = {};

const Main: FC<Props> = () => {
	const { state, dispatch } = useContext(AppContext);
	const mutationContact = trpc.useMutation(["contact"]);
	const ContentRef = useRef<null | HTMLDivElement>(null);
	const ProjectsRef = useRef<null | HTMLDivElement>(null);
	const ContactRef = useRef<null | HTMLDivElement>(null);
	const ExperienceRef = useRef<null | HTMLDivElement>(null);
	const [setShouldScrollContent] = useScrollTo(ContentRef);
	const [setShouldScrollProject] = useScrollTo(ProjectsRef);
	const [setShouldScrollContact] = useScrollTo(ContactRef);
	const [setShouldScrollExperience] = useScrollTo(ExperienceRef);

	const handleScrollClick = (link: string) => {
		if (link === "profile") {
			return setShouldScrollContent(true);
		}
		if (link === "projects") {
			return setShouldScrollProject(true);
		}
		if (link === "contact") {
			return setShouldScrollContact(true);
		}
		if (link == "experience") {
			return setShouldScrollExperience(true);
		}
	};

	const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
		e.preventDefault();
		mutationContact.mutate({
			name: state.name,
			email: state.email,
			message: state.message,
		});
		if (mutationContact.error) {
			console.log(mutationContact.error.message);
		} else {
			console.log(mutationContact.data?.success);
		}
	};

	const handleJobDescClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
		e.preventDefault();
		dispatch({ type: "isJobDescOpen", payload: !state.isJobDescOpen });
	};

	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	): void => {
		e.preventDefault();
		switch (e.target.name) {
			case "name":
				dispatch({ type: "name", payload: e.target.value });
			case "email":
				dispatch({ type: "email", payload: e.target.value });
			case "message":
				dispatch({ type: "message", payload: e.target.value });
		}
	};

	return (
		<Fragment>
			<div className="theme" data-theme={state.isDark ? "dark" : "light"}>
				<Header handleScrollClick={handleScrollClick} />
				<Content
					contentRef={ContentRef}
					handleScrollClick={handleScrollClick}
				/>
				<div className="about_me container">
					<Experience
						experienceRef={ExperienceRef}
						// handleJobDescClick={handleJobDescClick}
					/>
					<Projects projectsRef={ProjectsRef} />
				</div>

				<Contact
					contactRef={ContactRef}
					handleSubmit={handleFormSubmit}
					handleChange={handleInputChange}
					isError={mutationContact.isError}
					isLoading={mutationContact.isLoading}
					response={mutationContact.data?.message}
				/>
				<Footer isDark={state.isDark} />
			</div>
		</Fragment>
	);
};

// export default Main;

export default dynamic(() => Promise.resolve(Main), { ssr: false });
