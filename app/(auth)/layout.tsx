import { LoadingGlobal } from "@/components/loading/LoadingGlobal";
import { SidebarNoSignIn } from "@/components/sidebar/sidebar-no-sign-in";
import { ReactNode } from "react";
import LayoutSide from "./layout-side";

export const metadata = {
  title: "10P",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return <LayoutSide>{children}</LayoutSide>;
}
