"use client";
import { LoadingGlobal } from "@/components/loading/LoadingGlobal";
import { Sidebar } from "@/components/sidebar/index";
import { useEffect, useState } from "react";
import { useLoginStore } from "../sign-in/store";
import { useRouter } from "next/navigation";
import { SidebarNoSignIn } from "@/components/sidebar/sidebar-no-sign-in";

interface LayoutProps {
  children: React.ReactNode;
}

export default function LayoutSide({ children }: LayoutProps) {
  /* Check login va token o day */
  // const router = useRouter();
  // const [openApp, setOpenApp] = useState(false);

  // useEffect(() => {
  //   async function actionCheckLogin() {
  //     let isLogged = useLoginStore.getState().isLogged;
  //     if (!isLogged) {
  //       router.push("/sign-in");
  //     } else {
  //       setOpenApp(true);
  //     }
  //   }

  //   actionCheckLogin();
  // }, []);

  // if (!openApp) {
  //   return null;
  // }

  return (
    <div className="relative flex h-screen">
      <div className="relative flex max-w-full flex-1 flex-col">
        <div className="relative z-0 flex flex-auto flex-col">
          <div className="flex min-h-0 flex-1 flex-col">
            <LoadingGlobal />
            <Sidebar />
            <div className="flex min-w-0 flex-1 flex-col">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
