const Hero = () => {
  return (
    <div
      className="h-[450px] bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1600')",
      }}
    >
      <div className="h-full bg-black/40 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-white text-6xl font-bold">
            Amazon Mega Sale
          </h1>
          <p className="text-white mt-4 text-xl">
            Up to 70% Off Electronics
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;