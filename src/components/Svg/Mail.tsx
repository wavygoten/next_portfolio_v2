import React from "react";
type Props = { isDark: boolean };

const Mail = ({ isDark, ...props }: Props) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={36}
			height={36}
			viewBox="0 0 507.9 507.9"
			fill={isDark ? "#fff " : "#0F0F0F"}
		>
			<path d="M465.7 84.45H42.3c-23.3 0-42.3 19-42.3 42.4v254.3c0 23.3 19 42.3 42.3 42.3h423.3c23.3 0 42.3-19 42.3-42.3v-254.3c.1-23.4-18.9-42.4-42.2-42.4m-11.4 28.3-200.4 169.1-200.2-169.1zm-426.1 265v-249.6L177 253.75zm23.2 17.4 147.5-122.9 45.9 38.8c2.6 2.2 5.9 3.3 9.1 3.3s6.5-1.1 9.1-3.3l46-38.8 147.7 122.9zm428.4-17.5-148.9-123.9 148.9-125.7z"></path>
		</svg>
	);
};

export default Mail;
