import Providers from "@/app/providers";
import { ErrorConfirm } from "@/components/comfirm-error";
import { Confirmer } from "@/components/confirm";
import { LoginDialog } from "@/components/login-dialog";
import { RegisterDialog } from "@/components/register-dialog";
import { ThemeProvider } from "@/components/provider-theme";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { fontSans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { Mulish } from "next/font/google";
import { ReactNode } from "react";
import "./globals.css";

const inter = Mulish({ subsets: ["latin"] });

export const metadata = {
  title: "EID-Merchants",
};
export default function RootLayout({ children }: { children: ReactNode }) {
  const body = cn("font-sans", fontSans.variable);

  return (
    <html lang="en" suppressHydrationWarning>
      <link rel="icon" href="@/app/favicon.ico" sizes="any" />
      <body className={body}>
        <ThemeProvider>
          <TooltipProvider delayDuration={200}>
            <Providers>{children}</Providers>
            <Toaster />
            <ErrorConfirm />
            <Confirmer />
            <LoginDialog />
            <RegisterDialog />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
