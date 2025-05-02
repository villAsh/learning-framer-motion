import ParallaxCard from "@/components/ParallaxCard";
import { createFileRoute } from "@tanstack/react-router";
import { RocketIcon } from "lucide-react";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { useRef, useState } from "react";
export const Route = createFileRoute("/exampleFour/")({
	component: ExampleFour,
	caseSensitive: true,
});

const features = [
	{
		icon: <RocketIcon className="text-neutral-300" size={30} />,
		title: "Explore the Universe",
		description:
			"Discover the wonders of space with our interactive tools and resources.",
		content: (
			<div>
				<img
					alt="img-1"
					src="https://assets.aceternity.com/pro/car-1.jpg"
					className="rounded-lg w-3/4 h-3/4"
				/>
			</div>
		),
	},
	{
		icon: <RocketIcon />,
		title: "Explore the Universe",
		description:
			"Discover the wonders of space with our interactive tools and resources.",
		content: (
			<div>
				<img
					alt="img-1"
					src="https://assets.aceternity.com/pro/car-1.jpg"
					className="rounded-lg w-3/4 h-3/4"
				/>
			</div>
		),
	},
	{
		icon: <RocketIcon />,
		title: "Explore the Universe",
		description:
			"Discover the wonders of space with our interactive tools and resources.",
		content: (
			<div>
				<img
					alt="img-1"
					src="https://assets.aceternity.com/pro/car-1.jpg"
					className="rounded-lg w-3/4 h-3/4"
				/>
			</div>
		),
	},
	{
		icon: <RocketIcon />,
		title: "Explore the Universe",
		description:
			"Discover the wonders of space with our interactive tools and resources.",
		content: (
			<div>
				<img
					alt="img-1"
					src="https://assets.aceternity.com/pro/car-1.jpg"
					className="rounded-lg w-3/4 h-3/4"
				/>
			</div>
		),
	},
];

const backgrounds = ["#171717", "#1B1212", "#343434", "#28282B	"];

function ExampleFour() {
	const [background, setBackground] = useState(backgrounds[0]);
	const containerRef = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start end", "end start"],
	});

	useMotionValueEvent(scrollYProgress, "change", (val) => {
		setBackground(backgrounds[Math.floor(val * backgrounds.length)]);
	});

	return (
		<motion.div
			ref={containerRef}
			animate={{ background: background }}
			className="flex justify-center items-center bg-neutral-900 min-h-screen"
		>
			<div className="flex flex-col gap-10 mx-auto max-w-4xl">
				{features.map((item, idx) => (
					<ParallaxCard
						key={`${idx + 343}`}
						content={item.content}
						description={item.description}
						icon={item.icon}
						title={item.title}
					/>
				))}
			</div>
		</motion.div>
	);
}
