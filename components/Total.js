import React, { useContext } from "react"
import { Context } from "../Context"
import data from "../data"
import CheckoutForm from "./CheckoutForm"

import Router from "next/router"

export default function Total() {
  const [items] = useContext(Context)

  const totalPrice = Object.keys(items).reduce((acc, curr) => {
    const [group, item] = curr.split("-")
    const amount = items[curr] * data[group][item].price
    return acc + amount
  }, 0)

  return (
    <div className="total">
      <CheckoutForm
        price={totalPrice}
        onSuccessfulCheckout={() => Router.push("/success").then(clearCart())}
      />
    </div>
  )
}
