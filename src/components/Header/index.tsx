import React, { useReducer, useContext } from "react";
import { MainPageContext } from "../../contexts/MainPage.context";
import LightDarkIcon from "./LightDarkIcon";
type Props = {};

const Header = ({}: Props) => {
	const { isBurgerOpen, toggleBurgerOpen } = useContext(MainPageContext);
	return (
		<header>
			<nav className="nav">
				<LightDarkIcon />
				<span className="push-right" />
				<ul className="nav-items">
					<li className="nav-items__item">Profile</li>
					<li className="nav-items__item">Projects</li>
					<li className="nav-items__item">Library</li>
					<li className="nav-items__item">About</li>
				</ul>
				<div className="nav-mobile">
					<ul
						className="nav-burger"
						id={isBurgerOpen ? "burger-open" : "burger-closed"}
						onClick={toggleBurgerOpen}
					>
						<li className="nav-burger__item"></li>
						<li className="nav-burger__item"></li>
						<li className="nav-burger__item"></li>
					</ul>
					<ul className="nav-mobile-menu" id={isBurgerOpen ? "" : "collapsed"}>
						<li className="nav-mobile-menu__item">Profile</li>
						<li className="nav-mobile-menu__item">Projects</li>
						<li className="nav-mobile-menu__item">Library</li>
						<li className="nav-mobile-menu__item">About</li>
					</ul>
				</div>
			</nav>
		</header>
	);
};

export default Header;
