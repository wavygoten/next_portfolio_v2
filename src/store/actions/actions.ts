export type Action =
	| { type: "name"; payload: string }
	| { type: "email"; payload: string }
	| { type: "message"; payload: string }
	| { type: "isBurgerOpen"; payload: boolean }
	| { type: "isDark"; payload: boolean }
	| { type: "navActive"; payload: string };
