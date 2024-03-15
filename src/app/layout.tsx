import { Inter } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";
import { ThemeProvider } from "@/providers/theme-provider";
import { ModalProvider } from "@/providers/modal-provider";
import { Provider } from "react-redux";
import Providers from "@/store/providers";

export const metadata: Metadata = {
  title: "فروشگاه اینترنتی آریاناکالا",
  description: "AryanaKala",
  keywords: ["AryanaKala", "Store", "Shop"],
  authors: [{ name: "Mersad Karimi", url: "https://github.com/Mersaduv" }],
  colorScheme: "dark",
  creator: "Mersad Karimi",
  publisher: "Mersad Karimi",
};
const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body>
        <Providers>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <ModalProvider />
            {children}
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
