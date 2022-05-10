import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import ProductComponent from "./product_component";
import ClipLoader from "react-spinners/ClipLoader";
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
          <div className="flex flex-col justify-center items-center justify-self-center">
            <h2 className="mb-1 text-primary text-center">Fetching Data...</h2>
            <ClipLoader color="#4682B4" loading={true} />
          </div>
        ) : (
          <ProductComponent product={product} />
        )}
      </div>
    </>
  );
}
