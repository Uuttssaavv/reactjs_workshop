import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import ProductComponent from "../product/product_component";

const CartView = () => {
  const [cartList, setCartItems] = useState([]);
  const fetchCartItems = async () => {
    let response = await axios.get("https://dummyjson.com/carts");
    console.log(response.data);
    setCartItems(response.data.carts[0].products);
    console.log(response.data.carts[0].products[0].title);
  };
  useEffect(() => {
    fetchCartItems();
  }, []);
  return (
    <div>
      <h1>Cart</h1>
      <div className="grid  grid-cols-2 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 gap-2">
        {cartList.map((product) => {
          return <ProductComponent product={product} key={product.id} />;
        })}
      </div>
    </div>
  );
};
export default CartView;
