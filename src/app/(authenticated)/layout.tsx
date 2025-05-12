import React from "react";
import { NavHeader } from "@/components/nav-header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    // <SidebarProvider>
    //   <AppSidebar />
    //   <SidebarInset>
    //   </SidebarInset>
    // </SidebarProvider>

    <div className="p-4">
      {" "}
      <NavHeader />
      {children}
    </div>
  );
}
