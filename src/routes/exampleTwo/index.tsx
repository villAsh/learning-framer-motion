import Card from "@/components/Card";
import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";

export const Route = createFileRoute("/exampleTwo/")({
	component: ExampleTwo,
	caseSensitive: true,
});

function ExampleTwo() {
	return (
		<main
			// style={{
			// 	backgroundImage:
			// 		"radial-gradient(circle at 0.5px 0.5px, rgba(6, 182, 212, 0.4) 1px, transparent 0)",
			// 	backgroundSize: "8px 8px",
			// 	backgroundRepeat: "repeat",
			// }}
			className="flex justify-center items-center bg-slate-50 w-screen h-screen [perspective: 1000px] [transform-style: preserve-3d]"
		>
			<div>
				<Card />
			</div>
		</main>
	);
}
