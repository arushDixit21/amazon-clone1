const ProductCard = ({ product, addToCart }) => {
  return (
    <div
      className="
      bg-white
      rounded-xl
      shadow-md
      overflow-hidden
      hover:shadow-2xl
      hover:-translate-y-2
      transition-all
      duration-300
    "
    >
      <img
        src={product.image}
        alt={product.title}
        className="h-60 w-full object-cover"
      />

      <div className="p-4">
        <h2 className="font-semibold text-lg">
          {product.title}
        </h2>

        <div className="text-yellow-500 my-2">
          {"⭐".repeat(product.rating || 4)}
        </div>

        <p className="text-2xl font-bold">
          ₹{product.price}
        </p>

        <button
          onClick={() => addToCart(product)}
          className="
          mt-4
          w-full
          bg-yellow-400
          hover:bg-yellow-500
          py-2
          rounded-full
          font-semibold
        "
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;