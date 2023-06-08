import { createContext, ReactElement, useState, useEffect } from "react";
// import { popularsales } from "../../data/products.js";

import product1 from "../assets/product1.png";
import product2 from "../assets/product2.png";
import product3 from "../assets/product3.png";
import product4 from "../assets/product4.png";
import product5 from "../assets/product5.png";
import product6 from "../assets/product6.png";
import product7 from "../assets/product7.png";
import product8 from "../assets/product8.png";
import product9 from "../assets/product9.png";
import product10 from "../assets/product10.png";
import product11 from "../assets/product11.png";
import product12 from "../assets/product12.png";

export type ProductType = {
  id: string;
  title: string;
  text: string;
  rating: string;
  btn: string;
  img: string;
  price: string;
  color: string;
  shadow: string;
};

// const initState: ProductType[] = [];
const initState: ProductType[] = [
  {
    id: "0M0x1",
    title: "Nike Air Low Premium",
    text: "MEN Running Shoes",
    rating: "5+",
    btn: "Buy Now",
    img: product7,
    price: "350",
    color: "from-sky-600 to-indigo-600",
    shadow: "shadow-lg shadow-blue-500",
  },
  {
    id: "0M0x2",
    title: "Nike Air Force Green",
    text: "MEN Running Shoes",
    rating: "5+",
    btn: "Buy Now",
    img: product2,
    price: "250",
    color: "from-green-500 to-emerald-500",
    shadow: "shadow-lg shadow-green-500",
  },
  {
    id: "0M0x3",
    title: "Nike Addapt BB Rose",
    text: "MEN Running Shoes",
    rating: "5+",
    btn: "Buy Now",
    img: product3,
    price: "450",
    color: "from-red-500 to-rose-500",
    shadow: "shadow-lg shadow-rose-500",
  },
  {
    id: "0M0x4",
    title: "Nike Air Premium",
    text: "MEN Running Shoes",
    rating: "5+",
    btn: "Buy Now",
    img: product4,
    price: "350",
    color: "from-orange-500 to-amber-500",
    shadow: "shadow-lg shadow-orange-500",
  },
  {
    id: "0M0x5",
    title: "Nike Adapt BB Pro",
    text: "MEN Running Shoes",
    rating: "5+",
    btn: "Buy Now",
    img: product5,
    price: "550",
    color: "from-gray-900 to-yellow-500",
    shadow: "shadow-lg shadow-yellow-500",
  },
  {
    id: "0M0x6",
    title: "Air Jordan PR3",
    text: "MEN Running Shoes",
    rating: "5+",
    btn: "Buy Now",
    img: product6,
    price: "450",
    color: "from-blue-500 to-cyan-500",
    shadow: "shadow-lg shadow-cyan-500",
  },
  {
    id: "0M0x7",
    title: "Nike Multi Smart Shoe",
    text: "MEN Running Shoes",
    rating: "5+",
    btn: "Buy Now",
    img: product1,
    price: "650",
    color: "from-yellow-500 to-yellow-500",
    shadow: "shadow-lg shadow-yellow-500",
  },
  {
    id: "0M0x8",
    title: "Nike Jordan Air Max",
    text: "MEN Running Shoes",
    rating: "5+",
    btn: "Buy Now",
    img: product9,
    price: "150",
    color: "from-[#936550] to-orange-900",
    shadow: "shadow-lg shadow-orange-800",
  },
  {
    id: "0M0x9",
    title: "Nike Old Max-x",
    text: "MEN Running Shoes",
    rating: "5+",
    btn: "Buy Now",
    img: product10,
    price: "250",
    color: "from-indigo-700 to-indigo-700",
    shadow: "shadow-lg shadow-indigo-500",
  },
  {
    id: "0M0x10",
    title: "Nike Lime Jordan 11",
    text: "MEN Running Shoes",
    rating: "5+",
    btn: "Buy Now",
    img: product12,
    price: "190",
    color: "from-green-600 to-lime-500",
    shadow: "shadow-lg shadow-lime-500",
  },
  {
    id: "0M0x11",
    title: "Nike Air Black Max",
    text: "MEN Running Shoes",
    rating: "5+",
    btn: "Buy Now",
    img: product11,
    price: "350",
    color: "from-slate-900 to-black",
    shadow: "shadow-lg shadow-black",
  },
  {
    id: "0M0x12",
    title: "Nike Zoom Max",
    text: "MEN Running Shoes",
    rating: "5+",
    btn: "Buy Now",
    img: product8,
    price: "550",
    color: "from-blue-900 to-blue-500",
    shadow: "shadow-lg shadow-blue-500",
  },
];

export type UseProductsContextType = {
  products: ProductType[];
};

const initContextState: UseProductsContextType = { products: [] };

const ProductsContext = createContext<UseProductsContextType>(initContextState);

type ChildrenType = { children?: ReactElement | ReactElement[] };

export const ProductsProvider = ({ children }: ChildrenType): ReactElement => {
  const [products, setProducts] = useState<ProductType[]>(initState);

  console.log(products);

  //   useEffect(() => {
  //     const fetchProducts = async (): Promise<ProductType[]> => {
  //       const data = await fetch("https://localhost:3500/products")
  //         .then((res) => res.json())
  //         .catch((err) => {
  //           if (err instanceof Error) {
  //             console.log(err.message);
  //           }
  //         });

  //       return data;
  //     };

  //     fetchProducts().then((data) => setProducts(data));
  //   }, []);

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContext;
