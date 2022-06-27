import React, { createContext, FC, ReactNode, useReducer } from "react";
import { initialValue } from "./states/default";
import { reducer } from "./reducers/reducers";
import { Action } from "./actions/actions";

type ProviderProps = {
	children: ReactNode;
};

const AppContext = createContext<{
	state: typeof initialValue;
	dispatch: React.Dispatch<Action>;
}>({
	state: initialValue,
	dispatch: () => null,
});

const AppProvider: FC<ProviderProps> = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialValue);
	return (
		<AppContext.Provider value={{ state, dispatch }}>
			{children}
		</AppContext.Provider>
	);
};
export { AppContext, AppProvider };
