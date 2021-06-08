import { useState } from "react"
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js"
import styled from "@emotion/styled"
import axios from "axios"
import useCart from "../hooks/use-cart.js"
import Row from "./prebuilt/Row"
import BillingDetailsFields from "./prebuilt/BillingDetailsFields"
import SubmitButton from "./prebuilt/SubmitButton"
import CheckoutError from "./prebuilt/CheckoutError"

const CardElementContainer = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  & .StripeElement {
    width: 100%;
    padding: 15px;
  }
`

const CheckoutForm = ({ price, onSuccessfulCheckout }) => {
  const [isProcessing, setProcessingTo] = useState(false)
  const [checkoutError, setCheckoutError] = useState()

  const stripe = useStripe()
  const elements = useElements()
  const cartItems = useCart()
  const cart = useCart()
  let carty = JSON.stringify(cart)

  // TIP
  // use the cardElements onChange prop to add a handler
  // for setting any errors:

  const handleCardDetailsChange = ev => {
    ev.error ? setCheckoutError(ev.error.message) : setCheckoutError()
  }

  const handleFormSubmit = async ev => {
    ev.preventDefault()

    const theCart = {
      info: carty,
    }
    const billingDetails = {
      name: ev.target.name.value,
      email: ev.target.email.value,
      address: {
        city: ev.target.city.value,
        line1: ev.target.address.value,
        state: ev.target.state.value,
        postal_code: ev.target.zip.value,
      },
    }

    setProcessingTo(true)

    const cardElement = elements.getElement("card")

    try {
      const { data: clientSecret } = await axios.post(
        "https://dyh4j4u2r5.execute-api.us-east-1.amazonaws.com/latest/create-charge",
        {
          amount: price * 100,
          currency: "usd",
        }
      )
      console.log(clientSecret)

      const paymentMethodReq = await stripe.createPaymentMethod({
        type: "card",
        card: cardElement,
        billing_details: billingDetails,
      })

      const stuff = { ...cartItems, ...billingDetails, ...theCart }
      const sendPostRequest = async () => {
        try {
          const resp = axios.post(
            "https://dyh4j4u2r5.execute-api.us-east-1.amazonaws.com/latest/session-completed",
            stuff
          )
        } catch (err) {
          // Handle Error Here
          console.error(err)
        }
      }
      if (paymentMethodReq.error) {
        setCheckoutError(paymentMethodReq.error.message)
        setProcessingTo(false)
        return
      }

      const { error } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: paymentMethodReq.paymentMethod.id,
      })

      if (error) {
        setCheckoutError(error.message)
        setProcessingTo(false)
        return
      }

      onSuccessfulCheckout().then(sendPostRequest)
    } catch (err) {
      setCheckoutError(err.message)
    }
  }

  const iframeStyles = {
    base: {
      color: "black",
      fontSize: "16px",
      iconColor: "#fff",
      "::placeholder": {
        color: "silver",
      },
    },
    invalid: {
      iconColor: "#FFC7EE",
      color: "#FFC7EE",
    },
    complete: {
      iconColor: "#cbf4c9",
    },
  }

  const cardElementOpts = {
    iconStyle: "solid",
    style: iframeStyles,
    hidePostalCode: true,
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <Row>
        <BillingDetailsFields />
      </Row>
      <Row>
        <CardElementContainer>
          <CardElement
            options={cardElementOpts}
            onChange={handleCardDetailsChange}
          />
        </CardElementContainer>
      </Row>
      {checkoutError && <CheckoutError>{checkoutError}</CheckoutError>}
      <Row>
        {/* TIP always disable your submit button while processing payments */}
        <SubmitButton disabled={isProcessing || !stripe}>
          {isProcessing ? "Processing..." : `Pay $${price}`}
        </SubmitButton>
      </Row>
    </form>
  )
}

export default CheckoutForm
