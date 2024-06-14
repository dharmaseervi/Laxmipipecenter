import { Inter } from "next/font/google";
import "./globals.css";
import HomeNavbar from "./components/navbar";
import { Footer } from "./components/footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Laxmi Pipe Center - Plumbing Pipes & Sanitary Ware in Mysore, Karnataka",
    template: '%s | Laxmi Pipe Center - Plumbing Pipes & Sanitary Ware in Mysore, Karnataka '
  },
  description: "Laxmi Pipe Center in Mysore, Karnataka offers a wide range of plumbing pipes, sanitary ware, and bathroom fittings from brands like Jaquar, Onida, Parryware, Grohe, and Astral.",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <link rel="icon" href="icons/favicon.ico" sizes="any" />
      <body className={inter.className}>
        <HomeNavbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
