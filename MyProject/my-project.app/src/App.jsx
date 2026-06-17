import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";
import products from "./products";
import HeroSlider from "./components/HeroSlider";
import Footer from "./components/Footer";

function App() {

  const [cart,setCart] = useState([]);

  const addToCart = (product)=>{
    setCart([...cart,product]);
  };

  return (
    <>
      <Navbar cartCount={cart.length} />

      <HeroSlider/>
      <div
className="
grid
grid-cols-2
md:grid-cols-4
gap-6
max-w-7xl
mx-auto
-translate-y-16
relative
z-20
px-6
">

<div className="bg-white p-5 rounded-xl shadow-xl">
<h2 className="font-bold">Electronics</h2>
<img
src="https://images.unsplash.com/photo-1498049794561-7780e7231661?w=500"
className="h-40 w-full object-cover rounded mt-3"
/>
</div>

<div className="bg-white p-5 rounded-xl shadow-xl">
<h2 className="font-bold">Fashion</h2>
<img
src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500"
className="h-40 w-full object-cover rounded mt-3"
/>
</div>

<div className="bg-white p-5 rounded-xl shadow-xl">
<h2 className="font-bold">Gaming</h2>
<img
src="https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=500"
className="h-40 w-full object-cover rounded mt-3"
/>
</div>

<div className="bg-white p-5 rounded-xl shadow-xl">
<h2 className="font-bold">Home</h2>
<img
src="https://images.unsplash.com/photo-1484154218962-a197022b5858?w=500"
className="h-40 w-full object-cover rounded mt-3"
/>
</div>

</div>

      <div className="max-w-7xl mx-auto p-6">

        <h1 className="text-3xl font-bold mb-6">
          Today's Deals
        </h1>

        <div className="grid md:grid-cols-4 gap-6">

          {
            products.map(product=>(
              <ProductCard
                key={product.id}
                product={product}
                addToCart={addToCart}
              />
            ))
          }

        </div>
        <div className="
bg-gradient-to-r
from-blue-900
to-blue-500
text-white
p-10
rounded-xl
my-10
">

<h1 className="text-4xl font-bold">
Prime Day Deals
</h1>

<p className="mt-3">
Exclusive discounts for Prime Members
</p>

<button
className="
bg-yellow-400
text-black
mt-5
px-6
py-2
rounded-full
font-bold
">
Join Prime
</button>

</div>
<div className="bg-white p-6 rounded-xl shadow-xl my-10">

<h1 className="text-3xl font-bold mb-6">
🏆 Best Sellers
</h1>

<div className="flex gap-6 overflow-x-auto">

{
products.map(product=>(
<img
key={product.id}
src={product.image}
className="
h-48
min-w-[200px]
object-cover
rounded-xl
"
/>
))
}

</div>

</div>

        <Cart cart={cart} />

      </div>
      <Footer />
    </>
  );
}

export default App;