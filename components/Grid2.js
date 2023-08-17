import styles from "../styles/Grid.module.css"
import useCart from "../hooks/use-cart"
import { useEffect } from 'react'
import useFetch from "../hooks/useFetch"
import { FiPlusSquare } from "react-icons/fi"
import { FiMinusSquare } from "react-icons/fi"

export default function Grid2() {
    const { addToCart, removeFromCart } = useCart()
    const { data, status } = useFetch('https://primavera-spring-058cb888894c.herokuapp.com/api/products')


    // const products = [
    //     {

    //         "description": "A delicious vanilla.",
    //         "id": "Ice Cream",
    //         "image": "df",
    //         "price": 23,
    //         "title": "Vanilla ice cream."
    //     },
    //     {

    //         "description": "Deer Tracks.",
    //         "id": "Deer Tracks",
    //         "image": "df",
    //         "price": 23,
    //         "title": "A new blend of cream and milk."
    //     },
    //     {

    //         "description": "Cake batter ice cream to die for.",
    //         "id": "Cake Batter",
    //         "image": "df",
    //         "price": 21,
    //         "title": "Cake Batter"
    //     }
    // ]

    // let string = JSON.stringify(data)

    return (
        <div>
            {status == 'fetching' && <div>loading...</div>}
            {status == 'fetched' && <div className={styles.grid}>
                {
                    data.map(product => {
                        console.log(data)
                        let pricePerUnit = product.price
                        let id = product.id
                        return (
                            <div className="box">
                                <div id="title">{product.title}</div>
                                <div className="menu" key={product.id}>
                                    <div id="price">${product.price}</div>
                                    <div>
                                        <button className="butt" onClick={() => addToCart({ id, pricePerUnit })}>
                                            <FiPlusSquare />
                                        </button>
                                    </div>
                                    <div>
                                        <div>
                                            <button
                                                className="butt"
                                                onClick={() => removeFromCart({ id })}
                                            >
                                                <FiMinusSquare />
                                            </button>
                                        </div>
                                    </div>{" "}
                                </div>
                                <p id="description">{product.description}</p>
                            </div>
                        )
                    })}
            </div>
            }
            <style jsx>{`
      @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300&display=swap');
        div, p {
          font-family: 'Josefin Sans', sans-serif;
        }
        
        `}</style>
        </div>
    )
}