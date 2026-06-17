const HeroSlider = () => {
  return (
    <div className="relative h-[500px] overflow-hidden">

      <img
        src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=1600"
        alt="Amazon Sale"
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/40 flex items-center">
        <div className="max-w-7xl mx-auto px-10">

          <h1 className="text-white text-6xl font-bold">
            Amazon Great Summer Sale
          </h1>

          <p className="text-white text-xl mt-4">
            Up to 80% Off Electronics, Fashion & More
          </p>

          <button className="mt-6 bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-3 rounded-full font-bold">
            Shop Now
          </button>

        </div>
      </div>

    </div>
  );
};

export default HeroSlider;