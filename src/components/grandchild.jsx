import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductComponent from "./product_component";
export default function GrandChild() {
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
  function changePage(oper) {
    if (oper === "prev") {
      setPage(page - 1);
    } else {
      setPage(page + 1);
    }
  }
  return (
    <div>
      {page !== 0 && (
        <button onClick={() => changePage("prev")}>Prev page</button>
      )}{" "}
      <button onClick={() => changePage("")}>Next page</button>
      <br />
      <br />
      <br />
      {productList.length === 0 ? (
        <>
          <h1>Is loading</h1>
        </>
      ) : (
        productList.map((product) => {
          return (
            <button
              onClick={() => window.open("/product/" + product.id, "_self")}
              style={{ margin: "1rem" }}
            >
              <ProductComponent product={product} />
            </button>
          );
        })
      )}
    </div>
  );
}
