import { LucideIcon } from "lucide-react";
import { ActionMenu } from "./action-menu.interface";

export interface MenuItem {
    name: string;
    icon: LucideIcon;
    action?: ActionMenu;
}
