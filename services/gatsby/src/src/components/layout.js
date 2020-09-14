import React from "react"
import { Link } from "gatsby"

// Layout par défaut
export default function Layout({ children }) {
  return (
    <main>
      <div style={{ margin: `0 auto`, maxWidth: 650, padding: `0 1rem` }}>
        <h1>
          <Link to="/">Ouïedire</Link>
        </h1>

        <div>
          {children}
        </div>
      </div>
    </main>
  )
}