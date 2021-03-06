import { ShoppingCartIcon } from "@heroicons/react/outline";
export default function ProductComponent(props) {
  const product = props.product;
  return (
    <button
      onClick={() => {
        window.open("/product/" + product.id, "_self", { product: product });
      }}
      className="h-64 w-full border-0 group rounded-lg m-2 shadow-shadow-color shadow-lg"
    >
      <div className="relative ">
        <div className="absolute h-full w-full flex flex-col justify-between p-2">
          <div className="w-8 h-8 grid place-items-center text-primary hover:text-white hover:transition-all hover:bg-primary  rounded-full border border-primary cursor-pointer invisible group-hover:visible transition-all duration-1000 ease-out">
            <ShoppingCartIcon className="h-5 w-5 text-center" />
          </div>
          <div>
            <h3>{product.title}</h3>
            <h3>${product.price}</h3>
          </div>
        </div>
        <div className="h-64 grid place-items-stretch  w-full rounded-lg">
          {product.images != null && (
            <img
              src={product.images[0]}
              alt={product.title}
              className="max-h-[80%] w-full rounded-lg object-scale-down p-2"
            />
          )}
        </div>
      </div>
    </button>
  );
}
