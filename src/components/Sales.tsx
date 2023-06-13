import Item from "./utils/Item";
import Title from "./utils/Title";
import { ProductType } from "../context/ProductsProvider";
import useCart from "./hooks/useCart";

type PropsType = {
  products: ProductType;
  ifExists?: boolean | undefined;
};

function Sales({ ifExists, products: { title, items } }: PropsType) {
  const { dispatch, REDUCER_ACTIONS, cart } = useCart();

  return (
    <div className="nike-container">
      <Title title={title} />
      <div
        className={`grid items-center justify-items-center  gap-7 lg:gap-5 mt-7 ${
          ifExists
            ? "grid-cols-3 xl:grid-cols-2 sm:grid-cols-1 "
            : "grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1"
        } `}
      >
        {items?.map((product, i) => {
          const inCart: boolean = cart.some((item) => item.id === product.id);

          return (
            <Item
              key={i}
              product={product}
              ifExists={ifExists}
              dispatch={dispatch}
              inCart={inCart}
              REDUCER_ACTIONS={REDUCER_ACTIONS}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Sales;
