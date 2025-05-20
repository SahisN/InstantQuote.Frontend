import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

export default function Layout({ children }) {
  return (
    <SidebarProvider>
      <div className="flex h-screen overflow-hidden">
        <AppSidebar />

        <div className="flex-1 flex flex-col overflow-y-auto">
          <SidebarTrigger />
          <main className="flex-1 flex items-center justify-center p-4">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
