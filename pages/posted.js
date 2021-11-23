import { useState } from "react"
import axios from "axios"

function App() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [data, setData] = useState(null)

  var details = {
    name: "test@gmail.com",
    email: "Password!",
    message: "password",
  }

  const handleSubmit = () => {
    setLoading(true)
    setIsError(false)
    const details = {
      name: name,
      email: email,
      message: message,
    }
    const formBody = Object.keys(details)
      .map(
        key => encodeURIComponent(key) + "=" + encodeURIComponent(details[key])
      )
      .join("&")
    console.log(data)

    axios
      .post(
        "https://mysterious-wildwood-19282.herokuapp.com/demo/add",
        formBody
      )
      .then(res => {
        setData(res.data)
        setName("")
        setEmail("")
        setMessage("")
        setLoading(false)
      })
      .catch(err => {
        setLoading(false)
        setIsError(true)
      })
  }

  return (
    <div className="container p-3">
      <h5 className="d-inline-block mb-3">Contact Us</h5>
      <div style={{ maxWidth: 350 }}>
        <div classNames="form-group">
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Name.."
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div classNames="form-group">
          <input
            type="text"
            className="form-control"
            id="email"
            placeholder="Email.."
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div classNames="form-group">
          <textarea
            type="text"
            className="form-control"
            id="message"
            placeholder="Message.."
            value={message}
            onChange={e => setMessage(e.target.value)}
          />
        </div>
        {isError && (
          <small className="mt-3 d-inline-block text-danger">
            Something went wrong. Please try again later.
          </small>
        )}
        <button
          type="submit"
          className="btn btn-primary mt-3"
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? "Loading..." : "Submit"}
        </button>
      </div>
      <style jsx>{`
        #email {
          background-color: rgb(242, 242, 243);
          width: 300px;
          margin-bottom: 20px;
          padding: 10px;
          border-radius: 4px;
        }
        #name {
          background-color: rgb(242, 242, 243);
          width: 300px;
          margin-bottom: 20px;
          padding: 10px;
          border-radius: 4px;
        }
        #message {
          width: 300px;
          height: 200px;
          background-color: rgb(242, 242, 243);
          padding: 10px;
          border-radius: 4px;
        }
      `}</style>
    </div>
  )
}

export default App
