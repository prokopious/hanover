import Head from "next/head"
import SubmitButton from "../components/prebuilt/SubmitButton"
import styles from "../styles/Cart.module.css"
import { GrUpdate } from "react-icons/gr"
import { gql } from "@apollo/client"
import client from "../apollo-client"
import Router from "next/router"
import useCart from "../hooks/use-cart.js"
import Layout from "../components/Layout"
import Link from "next/link"
import Table from "../components/Table"
import products from "../products.json"

const columns = [
  {
    columnId: "title",
    Header: "Product",
  },
  {
    columnId: "quantity",
    Header: "Quantity",
  },
  {
    columnId: "pricePerUnit",
    Header: "Price",
  },
  {
    columnId: "total",
    Header: "Total",
  },
]

export default function Home({ countries }) {
  console.log(countries.listProducts.items)
  const products = countries.listProducts.items
  const { cartItems, updateItem } = useCart()
  const { subtotal, quantity, addToCart, clearCart } = useCart()
  const columnss = [
    {
      columnId: "title",
      Header: "Total",
    },
    {
      columnId: "quantity",
      Header: "",
    },
    {
      columnId: "pricePerUnit",
      Header: "",
    },
    {
      columnId: "total",
      Header: `$${subtotal}`,
    },
  ]
  const data = cartItems.map(({ id, quantity, pricePerUnit }) => {
    const product = products.find(({ id: pid }) => pid === id)
    let { title } = product || {}

    if (title === undefined) {
      clearCart()
    }
    

    const Quantity = () => {
      function handleOnSubmit(e) {
        e.preventDefault()

        const { currentTarget } = e
        const inputs = Array.from(currentTarget.elements)
        const quantity = inputs.find(input => input.name === "quantity")?.value

        updateItem({
          id,
          quantity: quantity && parseInt(quantity),
        })
      }

      return (
        <form className="bg-blend-color-burn" onSubmit={handleOnSubmit}>
          <input
            className="w-10"
            id="input"
            name="quantity"
            type="number"
            min={0}
            defaultValue={quantity}
          />

          <button className={styles.button}>
            <GrUpdate />
          </button>

        </form>
      )
    }


    return {
      id,
      title,
      quantity: <Quantity />,
      pricePerUnit: pricePerUnit.toFixed(2),
      total: (quantity * pricePerUnit).toFixed(2),
    }
  })

  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>Cart</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="pt-0">
          <p className="pb-4">Order summary:</p>

          <Table
            className={styles.table}
            data={data}
            columns={columns}
            columnss={columnss}
          />

          <SubmitButton>
            <Link href="/checkout">Checkout</Link>
          </SubmitButton>
        </main>

      </div>
 
    </Layout>
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
