const Footer = () => {
  return (
    <footer className="mt-16">

      <div
  onClick={() =>
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }
  className="
  bg-[#37475a]
  text-white
  text-center
  py-4
  cursor-pointer
  hover:bg-[#485769]
  transition
  "
>
  Back to Top
</div>

      <div className="bg-[#232f3e] text-white py-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 px-6">

          <div>
            <h3 className="font-bold mb-3">Get to Know Us</h3>
            <p>About Amazon</p>
            <p>Careers</p>
            <p>Investor Relations</p>
          </div>

          <div>
            <h3 className="font-bold mb-3">Connect With Us</h3>
            <p>Instagram</p>
            <p>Facebook</p>
            <p>Twitter</p>
          </div>

          <div>
            <h3 className="font-bold mb-3">Make Money With Us</h3>
            <p>Sell on Amazon</p>
            <p>Affiliate Program</p>
            <p>Advertise Products</p>
          </div>

          <div>
            <h3 className="font-bold mb-3">Help</h3>
            <p>Your Account</p>
            <p>Returns Centre</p>
            <p>Customer Support</p>
          </div>

        </div>
      </div>

      <div className="bg-[#131A22] text-gray-400 text-center py-6 border-t border-gray-700">

        <h2 className="text-white text-2xl font-bold">
          amazon<span className="text-orange-400">.in</span>
        </h2>

        <p className="mt-3">
          This Amazon Clone is built for educational purposes using React & Tailwind CSS.
        </p>

        <p className="mt-2">
          Designed & Developed by <span className="text-white font-semibold">Arush Dixit</span>
        </p>

        <p className="mt-1 text-sm">
          © 2026 Amazon Clone Project. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
};

export default Footer;