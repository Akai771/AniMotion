import React from "react"
import Routing from "./Components/Router/Routing"
import { inject } from '@vercel/analytics';
import { SpeedInsights } from "@vercel/speed-insights/next"

function App() {
  inject()
  return (
    <>
      <SpeedInsights />
      <Routing/>
    </>
  )
}

export default App
