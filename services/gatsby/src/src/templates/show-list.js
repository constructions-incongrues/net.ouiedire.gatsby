import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"

// Affiche la liste des émissions
const ShowList = ({ pageContext }) => {
  const shows = pageContext.data.allDirectusShow.nodes
  const list = shows.map((show) =>
    <li key={show.id} class="main-list col-sm-6">
      <h6 class="show-number background-white">
        {show.ref.padStart(3, 0)}
        <a href='./single.html' class="black"></a>
      </h6>
      <figure class="show-visual-container">
        <div class="show-visual">
            <Link to={`/emission/${show.collection.slug}-${show.ref}`} />
        </div>
      </figure>
      <div class="djs-title-container">
        <div class="djs-container">
          {show.curators.map((curator) => (
            <h6 class="djs background-white">
              {curator.name}
              <Link to={`/curator/${curator.slug}`} />
            </h6>
          ))}
        </div>
        <h6 class='title background-white pink'>
            {show.title}
            <Link to={`/emission/${show.collection.slug}-${show.ref}`} />
        </h6>
      </div>
    </li>
  )
  return (
    <Layout>
      <ul class="list-container row">
        {list}
      </ul>
    </Layout>
  )
}

export default ShowList