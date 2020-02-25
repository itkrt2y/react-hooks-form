import * as React from "react"
import { render } from "react-dom"

export function App() {
  return <div>Hello World!</div>
}

document.addEventListener("DOMContentLoaded", () => {
  render(React.createElement(App), document.querySelector("#app"))
})