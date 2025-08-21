import "./globals.css";
import DarkThemeProvider from "../components/DarkThemeProvider";

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: " EcoSilver",
  description: "",
  icons: {
    icon: '../../Artboard 12.jpg'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa">
      <body>
        <DarkThemeProvider>{children}</DarkThemeProvider>
      </body>
    </html>
  );
}
