import {
	BarChart,
	FileText,
	GalleryVerticalEnd,
	HelpCircle,
	Home,
	Settings,
	Users,
} from "lucide-react";

import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarRail,
	useSidebar,
} from "@/components/ui/sidebar";
import { type Variants, motion } from "motion/react";

// Navigation items
const navItems = [
	{
		title: "Dashboard",
		icon: Home,
		isActive: true,
	},
	{
		title: "Analytics",
		icon: BarChart,
	},
	{
		title: "Customers",
		icon: Users,
	},
	{
		title: "Documents",
		icon: FileText,
	},
	{
		title: "Settings",
		icon: Settings,
	},
];

const sidebarVariant: Variants = {
	open: {
		width: "16rem",
		backgroundColor: "red",
	},
	closed: {
		width: "4.5rem",
		backgroundColor: "black",
	},
};

export function AppSidebar() {
	const { open } = useSidebar();
	return (
		<Sidebar>
			<motion.div animate={open ? "open" : "closed"}>
				<SidebarHeader>
					<SidebarMenu>
						<SidebarMenuItem>
							<SidebarMenuButton size="lg" asChild>
								<a href="#">
									<div className="flex justify-center items-center bg-sidebar-primary rounded-lg size-8 aspect-square text-sidebar-primary-foreground">
										<GalleryVerticalEnd className="size-4" />
									</div>
									<div className="flex flex-col gap-0.5 leading-none">
										<span className="font-semibold">App Dashboard</span>
										<span className="opacity-70 text-xs">v1.0.0</span>
									</div>
								</a>
							</SidebarMenuButton>
						</SidebarMenuItem>
					</SidebarMenu>
				</SidebarHeader>

				<div>
					<SidebarGroup>
						<SidebarGroupLabel>Navigation</SidebarGroupLabel>
						<SidebarGroupContent>
							<ul>
								{navItems.map((item) => (
									<motion.p key={item.title}>
										<button type="button">
											<item.icon className="size-4" />
											<span>{item.title}</span>
										</button>
									</motion.p>
								))}
							</ul>
						</SidebarGroupContent>
					</SidebarGroup>
				</div>

				<SidebarFooter>
					<SidebarMenu>
						<SidebarMenuItem>
							<SidebarMenuButton asChild tooltip="Help & Support">
								<a href="#">
									<HelpCircle className="size-4" />
									<span>Help & Support</span>
								</a>
							</SidebarMenuButton>
						</SidebarMenuItem>
					</SidebarMenu>
				</SidebarFooter>

				<SidebarRail />
			</motion.div>
		</Sidebar>
	);
}
