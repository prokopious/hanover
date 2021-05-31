import { useState } from "react"
import Head from "next/head"
import styles from "../styles/Home.module.css"


import products from "../products.json"

const defaultCart = {
  products: {},
}

export default function Home() {
  /**
   * @lesson-09-solution Exercise 2
   * Using React's useState hook, we can store the current "state" of
   * our customer's shopping cart.
   */

  const [cart, updateCart] = useState(defaultCart)

  const cartItems = Object.keys(cart.products).map(key => {
    const product = products.find(({ id }) => `${id}` === `${key}`)
    return {
      ...cart.products[key],
      pricePerUnit: product.price,
    }
  })

  console.log(cartItems)

  const subtotal = cartItems.reduce(
    (accumulator, { pricePerUnit, quantity }) => {
      return accumulator + pricePerUnit * quantity
    },
    0
  )

  const quantity = cartItems.reduce((accumulator, { quantity }) => {
    return accumulator + quantity
  }, 0)



  function addToCart({ id }) {
    updateCart(prev => {
      let cart = { ...prev }

      if (cart.products[id]) {
        cart.products[id].quantity = cart.products[id].quantity + 1
      } else {
        cart.products[id] = {
          id,
          quantity: 1,
        }
      }

      return cart
    })
  }





  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Space Jelly Shop</h1>

        <p>
          The best space jellyfish swag on the web!
        </p>

        {/**
         * @lesson-09-solution Exercise 1
         * We can make use of the same description block as above to create a simple
         * section to include our total number of items and the total cost.
         */}

        <p>
    
          <strong>Items:</strong> {quantity}
          <br />
          <strong>Total:</strong> ${subtotal}
  
          <br />
    
        </p>

        <ul>
          {products.map(product => {
            const { id, title, image, description, price } = product
            return (
              <li key={id}>
                <a href="#">
                  <img src={image} alt={title} />
                  <h3>{title}</h3>
                  <p>${price}</p>
                  <p>{description}</p>
                  <p>
               
                    <button
                      onClick={() => addToCart({ id })}
                    >
                      Buy
                    </button>
                  </p>
                </a>
              </li>
            )
          })}
        </ul>
      </main>
    </div>
  )
}
