import React from "react";
import { FadeIn } from "../Animations";

type Props = {
	handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
	handleChange: (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => void;
	isError: boolean;
	isLoading: boolean;
	response: string | undefined;
	contactRef: React.MutableRefObject<HTMLDivElement | null>;
};

const Contact = ({
	handleSubmit,
	handleChange,
	isError,
	isLoading,
	response,
	contactRef,
}: Props) => {
	return (
		<section className="contact container" ref={contactRef}>
			<FadeIn className="contact-wrapper">
				<div className="contact-title">Contact</div>
				<form action="" className="contact-form" onSubmit={handleSubmit}>
					<div className="form-group">
						<input
							type="text"
							name="name"
							placeholder="Name"
							onChange={handleChange}
						/>
						<input
							type="email"
							name="email"
							placeholder="Email"
							onChange={handleChange}
						/>
						{response && <p>{response}</p>}
					</div>
					<div className="form-group">
						<textarea
							name="message"
							rows={14}
							cols={10}
							wrap="soft"
							placeholder="Message..."
							onChange={handleChange}
						/>
					</div>
					<div className="form-group">
						<button
							className="contact-submit"
							type="submit"
							disabled={isLoading}
						>
							{isLoading
								? "Sending..."
								: isError
								? "Error Sending"
								: "Send Message"}
						</button>
					</div>
				</form>
			</FadeIn>
		</section>
	);
};

export default Contact;
