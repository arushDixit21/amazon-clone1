import React from "react";

const Cart = ({cart}) => {
  const total = cart.reduce(
    (sum,item)=>sum+item.price,
    0
  );

  return (
    <div className="bg-white p-6 rounded-xl mt-8">

      <h2 className="text-2xl font-bold mb-4">
        Shopping Cart
      </h2>

      {
        cart.map(item=>(
          <div
            key={item.id}
            className="flex justify-between py-2"
          >
            <span>{item.title}</span>
            <span>₹{item.price}</span>
          </div>
        ))
      }

      <hr className="my-3"/>

      <h3 className="font-bold">
        Total : ₹{total}
      </h3>

    </div>
  );
};

export default Cart;