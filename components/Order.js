import React from "react"
import useCart from "../hooks/use-cart.js"

export default function Order() {
  const { cartItems, updateItem } = useCart()
  const { subtotal, quantity, addToCart } = useCart()

  return (
    <div id="n">
      <div id="navbar">
        <a className="total">items -</a>
        <a className="sub">{quantity}</a>
        <a className="total">total -</a>
        <a className="sub">${subtotal}</a>
        <a id="review" href="/cart">
          REVIEW ORDER
        </a>

        <style jsx>{`
          #n {
            align-items: center;
            text-align: center;
          }

          #review {
            padding: 8px 19px;
            margin-left: 5px;
            font-size: 14px;
          }

          .total {
            margin-left: 5px;
            font-size: 14px;
            text-transform: uppercase;
          }

          .sub {
            padding: 8px 19px;
            background-color: rgba(255, 254, 207, 0.15);
          }
          #navbar a {
            color: rgb(190, 190, 190);
            padding: 5px;
            min-width: 50px;
            font-size: 14px;
          }
          #navbar {
            position: sticky;
            top: 0;

            z-index: 100; /* this is optional and should be different for every project */
            background-color: black;
            padding: 15px;
         
          }
        `}</style>
      </div>
    </div>
  )
}
