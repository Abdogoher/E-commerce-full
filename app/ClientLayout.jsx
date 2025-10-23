"use client";
import { usePathname } from "next/navigation";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useSelector } from "react-redux";
import SearchResults from "./components/SearchResults";

export default function ClientLayout({ children }) {
  const pathname = usePathname();
  const { term } = useSelector((state) => state.search);

  const hiddenRoutes = ["/login", "/register"];
  const hideLayout = hiddenRoutes.includes(pathname);

  return (
    <>
      {!hideLayout && <Navbar />}
      {term.trim().length > 1 ? <div className="w-3/5 mx-auto">
        <SearchResults />
      </div> : children}
      {!hideLayout && <Footer />}
    </>
  );
}
