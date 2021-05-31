import Head from "next/head"
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import Navbar2 from './Navbar2'

const stripePromise = loadStripe(process.env.PUBLISHABLE_KEY)

const Layout = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Elements stripe={stripePromise}><Navbar2/>
      <div className="mx-auto md:px-0 md:max-w-14xl min-h-screen">
        {children}</div>
        </Elements>
    </>
  )
}

export default Layout
