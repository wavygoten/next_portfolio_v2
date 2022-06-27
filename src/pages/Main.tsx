import React, { FC, Fragment, useContext, useRef, useEffect } from "react";
import { AppContext } from "../store/context";
import {
	Header,
	Content,
	Projects,
	Library,
	Contact,
	Footer,
} from "../components";
import { useScrollTo } from "../hooks";
import { trpc } from "../utils/trpc";
type Props = {};

const Main: FC<Props> = () => {
	const { state, dispatch } = useContext(AppContext);
	const mutationContact = trpc.useMutation(["contact"]);
	const ContentRef = useRef<null | HTMLDivElement>(null);
	const ProjectsRef = useRef<null | HTMLDivElement>(null);
	const ContactRef = useRef<null | HTMLDivElement>(null);
	const [setShouldScrollContent] = useScrollTo(ContentRef);
	const [setShouldScrollProject] = useScrollTo(ProjectsRef);
	const [setShouldScrollContact] = useScrollTo(ContactRef);

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
				<Content contentRef={ContentRef} />
				<Projects projectsRef={ProjectsRef} />
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

export default Main;
