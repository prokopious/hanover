import axios from "axios"
import useCart from "../hooks/use-cart"

export default function postRequest() {
  const { cart, subtotal, cartItems } = useCart()
  const stuff = cart.products
  console.log(cartItems)
console.log(stuff)
  console.log(subtotal)

  const sendPost = async () => {
    const data = await axios.post(
      "https://dyh4j4u2r5.execute-api.us-east-1.amazonaws.com/latest/calculate",
      stuff
    )
    console.log(data)
  }

  return (
    <div>
      <div className="buttonBox">
        <button className="testButton" onClick={sendPost}>
          POST
        </button>
      </div>
    </div>
  )
}
