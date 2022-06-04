import React, { useContext } from "react";
import Image from "next/image";
import { MainPageContext } from "../../contexts/MainPage.context";
import { MoonIcon, SunIcon } from "../Svg";
const LightDarkIcon = () => {
	const { isDark, toggleDark } = useContext(MainPageContext);
	return (
		<div className="theme-icon" onClick={toggleDark}>
			{isDark ? <MoonIcon isDark={isDark} /> : <SunIcon isDark={isDark} />}
		</div>
	);
};

export default LightDarkIcon;
