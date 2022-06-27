import React from "react";

type Props = { isDark: boolean };

const MoonIcon = ({ isDark, ...props }: Props) => {
	return (
		<svg
			className="svg-icon"
			stroke="currentColor"
			fill="currentColor"
			viewBox="0 0 20 20"
			color={isDark ? "#fff" : "#000"}
			height={24}
			width={24}
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path d="M17.293 13.293A8 8 0 0 1 6.707 2.707a8.001 8.001 0 1 0 10.586 10.586z" />
		</svg>
	);
};

export default MoonIcon;
