import React from "react"
import Layout from "../components/layout"

// Affiche le détail d'une émission
const Show = ({ pageContext }) => {
  const { show } = pageContext
  return (
    <Layout>
      <h2>{show.title}</h2>
      <h3>{show.collection.name} #{show.ref} / {show.release_date}</h3>
    </Layout>
  )
}

export default Show