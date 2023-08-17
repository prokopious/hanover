import { CartContext, useCartState } from "../hooks/use-cart.js"
import "tailwindcss/tailwind.css"
import "../styles/globals.css"
import "tailwindcss/tailwind.css"
import Head from "next/head"



function MyApp({ Component, pageProps }) {
  const cart = useCartState()
  return (
    <>
      <Head>
        // Responsive meta tag
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        // bootstrap CDN
      </Head>

        <CartContext.Provider value={cart}>
          <Component {...pageProps} />
        </CartContext.Provider>

    </>
  )
}

export default MyApp
