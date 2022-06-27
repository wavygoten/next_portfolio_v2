import { initialValue } from "../states/default";
import { Action } from "../actions/actions";

export const reducer = (
	state: typeof initialValue,
	{ type, payload }: Action
) => {
	switch (type) {
		case "name":
			return { ...state, name: payload };
		case "email":
			return { ...state, email: payload };
		case "message":
			return { ...state, message: payload };
		case "isBurgerOpen":
			return { ...state, isBurgerOpen: !state.isBurgerOpen };
		case "isDark":
			return {
				...state,
				isDark: !state.isDark,
			};
		case "navActive":
			return {
				...state,
				navActive: payload,
			};
		default:
			throw new Error(`Unknown action type ${type}`);
	}
};
