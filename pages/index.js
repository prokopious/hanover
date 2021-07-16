import Head from "next/head"
import Layout from "../components/Layout"
import LazyHero from "react-lazy-hero"
import App from "../App"
import Grid from "../components/Grid"
import Order from "../components/Order"
import { loadProducts } from "../public/js/load"

const wait = time => new Promise((resolve, reject) => setTimeout(resolve(console.log('shit')), time))
wait(300);
export default function Home() {
  return (
    <Layout>
      <div>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1"
          ></meta>
        </Head>

        <main>
          <LazyHero
            opacity={0.1}
            minHeight="75vh"
            imageSrc="https://images.pexels.com/photos/3756050/pexels-photo-3756050.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
          >
            <h1 className="her">FRESH BAKED GOODS</h1>
            <h4 className="text white 2xl">RIGHT TO YOUR DOOR</h4>
          </LazyHero>

          <Order />

          <div>
            {" "}
            <Grid />
          </div>
        </main>
      </div>
    </Layout>
  )
}
