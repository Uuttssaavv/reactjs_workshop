import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductComponent from "../product/product_component";
import ClipLoader from "react-spinners/ClipLoader";
export default function DashboardComponent() {
  const [productList, setProductList] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    getProductList();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);
  const getProductList = async () => {
    try {
      setProductList([]);
      const response = await axios.get(
        `https://dummyjson.com/products/?skip=${page * 10}&limit=10`
      );
      setProductList(response["data"]["products"]);
    } catch (e) {
      //
    }
  };
  //   function changePage(oper) {
  //     if (oper === "prev") {
  //       setPage(page - 1);
  //     } else {
  //       setPage(page + 1);
  //     }
  //   }
  return (
    <div>
      {/* {page !== 0 && (
        <button onClick={() => changePage("prev")}>Prev page</button>
      )}
      <button onClick={() => changePage("")}>Next page</button> */}
      <br />
      <br />
      <br />
      {productList.length === 0 ? (
        <div className="flex flex-col justify-center items-center justify-self-center">
          <h2 className="mb-1 text-primary text-center">Fetching Data...</h2>
          <ClipLoader color="#4682B4" loading={true} />
        </div>
      ) : (
        <div className="grid  grid-cols-2 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 gap-2">
          {productList.map((product) => {
            return (
              // <button
              //   onClick={() => window.open("/product/" + product.id, "_self")}
              //   style={{ margin: "1rem" }}
              // ></button>
              <ProductComponent product={product} />
            );
          })}
        </div>
      )}
    </div>
  );
}
