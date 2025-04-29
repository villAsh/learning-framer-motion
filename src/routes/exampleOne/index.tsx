import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";

export const Route = createFileRoute("/exampleOne/")({
	component: ExampleOne,
	caseSensitive: true,
});

function ExampleOne() {
	return (
		<main
			style={{
				backgroundImage:
					"radial-gradient(circle at 0.5px 0.5px, rgba(6, 182, 212, 0.4) 1px, transparent 0)",
				backgroundSize: "8px 8px",
				backgroundRepeat: "repeat",
			}}
			className="flex justify-center items-center bg-slate-900 w-screen h-screen [perspective: 1000px] [transform-style: preserve-3d]"
		>
			<motion.button
				whileHover={{
					scale: 1.05,
					rotateX: 20,
					rotateY: 20,
					// rotateZ: 20,
					boxShadow: "0px 10px 20px rgba(200, 255, 255, 0.2)",
				}}
				style={{ translateZ: 100 }}
				transition={{
					duration: 0.3,
					easings: "easeInOut",
				}}
				className="group relative bg-slate-700 px-12 py-4 rounded-md text-slate-100"
			>
				<span className="font-medium group-hover:text-cyan-500 text-3xl transition-colors duration-300">
					Subscribe
				</span>
				<span className="bottom-px absolute inset-x-0 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto w-3/4 h-px" />
				<span className="bottom-px absolute inset-x-0 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 blur-sm mx-auto w-3/4 h-[4px] transition-opacity duration-500" />
			</motion.button>
		</main>
	);
}
