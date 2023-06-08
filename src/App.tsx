import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Cart from "./components/Cart";
import Sales from "./components/Sales";
import Hero from "./components/Hero";
import FlexContent from "./components/FlexContent";
import Stories from "./components/Stories";
import { useState } from "react";
import {
  heroapi,
  popularsales,
  toprateslaes,
  highlight,
  sneaker,
  story,
  footerAPI,
} from "./data/products.js";

function App() {
  const [viewCart, setViewCart] = useState(false);

  return (
    <>
      <Header />
      <Cart />
      <main className="flex flex-col gap-16 relative ">
        <Hero heroapi={heroapi} />
        <Sales />
        <FlexContent />
        <Stories />
        <Footer />
      </main>
    </>
  );
}

export default App;
