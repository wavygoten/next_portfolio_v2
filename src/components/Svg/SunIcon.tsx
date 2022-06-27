import React from "react";

type Props = { isDark: boolean };

const SunIcon = ({ isDark, ...props }: Props) => {
	return (
		<svg
			className="svg-icon"
			stroke="currentColor"
			fill="currentColor"
			viewBox="0 0 24 24"
			color={isDark ? "#fff" : "#000"}
			height={24}
			width={24}
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0 2a6 6 0 1 0 0-12 6 6 0 0 0 0 12ZM11 0h2v4.062a8.079 8.079 0 0 0-2 0V0ZM7.094 5.68 4.222 2.808 2.808 4.222 5.68 7.094A8.048 8.048 0 0 1 7.094 5.68ZM4.062 11H0v2h4.062a8.079 8.079 0 0 1 0-2Zm1.618 5.906-2.872 2.872 1.414 1.414 2.872-2.872a8.048 8.048 0 0 1-1.414-1.414ZM11 19.938V24h2v-4.062a8.069 8.069 0 0 1-2 0Zm5.906-1.618 2.872 2.872 1.414-1.414-2.872-2.872a8.048 8.048 0 0 1-1.414 1.414ZM19.938 13H24v-2h-4.062a8.069 8.069 0 0 1 0 2ZM18.32 7.094l2.872-2.872-1.414-1.414-2.872 2.872c.528.41 1.003.886 1.414 1.414Z"
			/>
		</svg>
	);
};

export default SunIcon;
