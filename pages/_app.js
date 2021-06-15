import { CartContext, useCartState } from "../hooks/use-cart.js"
import "tailwindcss/tailwind.css"
import "../styles/globals.css"
import "tailwindcss/tailwind.css"
import Head from "next/head"
import { ApolloProvider } from "@apollo/client"
import client from "../apollo-client"

function MyApp({ Component, pageProps }) {
  const cart = useCartState()
  return (
    <>
      <Head>
        // Responsive meta tag
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        // bootstrap CDN
      </Head>
      <ApolloProvider client={client}>
        <CartContext.Provider value={cart}>
          <Component {...pageProps} />
        </CartContext.Provider>
      </ApolloProvider>
    </>
  )
}

export default MyApp
