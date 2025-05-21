import { Highlighter, History, LogOutIcon, SearchIcon } from "lucide-react";

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
import { useLogout } from "@/auth/useLogout";
import { useNavigate } from "react-router-dom";

export function AppSidebar() {
  const { mutate: logout } = useLogout();
  const navigate = useNavigate();

  // Menu items.
  const items = [
    {
      title: "Quote Form",
      icon: Highlighter,
      onClick: () => {
        navigate("/");
      },
    },

    {
      title: "Class Code Lookup",
      icon: SearchIcon,
      onClick: () => {
        navigate("/lookup");
      },
    },

    {
      title: "Quote History",
      icon: History,
      onClick: () => {
        navigate("/history");
      },
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
          <SidebarGroupLabel className="text-xl mb-[40px] mt-[15px]">
            <img src="quota.svg" className="w-10 h-10"></img>Instant Quote
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <span
                      onClick={item.onClick}
                      className="flex items-center gap-3 w-full text-left cursor-pointer text-2"
                    >
                      <item.icon size={60} />
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
