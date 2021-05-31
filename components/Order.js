import React from "react"
import useCart from "../hooks/use-cart.js"

export default function Order() {

    const { cartItems, updateItem } = useCart()
    const { subtotal, quantity, addToCart } = useCart()

console.log(quantity)
  return (
    <div id="navbar">
      <a>Items:</a>
      <a id="sub">{quantity}</a>
      <a>Total:</a>
      <a id="sub">${subtotal}</a><br></br>
      <a id="review" href='/cart'>Review Order</a>
 
    </div>
  )
}
