import React from "react";
import { MediumIcon, GithubIcon, LinkedInIcon } from "../Svg";
type Props = { isDark: boolean };

const Footer = ({ isDark }: Props) => {
	return (
		<footer className="footer container">
			<div className="footer-wrapper">
				<ul className="footer-list">
					<a
						href="https://ihsaan.medium.com"
						target="_blank"
						rel="noopener noreferrer"
					>
						<li className="footer-list__item">
							<MediumIcon isDark={isDark} />
						</li>
					</a>
					<a
						href="https://github.com/wavygoten"
						target="_blank"
						rel="noopener noreferrer"
					>
						<li className="footer-list__item">
							<GithubIcon isDark={isDark} />
						</li>
					</a>
					<a
						href="https://www.linkedin.com/in/ihsaanb"
						target="_blank"
						rel="noopener noreferrer"
					>
						<li className="footer-list__item">
							<LinkedInIcon isDark={isDark} />
						</li>
					</a>
				</ul>
				<ul className="footer-list">
					<a
						href="mailto:ihsaanb@gmail.com"
						target="_blank"
						rel="noopener noreferrer"
					>
						<li className="footer-list__item">
							<div className="footer-email">ihsaanb@gmail.com</div>
						</li>
					</a>
				</ul>
				<ul className="footer-list">
					<li className="footer-list__item">
						<div className="footer-title">
							Built by {"<"}Ihsaan{" />"}
						</div>
					</li>
				</ul>
			</div>
		</footer>
	);
};

export default Footer;
