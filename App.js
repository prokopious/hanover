import React from "react"
import Mains from "./components/Mains"
import Extras from "./components/Extras"
import Total from "./components/Total"
import { Provider } from "./Context"



export default function App() {
  return (
    <Provider>
      <div className="menu">
        <Mains meals={mains} />
        <aside className="aside">
          <Extras type="Sides" items={sides} />
          <Extras type="Drinks" items={drinks} />
        </aside>
        <Total />
      </div>
    </Provider>
  )
}
