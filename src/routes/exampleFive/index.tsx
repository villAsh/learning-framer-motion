import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { type ReactNode, useEffect, useRef, useState } from "react";

export const Route = createFileRoute("/exampleFive/")({
	component: RouteComponent,
});

type Card = {
	id: number;
	title: string;
	desc: string;
	src: string;
	ctaText: string;
	ctaLink: string;
	content: () => ReactNode;
};

const cards: Card[] = [
	{
		id: 1,
		desc: "Lana Del Rey",
		title: "Summertime Sadness",
		src: "https://assets.aceternity.com/demos/lana-del-rey.jpeg",
		ctaText: "Play",
		ctaLink: "https://vilaschauvhan.vercel.app",
		content: () => {
			return (
				<p className="text-neutral-500 text-sm">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
					suscipit nesciunt beatae, nobis vel enim in labore veritatis rem nemo
					exercitationem incidunt ratione officiis quia ullam, eius fugiat!
					Corporis laborum fuga unde consequatur provident similique culpa
					voluptas rerum ipsam, facilis et pariatur nihil porro natus assumenda
					beatae exercitationem ex ipsum cumque amet accusantium. Architecto,
					minus dolorum mollitia blanditiis veritatis pariatur nisi sequi!
					Ducimus molestias ab eum quisquam quas, magnam iure reprehenderit?
					Laborum eius perferendis in ratione sit dolores eos, quidem
					dignissimos fugiat ullam quam deserunt animi reiciendis modi, eveniet
					fugit libero nemo! Voluptatem dolorem vel ducimus? Delectus ratione
					rem ducimus?
				</p>
			);
		},
	},
	{
		id: 2,
		desc: "Lana Del Rey",
		title: "Summertime Sadness",
		src: "https://assets.aceternity.com/demos/lana-del-rey.jpeg",
		ctaText: "Play",
		ctaLink: "https://vilaschauvhan.vercel.app",
		content: () => {
			return (
				<p className="text-neutral-500 text-sm">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
					suscipit nesciunt beatae, nobis vel enim in labore veritatis rem nemo
					exercitationem incidunt ratione officiis quia ullam, eius fugiat!
					Corporis laborum fuga unde consequatur provident similique culpa
					voluptas rerum ipsam, facilis et pariatur nihil porro natus assumenda
					beatae exercitationem ex ipsum cumque amet accusantium. Architecto,
					minus dolorum mollitia blanditiis veritatis pariatur nisi sequi!
					Ducimus molestias ab eum quisquam quas, magnam iure reprehenderit?
					Laborum eius perferendis in ratione sit dolores eos, quidem
					dignissimos fugiat ullam quam deserunt animi reiciendis modi, eveniet
					fugit libero nemo! Voluptatem dolorem vel ducimus? Delectus ratione
					rem ducimus?
				</p>
			);
		},
	},
	{
		id: 3,
		desc: "Lana Del Rey",
		title: "Summertime Sadness",
		src: "https://assets.aceternity.com/demos/lana-del-rey.jpeg",
		ctaText: "Play",
		ctaLink: "https://vilaschauvhan.vercel.app",
		content: () => {
			return (
				<p className="text-neutral-500 text-sm">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
					suscipit nesciunt beatae, nobis vel enim in labore veritatis rem nemo
					exercitationem incidunt ratione officiis quia ullam, eius fugiat!
					Corporis laborum fuga unde consequatur provident similique culpa
					voluptas rerum ipsam, facilis et pariatur nihil porro natus assumenda
					beatae exercitationem ex ipsum cumque amet accusantium. Architecto,
					minus dolorum mollitia blanditiis veritatis pariatur nisi sequi!
					Ducimus molestias ab eum quisquam quas, magnam iure reprehenderit?
					Laborum eius perferendis in ratione sit dolores eos, quidem
					dignissimos fugiat ullam quam deserunt animi reiciendis modi, eveniet
					fugit libero nemo! Voluptatem dolorem vel ducimus? Delectus ratione
					rem ducimus?
				</p>
			);
		},
	},
	{
		id: 4,
		desc: "Lana Del Rey",
		title: "Summertime Sadness",
		src: "https://assets.aceternity.com/demos/lana-del-rey.jpeg",
		ctaText: "Play",
		ctaLink: "https://vilaschauvhan.vercel.app",
		content: () => {
			return (
				<p className="text-neutral-500 text-sm">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
					suscipit nesciunt beatae, nobis vel enim in labore veritatis rem nemo
					exercitationem incidunt ratione officiis quia ullam, eius fugiat!
					Corporis laborum fuga unde consequatur provident similique culpa
					voluptas rerum ipsam, facilis et pariatur nihil porro natus assumenda
					beatae exercitationem ex ipsum cumque amet accusantium. Architecto,
					minus dolorum mollitia blanditiis veritatis pariatur nisi sequi!
					Ducimus molestias ab eum quisquam quas, magnam iure reprehenderit?
					Laborum eius perferendis in ratione sit dolores eos, quidem
					dignissimos fugiat ullam quam deserunt animi reiciendis modi, eveniet
					fugit libero nemo! Voluptatem dolorem vel ducimus? Delectus ratione
					rem ducimus?
				</p>
			);
		},
	},
	{
		id: 5,
		desc: "Lana Del Rey",
		title: "Summertime Sadness",
		src: "https://assets.aceternity.com/demos/lana-del-rey.jpeg",
		ctaText: "Play",
		ctaLink: "https://vilaschauvhan.vercel.app",
		content: () => {
			return (
				<p className="text-neutral-500 text-sm">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
					suscipit nesciunt beatae, nobis vel enim in labore veritatis rem nemo
					exercitationem incidunt ratione officiis quia ullam, eius fugiat!
					Corporis laborum fuga unde consequatur provident similique culpa
					voluptas rerum ipsam, facilis et pariatur nihil porro natus assumenda
					beatae exercitationem ex ipsum cumque amet accusantium. Architecto,
					minus dolorum mollitia blanditiis veritatis pariatur nisi sequi!
					Ducimus molestias ab eum quisquam quas, magnam iure reprehenderit?
					Laborum eius perferendis in ratione sit dolores eos, quidem
					dignissimos fugiat ullam quam deserunt animi reiciendis modi, eveniet
					fugit libero nemo! Voluptatem dolorem vel ducimus? Delectus ratione
					rem ducimus?
				</p>
			);
		},
	},
	{
		id: 6,
		desc: "Lana Del Rey",
		title: "Summertime Sadness",
		src: "https://assets.aceternity.com/demos/lana-del-rey.jpeg",
		ctaText: "Play",
		ctaLink: "https://vilaschauvhan.vercel.app",
		content: () => {
			return (
				<p className="text-neutral-500 text-sm">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
					suscipit nesciunt beatae, nobis vel enim in labore veritatis rem nemo
					exercitationem incidunt ratione officiis quia ullam, eius fugiat!
					Corporis laborum fuga unde consequatur provident similique culpa
					voluptas rerum ipsam, facilis et pariatur nihil porro natus assumenda
					beatae exercitationem ex ipsum cumque amet accusantium. Architecto,
					minus dolorum mollitia blanditiis veritatis pariatur nisi sequi!
					Ducimus molestias ab eum quisquam quas, magnam iure reprehenderit?
					Laborum eius perferendis in ratione sit dolores eos, quidem
					dignissimos fugiat ullam quam deserunt animi reiciendis modi, eveniet
					fugit libero nemo! Voluptatem dolorem vel ducimus? Delectus ratione
					rem ducimus?
				</p>
			);
		},
	},
];

const useOutsideClick = (callback: () => void) => {
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleClick = (e: MouseEvent) => {
			if (ref.current && !ref.current.contains(e.target as Node)) {
				callback();
			}
		};

		document.addEventListener("click", handleClick);
		return () => {
			document.removeEventListener("click", handleClick);
		};
	}, [callback]);

	return ref;
};

function RouteComponent() {
	const [current, setCurrent] = useState<Card | null>(null);
	console.log("current", current);
	const ref = useOutsideClick(() => setCurrent(null));

	const handleCardClick = (item: Card, e: React.MouseEvent) => {
		e.stopPropagation(); // Prevent click from bubbling to document
		setCurrent(item);
	};

	return (
		<div className="relative bg-gray-100 py-10 min-h-screen">
			{current && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					className="z-10 fixed inset-0 bg-black/50 backdrop-blur-xs w-full h-full"
				/>
			)}
			{current && (
				<motion.div
					ref={ref}
					layoutId={`card-${current.id}`}
					onClick={(e) => e.stopPropagation()}
					className="z-50 fixed inset-0 bg-white m-auto p-4 border border-neutral-300 rounded-2xl w-80 h-[600px] overflow-hidden"
				>
					<motion.img
						src={current.src}
						alt={current.title}
						className="rounded-xl h-80 aspect-square"
						layoutId={`card-image-${current.id}`}
					/>
					<div className="flex flex-col justify-between items-start mt-5 w-full">
						<div className="flex justify-between items-start gap-4">
							<div className="flex flex-col items-start gap-4">
								<motion.h2
									layoutId={`card-title-${current.title}`}
									className="font-bold text-black text-base tracking-tight"
								>
									{current.title}
								</motion.h2>
								<motion.p
									layoutId={`card-desc-${current.title}`}
									className="text-neutral-500 text-xs"
								>
									{current.desc}
								</motion.p>
							</div>
							<motion.div
								layoutId={`card-btn-${current.id}`}
								className="bg-green-500 px-2 py-1 rounded-full text-white text-xs"
							>
								{current.ctaText}
							</motion.div>
						</div>
					</div>
					<motion.div
						initial={{ filter: "blur(10px)", opacity: 0 }}
						animate={{ filter: "blur(0px)", opacity: 1 }}
						transition={{ delay: 0.3 }}
						className="pb-20 h-50 overflow-auto [mask-image:linear-gradient(to_top,transparent_20%,black_80%)]"
					>
						{current.content()}
					</motion.div>
				</motion.div>
			)}
			<div className="flex flex-col gap-10 mx-auto max-w-lg">
				{cards.map((item) => (
					<motion.button
						type="button"
						layoutId={`card-${item.id}`}
						key={item.id}
						onClick={(e) => handleCardClick(item, e)}
						className="flex justify-between items-center bg-white p-4 border border-neutral-200 rounded-lg cursor-pointer"
					>
						<div className="flex items-center gap-4">
							<img
								src={item.src}
								alt={item.title}
								className="rounded-2xl h-14 aspect-square"
							/>
							<div className="flex flex-col items-start gap-2">
								<h2 className="font-bold text-black text-base tracking-tight">
									{item.title}
								</h2>
								<p className="text-neutral-500 text-xs">{item.desc}</p>
							</div>
						</div>
						<div className="bg-green-500 px-2 py-1 rounded-full text-white text-xs">
							{item.ctaText}
						</div>
					</motion.button>
				))}
			</div>
		</div>
	);
}
