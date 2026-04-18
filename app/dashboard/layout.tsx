import type { ReactNode } from "react";

import { DashboardHeader } from "@/components/layout/dashboard-header";
import { DashboardSidebar } from "@/components/layout/dashboard-sidebar";

export default function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex flex-1">
      <DashboardSidebar />
      <div className="flex min-w-0 flex-1 flex-col">
        <DashboardHeader />
        <main className="flex-1 px-4 py-6 md:px-8">{children}</main>
      </div>
    </div>
  );
}
