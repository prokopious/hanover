import { useQuery, gql } from "@apollo/client"
import axios from "axios"
import Link from "next/link"

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

export default function Countries2() {
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



  const stuff = data.listProducts
  const z = JSON.stringify(stuff.items)
  console.log(z)

  return (
    <div>
stuff
    </div>
  )
}