import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

import CursorBlinker from "./CursorBlinker";
export default function AnimText() {
	// const textIndex = useMotionValue(0);
	// const texts = ["Ihsaan"];
	const [ref, inView] = useInView();

	// const baseText = useTransform(textIndex, (latest) => texts[latest] || "");

	const baseText = "Ihsaan" as string;
	const count = useMotionValue(0);
	// const rounded = useTransform(count, (latest) => Math.round(latest));
	// const displayText = useTransform(rounded, (latest) =>
	// 	baseText.get().slice(0, latest)
	// );
	const rounded = useTransform(count, (latest) => Math.round(latest));
	const displayText = useTransform(rounded, (latest) =>
		baseText.slice(0, latest)
	);
	// const updatedThisRound = useMotionValue(true);
	const [text, setText] = useState<string>(
		() => (displayText.get() as string) || ""
	);
	useEffect(() => {
		// Ensure initial value is correct
		setText((displayText.get() as string) || "");

		// onChange returns an unsubscribe function in v6
		const unsubscribe = displayText.onChange((v) => {
			setText(String(v));
		});
		return () => {
			unsubscribe();
		};
	}, [displayText]);

	useEffect(() => {
		if (!inView) return;

		const controls = animate(count, baseText.length, {
			type: "tween",
			duration: 1,
			ease: "easeInOut",
		});
		return () => {
			controls.stop();
			count.set(0);
		};
	}, [count, inView]);

	// Subscribe to the MotionValue and update React state on every change
	// useEffect(() => {
	// 	// Ensure initial value is correct
	// 	setText((displayText.get() as string) || "");

	// 	// onChange returns an unsubscribe function in v6
	// 	const unsubscribe = displayText.onChange((v) => {
	// 		setText(String(v));
	// 	});

	// 	return () => unsubscribe();
	// }, [displayText]);
	// useEffect(() => {
	// 	if (!inView) return;
	// 	animate(count, 60, {
	// 		type: "tween",
	// 		duration: 4,
	// 		ease: "easeIn",
	// 		// repeat: Infinity,
	// 		repeatType: "reverse",
	// 		repeatDelay: 1,
	// 		onUpdate(latest) {
	// 			if (updatedThisRound.get() === true && latest > 0) {
	// 				updatedThisRound.set(false);
	// 			} else if (updatedThisRound.get() === false && latest === 0) {
	// 				if (textIndex.get() === texts.length - 1) {
	// 					textIndex.set(0);
	// 				} else {
	// 					textIndex.set(textIndex.get() + 1);
	// 				}
	// 				updatedThisRound.set(true);
	// 			}
	// 		},
	// 	});
	// 	// eslint-disable-next-line react-hooks/exhaustive-deps
	// }, []);

	return (
		<>
			<motion.span ref={ref} className="inline name">
				{text}
			</motion.span>
			<CursorBlinker />
		</>
	);
}
