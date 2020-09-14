import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"

// Affiche la liste des émissions
const ShowList = ({ pageContext }) => {
  const shows = pageContext.data.allDirectusShow.nodes
  const list = shows.map((show) =>
    <li key={show.id}>
      {show.collection.name} #{show.ref} : &nbsp;
      <Link to={`/emission/${show.collection.slug}-${show.ref}`} >{show.title}</Link>
      &nbsp;({show.release_date})
    </li>
  )
  return (
    <Layout>
      <h2>Liste des émissions</h2>
      <ul>
        {list}
      </ul>
    </Layout>
  )
}

export default ShowList