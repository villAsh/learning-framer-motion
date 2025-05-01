import { House, LogOut, Mail, Settings, User } from "lucide-react";
import { AnimatePresence, type Variants, motion } from "motion/react";
import React from "react";

const menu = [
	{
		id: 10,
		comp: <House className="text-black" />,
	},
	{
		id: 20,
		comp: <Mail className="text-black" />,
	},
	{
		id: 30,
		comp: <User className="text-black" />,
	},
	{
		id: 40,
		comp: <Settings className="text-black" />,
	},
	{
		id: 50,
		comp: <LogOut className="text-black" />,
	},
];

type Props = {
	isOpen: boolean;
};

const parentVariants: Variants = {
	open: {
		transition: {
			staggerChildren: 0.07,
			delayChildren: 0.2,
		},
	},
	closed: {
		transition: {
			staggerChildren: 0.05,
			staggerDirection: -1,
		},
	},
};

const childVariants: Variants = {
	open: {
		opacity: 1,
		y: 0,
	},
	closed: {
		opacity: 0,
		y: -50,
	},
};

const NavbarList = ({ isOpen }: Props) => {
	return (
		<AnimatePresence>
			{isOpen && (
				<motion.ul
					variants={parentVariants}
					initial="closed"
					animate="open"
					exit="closed"
					className="top-12 absolute flex flex-col justify-center items-center gap-y-1 mt-2 rounded-full overflow-hidden"
				>
					{menu.map((item) => (
						<motion.li
							variants={childVariants}
							className="flex justify-center items-center bg-slate-100 rounded-full w-12 h-12"
							key={item.id}
						>
							{item.comp}
						</motion.li>
					))}
				</motion.ul>
			)}
		</AnimatePresence>
	);
};

export default NavbarList;
