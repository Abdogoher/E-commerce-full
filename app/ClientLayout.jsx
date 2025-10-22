'use client'
import { usePathname } from "next/navigation";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function ClientLayout({ children }) {
  const pathname = usePathname();

  const hiddenRoutes = ["/login", "/register"];
  const hideLayout = hiddenRoutes.includes(pathname);

  return (
    <>
      {!hideLayout && <Navbar />}
      {children}
      {!hideLayout && <Footer />}
    </>
  );
}