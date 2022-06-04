import React, { createContext } from "react";

type MainPageContextProps = {
	isBurgerOpen: boolean;
	toggleBurgerOpen: React.DispatchWithoutAction;
	isDark: boolean;
	toggleDark: React.DispatchWithoutAction;
};

const initialValues = {};

export const MainPageContext = createContext<MainPageContextProps>(
	initialValues as MainPageContextProps
);
