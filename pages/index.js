import Head from "next/head"
import Layout from "../components/Layout"
import Grid2 from "../components/Grid2"
import Order from "../components/Order"
import Hero from "../components/Hero"
import prisma from '../lib/prisma';

export default function Home({ products }) {
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
          <Hero />

          <Order />

          <div>
            {" "}
            <Grid2 data={products} />
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

export const getStaticProps = async () => {
  const products = await prisma.product.findMany();
  console.log(products)
  return {
    props: { products },
    revalidate: 10,
  };
};
