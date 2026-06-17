import {
  FaShoppingCart,
  FaMapMarkerAlt,
  FaSearch,
} from "react-icons/fa";

const Navbar = ({ cartCount }) => {
  return (
    <>
      {/* Top Navbar */}
      <div className="bg-[#131921] text-white h-16 px-6 flex items-center">

        {/* Logo */}
        <div className="flex items-center mr-6 cursor-pointer">
          <h1 className="text-4xl font-black tracking-tight">
            amazon
            <span className="text-orange-400">.in</span>
          </h1>
        </div>

        {/* Location */}
        <div className="hidden md:flex items-center mr-6 cursor-pointer hover:border border-white p-2 rounded">
          <FaMapMarkerAlt className="mr-2" />
          <div>
            <p className="text-xs text-gray-300">
              Deliver to
            </p>
            <p className="font-semibold">
              India
            </p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex flex-1 max-w-4xl h-10 rounded-md overflow-hidden shadow-lg">

          <select
            className="
            bg-gray-200
            text-black
            px-3
            border-r
            outline-none
            cursor-pointer
            "
          >
            <option>All</option>
            <option>Electronics</option>
            <option>Fashion</option>
            <option>Gaming</option>
            <option>Home</option>
          </select>

          <input
            type="text"
            placeholder="Search Amazon.in"
            className="
            flex-1
            bg-white
            px-4
            text-black
            outline-none
            "
          />

          <button
            className="
            bg-orange-400
            hover:bg-orange-500
            px-5
            flex
            items-center
            justify-center
            text-black
            font-bold
            transition
            "
          >
            <FaSearch />
          </button>
        </div>

        {/* Account */}
        <div className="hidden md:block ml-6 cursor-pointer">
          <p className="text-xs text-gray-300">
            Hello, Sign in
          </p>
          <p className="font-bold">
            Account & Lists
          </p>
        </div>

        {/* Cart */}
        <div className="flex items-center ml-8 cursor-pointer">
          <FaShoppingCart size={28} />
          <span className="ml-2 text-xl font-bold">
            {cartCount}
          </span>
        </div>

      </div>

      {/* Bottom Navigation */}
      <div className="bg-[#232f3e] text-white py-3 shadow-md">

        <div className="
        max-w-7xl
        mx-auto
        flex
        justify-center
        gap-10
        text-sm
        font-medium
        ">

          <span className="hover:text-orange-300 cursor-pointer transition">
            All
          </span>

          <span className="hover:text-orange-300 cursor-pointer transition">
            Today's Deals
          </span>

          <span className="hover:text-orange-300 cursor-pointer transition">
            Prime
          </span>

          <span className="hover:text-orange-300 cursor-pointer transition">
            Best Sellers
          </span>

          <span className="hover:text-orange-300 cursor-pointer transition">
            Customer Service
          </span>

          <span className="hover:text-orange-300 cursor-pointer transition">
            Electronics
          </span>

          <span className="hover:text-orange-300 cursor-pointer transition">
            Fashion
          </span>

        </div>

      </div>
    </>
  );
};

export default Navbar;