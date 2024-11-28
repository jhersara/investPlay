import { React } from 'react'

export default function Navbar() {
  return (
    <nav>
        <div>
            <h1>InvestPlay</h1>
        </div>
        <ul>
            <li><a href="HomePage">Home</a></li>
            <li><a href="PriceNews">Precios y Noticias</a></li>
            <li><a href="BestPortafolios">Best Portafolios</a></li>
        </ul>
        <button>Sign In</button>
    </nav>
  )
}
