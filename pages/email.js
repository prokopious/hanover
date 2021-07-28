import Head from "next/head";
import ClientOnly from "../components/ClientOnly";
import Contact from "../components/Contact";
import Layout from "../components/Layout"

export default function ClientSide() {
  return (
    <Layout><div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
  
        <ClientOnly>
          <Contact />
        </ClientOnly>
      </main>


    </div></Layout>
  );
}
﻿