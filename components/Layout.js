import Navbar from "./Navbar";
import Footer1 from "./Footer1";
import Head from "next/head";
import CookieBanner from "./CookieBanner";
import { useCookies } from "react-cookie";

const Layout = ({ children }) => {
  return (
    <>
   
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar/>
      <main style={{ flexGrow: 1 }}>
        {children}
      </main>
      <Footer1 />
    </div>
    </>
  );
};

export default Layout;