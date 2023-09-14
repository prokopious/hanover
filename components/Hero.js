import Image from 'next/image'

export default function Hero() {

return (


<div className="hero">
    <div className="hero-text">
        <h1>Fresh Baked Goods</h1>
        <p>Right to your door</p>
    </div>
    <style jsx>{`
        .hero {
            background-image: url("https://images.pexels.com/photos/3756050/pexels-photo-3756050.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260");
            background-size: cover;
            background-position: center;
            height: 70vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            animation: fadeInAnimation ease 1s;
            animation-iteration-count: 1;
            animation-fill-mode: forwards;
        }

        .hero-text {
            // background-color: rgba(255, 255, 255, 0.5);
            // border-radius: 10px;
            // padding: 10px;
            text-align: center;
        }

        h1 {
            font-size: 3rem;
            margin: 0;
        }

        p {
            font-size: 1.5rem;
            margin: 0;
        }
        @keyframes fadeInAnimation {
            0% {
                opacity: 0;
            }
            100% {
                opacity: 1;
             }
        }
    `}</style>
</div>

)


}