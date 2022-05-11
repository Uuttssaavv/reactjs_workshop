import { ShoppingCartIcon } from "@heroicons/react/outline";
const NavbarComponent = () => {
  return (
    <div className="relative w-screen h-24 bg-primary mb-4 pt-6">
      <h1 className="absolute text-white text-4xl text-center font-bold w-full">
        JS Commerce
      </h1>
      <div className="absolute flex flex-row justify-end w-full pr-4">
        <div className="h-12 w-12 mr-4 rounded-full border border-white grid place-items-center text-white hover:bg-white hover:text-primary cursor-pointer">
          <ShoppingCartIcon className="h-8 w-8" />
        </div>

        <div className="rounded-full h-12 w-12 bg-green-200 cursor-pointer">
          <img
            src="https://www.kindpng.com/picc/m/366-3664582_bob-bob-dummy-image-of-user-hd-png.png"
            alt="user image"
            className="rounded-full h-12 w-12 object-cover"
          />
        </div>
      </div>
    </div>
  );
};
export default NavbarComponent;
