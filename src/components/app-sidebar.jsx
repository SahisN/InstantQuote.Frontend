import { Home, History, LogOutIcon } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useLogout } from "@/hooks/useLogout";

export function AppSidebar() {
  const { mutate: logout } = useLogout();

  // Menu items.
  const items = [
    {
      title: "Home",
      url: "#",
      icon: Home,
    },
    {
      title: "Quote History",
      url: "#",
      icon: History,
    },

    {
      title: "Logout",

      icon: LogOutIcon,
      onClick: () => {
        logout();
      },
    },
  ];
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Instant Quote</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <span
                      onClick={item.onClick}
                      className="flex items-center gap-2 w-full text-left cursor-pointer"
                    >
                      <item.icon />
                      <span>{item.title}</span>
                    </span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
