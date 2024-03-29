import Link from "next/link"
import { useState } from "react"

export default function Navbar() {
  const [active, setActive] = useState(false)

  const handleClick = () => {
    setActive(!active)
  }

  return (
    <>
      <nav className="flex items-center flex-wrap bg-black p-3 ">
        <Link  className="inline-flex items-center p-2 mr-4 " href="/">
            <svg
              viewBox="0 0 47.342 47.342"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-current text-white h-8 w-8 mr-2"
              id="sv"
            >
              <path
                d="M39.645,15.841c-0.014-0.008-0.025-0.017-0.038-0.025c-0.29-0.191-0.664-0.202-0.964-0.026
			c-0.301,0.176-0.475,0.507-0.447,0.854c0.21,2.857-0.008,5.423-0.225,7.063c-0.021,0.151-0.147,0.265-0.301,0.271
			c-0.152,0.005-0.285-0.103-0.316-0.251c-0.871-4.412-2.584-8.213-3.656-10.305c-0.116-0.226-0.32-0.393-0.564-0.462
			c-2.828-0.793-5.451-1.07-7.082-1.158c-0.287-0.016-0.564,0.105-0.75,0.327c-0.184,0.221-0.252,0.517-0.186,0.797
			c0.995,4.145,0.73,8.72,0.49,11.043c-0.016,0.149-0.135,0.267-0.283,0.279c-0.148,0.014-0.286-0.081-0.327-0.224
			c-0.784-2.719-2.561-8.494-4.32-11.5c-0.179-0.306-0.52-0.481-0.872-0.448c-2.388,0.223-4.684,0.566-6.73,1.493
			c-0.001,0-0.001,0-0.002,0c-0.405,0-0.646,0.435-0.579,0.863c0.596,3.762,0.32,7.263,0.045,9.34
			c-0.021,0.151-0.146,0.232-0.3,0.237c-0.152,0.005-0.286-0.117-0.316-0.268c-0.563-2.852-1.48-5.458-2.348-7.506
			c-0.126-0.298-0.374-0.531-0.682-0.633c-0.307-0.103-0.643-0.07-0.923,0.093C2.459,18.895,0,22.635,0,26.454
			c0,8.124,10.598,9.087,23.671,9.087c13.073,0,23.67-0.963,23.67-9.087C47.344,22.953,45.159,19.508,39.645,15.841z"
              />
            </svg>
            <span className="text-xl text-white font-bold uppercase tracking-wide">
              Hanover Bakery
            </span>
        </Link>
        <button
          className=" inline-flex p-3 hover:bg-gray lg:hidden text-white ml-auto hover:text-white outline-none"
          onClick={handleClick}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
        <div
          className={`${
            active ? "" : "hidden"
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
            {/* <Link href="https://main.d1m1687zph9ts8.amplifyapp.com/">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 text-white font-bold items-center justify-center  hover:text-white ">
                Admin
              </a>
            </Link> */}
            <Link  className="lg:inline-flex lg:w-auto w-full px-3 py-2 text-white font-bold items-center justify-center hover:bg-gray hover:text-white" href="/email">
                Contact
            </Link>
          </div>
        </div>
        <style jsx>{`
          * {
            color: #f8f0e3;
          }
        `}</style>
      </nav>
    </>
  )
}
