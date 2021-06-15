import styles from "../styles/Grid.module.css"
import products from "../products.json"
import useCart from "../hooks/use-cart"
import { FiPlusSquare } from "react-icons/fi"
import { FiMinusSquare } from "react-icons/fi"
import { gql } from "@apollo/client"
import client from "../apollo-client"

export default function Grid({ countries }) {
  const { addToCart, removeFromCart } = useCart()

const z = countries
console.log(z)

  return (
    <>
      <div className={styles.grid}>
        {products.map(product => {
          const { id, title, description, price } = product

          return (
            <div className="box">
              <div id="title">{title}</div>
              <div className="menu" key={id}>
                <div id="price">${price}</div>
                <div>
                  <button className="butt" onClick={() => addToCart({ id })}>
                    <FiPlusSquare />
                  </button>
                </div>
                <div>
                  <div>
                    <button
                      className="butt"
                      onClick={() => removeFromCart({ id })}
                    >
                      <FiMinusSquare />
                    </button>
                  </div>
                </div>{" "}
              </div>
              <p id="description">{description}</p>
            </div>
          )
        })}
      </div>
    </>
  )
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query MyQuery {
        listProducts {
          items {
            description
            id
            image
            price
            title
          }
        }
      }
    `,
  })

  return {
    props: {
      countries: data,
    },
  }
}
