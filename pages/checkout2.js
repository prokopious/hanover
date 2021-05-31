import { Provider } from "../Context";

import React, { useContext } from "react";
import { Context } from "../Context";
import data from "../data";
import Total from '../components/Total'
import CheckoutForm from "../components/CheckoutForm"
import Layout from "../components/Layout"

export default function Cat() {

 
    return (

<Provider>
            <Layout>
    <Total />
            </Layout></Provider>
 
  
    )
}