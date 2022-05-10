import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import ProductComponent from "./product_component";
export default function ProductDetails() {
  const location = useLocation();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const getProductDetail = async () => {
    try {
      const productId = location.pathname.split("/").pop();

      const response = await axios.get(
        `https://dummyjson.com/products/` + productId
      );
      setProduct(response.data);
      console.log(product.name);
    } catch (e) {
      //
    }
  };
  return (
    <>
      <div>
        {product === null ? (
          <h2>isLoading</h2>
        ) : (
          <ProductComponent product={product} />
        )}
      </div>
    </>
  );
}
