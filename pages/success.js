import styled from "@emotion/styled"
import Confetti from "react-confetti"
import { useState, useEffect } from "react"
import Link from 'next/link'

import Layout from "../components/Layout"
import Row from "../components/prebuilt/Row"

const Container = styled.div`
  width: 475px;
  margin: 30px auto 0 auto;
  text-align: center;
  color: #fff;
`

const Title = styled.div`
  font-size: 38px;
`

const Message = styled.div`
  margin-top: 40px;
`

export default () => {
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      setWidth(window.innerWidth)
      setHeight(window.innerHeight)
    }, 100)
  })

  return (
    <div id="cent">
      <div id="succ">Success!</div>
      <Link  href="/"><a><div id='home'>back to home</div></a></Link>
      <style jsx>{`
        #cent {
          position: fixed;
text-align: center;
          top: 50%;
          padding-bottom: 80px;
          left: 50%;
          /* bring your own prefixes */
          transform: translate(-50%, -50%);
        }
#home {
  font-size: 14px;
  text-transform: uppercase;
}
        #succ {
          font-size: 30px;
          font-weight: 900;
        }
      `}</style>
    </div>
  )
}
