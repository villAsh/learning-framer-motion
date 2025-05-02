import {
	motion,
	useMotionTemplate,
	useScroll,
	useSpring,
	useTransform,
} from "motion/react";
import { type ReactNode, useRef } from "react";

type Props = {
	icon: ReactNode;
	title: string;
	content: ReactNode;
	description: string;
};

const ParallaxCard = ({ content, description, icon, title }: Props) => {
	const ref = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "end start"], // ["element ka start, viewport ka end hota hai tab start tracking", "element ka end , viewport ka start tab tracking band"]
	});

	const translateContent = useSpring(
		useTransform(scrollYProgress, [0, 1], [200, -300]),
		{
			stiffness: 140,
			damping: 30,
			mass: 1,
		},
	);
	const opacity = useTransform(scrollYProgress, [0.5, 1], [1, 0]);
	const blur = useTransform(scrollYProgress, [0.5, 1], [0, 10]);
	const scale = useTransform(scrollYProgress, [0.5, 1], [1, 0.7]);

	return (
		<div ref={ref} className="items-center gap-10 grid grid-cols-2 h-screen">
			<motion.div
				style={{
					opacity: opacity,
					filter: useMotionTemplate`blur(${blur}px)`,
				}}
				className="flex flex-col gap-5"
			>
				{icon}
				<h2 className="font-bold text-white text-4xl">{title}</h2>
				<p className="text-neutral-400 text-lg">{description}</p>
			</motion.div>
			<motion.div style={{ y: translateContent, opacity: opacity, scale }}>
				{content}
			</motion.div>
		</div>
	);
};

export default ParallaxCard;
