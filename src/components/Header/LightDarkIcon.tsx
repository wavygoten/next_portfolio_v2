import React, { useContext } from "react";
import { AppContext } from "../../store/context";
import { MoonIcon, SunIcon } from "../Svg";
const LightDarkIcon = () => {
	const { state, dispatch } = useContext(AppContext);
	return (
		<div
			className="theme-icon"
			onClick={() => {
				dispatch({ type: "isDark", payload: state.isDark });
			}}
		>
			{state.isDark ? (
				<MoonIcon isDark={state.isDark} />
			) : (
				<SunIcon isDark={state.isDark} />
			)}
		</div>
	);
};

export default LightDarkIcon;
