import styles from "../styles/Grid.module.css"
import useCart from "../hooks/use-cart"
import useFetch from "../hooks/useFetch"
import { FiPlusSquare } from "react-icons/fi"
import { FiMinusSquare } from "react-icons/fi"

export default function Grid2() {
    const { addToCart, removeFromCart } = useCart()
    const { data, status } = useFetch('https://primavera-spring-058cb888894c.herokuapp.com/api/products')

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