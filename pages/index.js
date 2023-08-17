import Head from "next/head"
import Layout from "../components/Layout"
import LazyHero from "react-lazy-hero"
import Grid2 from "../components/Grid2"
import Order from "../components/Order"

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
            <h4 className="his">RIGHT TO YOUR DOOR</h4>
          </LazyHero>

          <Order />

          <div>
            {" "}
            <Grid2 />
          </div>
        </main>
      </div>
      <style jsx>{`
        .her {
          font-size: 30px;
          font-weight: 900;
        }

        .his {
          font-size: 20px;
          text-transform: lowercase;
        }

        @media only screen and (max-width: 600px) {
          .her {
            font-size: 18px;
            font-weight: 900;
          }

          .his {
            font-size: 16px;
            text-transform: lowercase;
          }
        }
      `}</style>
    </Layout>
  )
}
