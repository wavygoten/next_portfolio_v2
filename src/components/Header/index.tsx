import React, { useContext } from "react";
import LightDarkIcon from "./LightDarkIcon";
import { AppContext } from "../../store/context";
interface Props {
	handleScrollClick: (link: string) => void;
}
const Header = ({ handleScrollClick }: Props) => {
	const { state, dispatch } = useContext(AppContext);
	return (
		<header className="navbar container">
			<nav className="nav">
				<LightDarkIcon />
				<span className="push-right" />
				<ul className="nav-items">
					<li
						className="nav-items__item"
						onClick={() => handleScrollClick("profile")}
					>
						Profile
					</li>
					<li
						className="nav-items__item"
						onClick={() => handleScrollClick("projects")}
					>
						Projects
					</li>

					<li
						className="nav-items__item"
						onClick={() => handleScrollClick("contact")}
					>
						Contact
					</li>
					{/* <li className="nav-items__item">About</li> */}
				</ul>
				<div className="nav-mobile">
					<ul
						className="nav-burger"
						id={state.isBurgerOpen ? "burger-open" : "burger-closed"}
						onClick={() => {
							dispatch({ type: "isBurgerOpen", payload: state.isBurgerOpen });
						}}
					>
						<li className="nav-burger__item"></li>
						<li className="nav-burger__item"></li>
						<li className="nav-burger__item"></li>
					</ul>
					<ul
						className="nav-mobile-menu"
						id={state.isBurgerOpen ? "menu-open" : "menu-collapsed"}
					>
						<li
							className="nav-mobile-menu__item"
							onClick={() => handleScrollClick("profile")}
						>
							Profile
						</li>
						<li
							className="nav-mobile-menu__item"
							onClick={() => handleScrollClick("projects")}
						>
							Projects
						</li>
						<li
							className="nav-mobile-menu__item"
							onClick={() => handleScrollClick("contact")}
						>
							Contact
						</li>
						{/* <li className="nav-mobile-menu__item">About</li> */}
					</ul>
				</div>
			</nav>
			{/* <span className="nav-underline" /> */}
		</header>
	);
};

export default Header;
