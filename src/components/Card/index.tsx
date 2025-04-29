import { X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import logo from "../../logo.svg";
import CardItem from "../CardItem";
const Card = () => {
	const [open, setOpen] = useState(true);
	return (
		<>
			<AnimatePresence>
				{open && (
					<motion.div
						initial={{
							opacity: 0,
							scale: 0.98,
							filter: "blur(10px)",
						}}
						animate={{
							opacity: 1,
							scale: 1,
							filter: "blur(0px)",
						}}
						exit={{
							opacity: 0,
							scale: 0.98,
							filter: "blur(10px)",
						}}
						transition={{
							duration: 0.3,
							ease: "easeInOut",
						}}
						className="flex flex-col shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-4 rounded-xl w-full h-full min-h-[27rem]"
					>
						<h2 className="font-bold text-base">Void UI Component</h2>
						<p className="mt-2 text-neutral-600 text-xs">
							A collection of beautiful UI components, Let's get on with it.
						</p>
						<div className="flex justify-center items-center">
							<button
								type="button"
								onClick={() => setOpen(false)}
								className="flex justify-center items-center gap-1 shadow-[0_8px_30px_rgb(0,0,0,0.12)] mx-auto mt-4 px-4 rounded-md"
							>
								<img className="w-8 h-8" alt="logo" src={logo} />
								<p className="font-semibold text-xs">Void UI</p>
								<X size={18} className="text-neutral-400" />
							</button>
						</div>
						<div className="relative flex-1 bg-gray-100 mt-4 border border-neutral-200 border-dashed rounded-lg">
							{/* motion div start here */}
							<motion.div
								initial={{ opacity: 0, scale: 0.98, filter: "blur(10px)" }}
								whileHover={{
									opacity: 1,
									scale: 1.02,
									filter: "blur(0px)",
								}}
								transition={{
									duration: 0.3,
									ease: "easeInOut",
									type: "spring",
									stiffness: 100,
									damping: 10,
								}}
								className="absolute inset-0 bg-white rounded-lg divide-y divide-neutral-200 w-full h-full"
							>
								<CardItem />
								<CardItem />
								<CardItem />
								<CardItem />
							</motion.div>
							{/* motion div ends here */}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
};

export default Card;
