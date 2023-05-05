import React from "react";
import Navbar from "../Navbar/Navbar";
import { About, Header, Footer, Skills, Work } from "../../container";

export default function Layout() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Footer />
    </div>
  );
}
