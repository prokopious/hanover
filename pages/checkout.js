import Head from "next/head"
import styles from "../styles/Cart.module.css"
import CheckoutForm from "../components/CheckoutForm"
import Router from "next/router"
import useCart from "../hooks/use-cart.js"
import Layout from "../components/Layout"

import axios from "axios"
export default function Home() {
  const { cartItems, cart, clearCart, updateItem } = useCart()
  const { subtotal, quantity, addToCart } = useCart()
  const stuff = JSON.stringify(cartItems)

  const kart = cart
  const sendPostRequest = async () => {
    try {
      const resp = await axios.post(
        "https://dyh4j4u2r5.execute-api.us-east-1.amazonaws.com/latest/delivery",
        cartItems,
        cart
      )
    } catch (err) {
      // Handle Error Here
      console.error(err)
    }
  }
  return (
    <Layout title="Donut Shop">
      <div className={styles.container}>
        <Head>
          <title>Checkout</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <CheckoutForm
          price={subtotal}
          onSuccessfulCheckout={() => Router.push("/success").then(clearCart())}
        />
      </div>
    </Layout>
  )
}
