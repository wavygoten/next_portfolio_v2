import React, { useReducer } from "react";

type Props = {};

const Header = (props: Props) => {
	const [isOpen, toggleBurgerOpen] = useReducer((state: boolean) => {
		return !state;
	}, false);
	return (
		<header>
			<nav className="nav">
				<div className="push-right" />
				<ul className="nav-items">
					<li className="nav__item">Profile</li>
					<li className="nav__item">Projects</li>
					<li className="nav__item">Library</li>
					<li className="nav__item">About</li>
				</ul>
				<div className="nav-mobile" onClick={toggleBurgerOpen}>
					<ul
						className="burger"
						aria-roledescription={isOpen ? "open" : "closed"}
					>
						<li className="burgers"></li>
						<li className="burgers"></li>
						<li className="burgers"></li>
					</ul>

					<ul className="nav-mobile-menu">
						<li className="mobile-menu__items">Profile</li>
						<li className="mobile-menu__items">Projects</li>
						<li className="mobile-menu__items">Library</li>
						<li className="mobile-menu__items">About</li>
					</ul>
				</div>
			</nav>
		</header>
	);
};

export default Header;
