import React, { useRef, useState, useEffect } from "react";

const scrollTo = <T extends Element>(
	ref: React.MutableRefObject<HTMLElement | null>
) => {
	const [shouldScrollTo, setShouldScrollTo] = useState(false);

	useEffect(() => {
		if (ref.current && shouldScrollTo) {
			ref.current!.scrollIntoView({ behavior: "smooth" });
			setShouldScrollTo(false);
		}
	}, [shouldScrollTo]);

	return [setShouldScrollTo];
};
export default scrollTo;
