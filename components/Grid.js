import styles from "../styles/Grid.module.css"
import products from "../products.json"
import useCart from "../hooks/use-cart"
import { FiPlusSquare } from "react-icons/fi"
import { FiMinusSquare } from "react-icons/fi"
import { useQuery, gql } from "@apollo/client"

const QUERY = gql`
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
`

export default function Grid() {
  const { addToCart, removeFromCart } = useCart()
  const { data, loading, error } = useQuery(QUERY, {
    pollInterval: 500,
  })

  if (loading) {
    return <h2>Loading...</h2>
  }

  if (error) {
    console.error(error)
    return null
  }

  const stuff = data.listProducts.items
 const products = stuff
  console.log(stuff)

 

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
