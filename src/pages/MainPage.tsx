import React, { useReducer } from "react";
import { MainPageContext } from "../contexts/MainPage.context";
import { Header } from "../components";
type Props = {};

const MainPage = (props: Props) => {
	const [isBurgerOpen, toggleBurgerOpen] = useReducer((state: boolean) => {
		return !state;
	}, false);
	const [isDark, toggleDark] = useReducer((state: boolean) => {
		return !state;
	}, true);
	return (
		<MainPageContext.Provider
			value={{
				isBurgerOpen: isBurgerOpen,
				toggleBurgerOpen: toggleBurgerOpen,
				isDark: isDark,
				toggleDark: toggleDark,
			}}
		>
			<div className="theme" data-theme={isDark ? "dark" : "light"}>
				{" "}
				<div className="container">
					<Header />
				</div>
			</div>
		</MainPageContext.Provider>
	);
};

export default MainPage;
