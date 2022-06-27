import React, { ReactNode, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
type Props = { children: ReactNode; className: string };
const variants = {
	visible: {
		opacity: 1,
		transition: {
			duration: 0.5,
			ease: "linear",
		},
	},
	hidden: { opacity: 0 },
	exit: {
		opacity: 0,
	},
};
const FadeIn = ({ children, className }: Props) => {
	const control = useAnimation();
	const [ref, inView] = useInView();
	useEffect(() => {
		inView ? control.start("visible") : control.start("hidden");
		// unmount
		return () => {
			control.stop();
		};
	}, [control, inView]);
	return (
		<motion.div
			className={className}
			ref={ref}
			variants={variants}
			initial="hidden"
			animate={control}
			exit="exit"
		>
			{children}
		</motion.div>
	);
};

export default FadeIn;
