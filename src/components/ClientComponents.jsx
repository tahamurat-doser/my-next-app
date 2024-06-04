
"use client"

import { Children } from "react"
import ServerComponents from "./ServerComponents"

console.log("This is client component")

const ClientComponents = ({children}) => {
  return (
    <div>
      ClientComponents
      {children}
    </div>
  )
}

export default ClientComponents