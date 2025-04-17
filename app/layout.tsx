import "@/styles/globals.css";
import { ReactNode } from "react";
import { Roboto } from "next/font/google";
import clsx from "clsx";
import { Providers } from "./providers"; // <- Aquí está tu ThemeProvider
import { fontSans } from "@/config/fonts";

const inter = Roboto({style: "normal", weight: "400", subsets: ["latin"]});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={clsx("min-h-screen bg-background font-sans antialiased", fontSans.variable, inter.className)}>
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          {children}
        </Providers>
      </body>
    </html>
  );
}