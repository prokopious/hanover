import Image from 'next/image'

export default function Hero() {

return (


<div className="hero">
    <div className="hero-text">
        <h1><b>FRESH BAKED GOODS</b></h1>
        <p>right to your door</p>
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
            font-size: calc(20px + 1vw);
            margin: 0;
        }

        p {
            font-size: calc(15px + 1vw);
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