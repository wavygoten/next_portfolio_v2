import React from "react";
import { MediumIcon, GithubIcon, DevtoIcon } from "../Svg";
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
						href="https://dev.to/ihsaan"
						target="_blank"
						rel="noopener noreferrer"
					>
						<li className="footer-list__item">
							<DevtoIcon isDark={isDark} />
						</li>
					</a>
				</ul>
				<ul className="footer-list">
					<a
						href="mailto:ihsaan.b@yahoo.com"
						target="_blank"
						rel="noopener noreferrer"
					>
						<li className="footer-list__item">
							<div className="footer-email">ihsaan.b@yahoo.com</div>
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
