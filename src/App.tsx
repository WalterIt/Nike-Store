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
  topratesales,
  highlight,
  sneaker,
  story,
  footerAPI,
} from "./data/products.js";
import { UseProductsContextType } from "./context/ProductsProvider.js";
import useProducts from "./components/hooks/useProducts.js";
import useCart from "./components/hooks/useCart.js";

function App() {
  // const { dispatch, REDUCER_ACTIONS, cart } = useCart();
  const { products } = useProducts();
  const [openCart, setOpenCart] = useState(false);
  const [ifCartState, setIfCartState] = useState(false);

  const onCartToggle = () => {
    setOpenCart(!openCart);
    setIfCartState(!ifCartState);
  };

  return (
    <>
      <Header onCartToggle={onCartToggle} />
      <Cart onCartToggle={onCartToggle} ifCartState={ifCartState} />
      <main className="flex flex-col gap-16 relative ">
        <Hero heroapi={heroapi} />
        <Sales products={popularsales} ifExists />
        <FlexContent endpoint={highlight} ifExists />
        <Sales products={products[0]} />
        <FlexContent endpoint={sneaker} />
        <Stories story={story} />
      </main>
      <Footer footerAPI={footerAPI} />
    </>
  );
}

export default App;
