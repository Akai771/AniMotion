import React from "react"
import Routing from "./Components/Router/Routing"
import { inject } from '@vercel/analytics';

function App() {
  inject()
  return (
    <>
      <Routing/>
    </>
  )
}

export default App
