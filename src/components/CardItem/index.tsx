import { MessageCircle } from "lucide-react";

const CardItem = () => {
	return (
		<div className="flex gap-2 p-4 w-full h-fit">
			<div className="flex flex-shrink-0 justify-center items-center bg-white bg-gradient-to-br shadow-lg rounded-md w-7 h-7">
				<MessageCircle size={18} className="text-neutral-600" />
			</div>
			<div className="flex flex-col">
				<p className="font-bold text-neutral-600 text-sm">Void UI</p>
				<p className="mt-1 font-medium text-neutral-500 text-xs">
					A collection of UI Components
				</p>
			</div>
		</div>
	);
};

export default CardItem;
