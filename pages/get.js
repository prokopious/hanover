import { useEffect } from "react"
import axios from "axios"

const data = {
  "name": "john",
  "email": "john@john.com",
  "message": "here's the message",
}

const sendPostRequest = async () => {
  try {
    const resp = await axios.post(
      "https://mysterious-wildwood-19282.herokuapp.com/demo/add",
      data
    )
  } catch (err) {
    // Handle Error Here
    console.error(err)
  }
}
export default function App() {
  return (
    <div className="app">
      <button onClick={sendPostRequest}>click</button>
    </div>
  )
}




