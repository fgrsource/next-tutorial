import Link from "next/link";
import "./globals.css";
import NavBar from "@/components/NavBar";

export const metadata = {
  title: {
    default: "Indie Gamer",
    template: "%s | Indie Gamer",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="px-8 py-2 flex flex-col min-h-screen">
        <header>
          <NavBar />
        </header>
        <main className="grow py-3">{children}</main>
        <footer className="border-t py-3 text-center text-xs">[footer]</footer>
      </body>
    </html>
  );
}
