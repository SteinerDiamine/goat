import type { Metadata } from "next";
import { DM_Sans } from "next/font/google"; // Import DM_Sans
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";

const dmSans = DM_Sans({ subsets: ["latin"] }); // Create DM_Sans instance

export const metadata: Metadata = {
  title: " SD",
  description: "Automate your work",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={dmSans.className}> 
      <ThemeProvider
         attribute="class"
         defaultTheme="dark"
         enableSystem
         disableTransitionOnChange>


      {children}
      </ThemeProvider>
        
      </body>
    </html>
  );
}  


