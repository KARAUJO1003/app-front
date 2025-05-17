import React from "react";
import { NavHeader } from "@/components/nav-header";
import { UserProvider } from "@/context/user-context";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    // <SidebarProvider>
    //   <AppSidebar />
    //   <SidebarInset>
    //   </SidebarInset>
    // </SidebarProvider>

    <div className="p-4">
      <NavHeader />
      <UserProvider>{children}</UserProvider>
    </div>
  );
}
