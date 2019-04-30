import React, { Component } from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
class IndexPage extends Component {
  state = {
    works: [
      {
        title: 'Blog web with VueJs',
        image: require('../images/blog.png'),
        url: 'https://blog.minzard.xyz/',
        description: 'Creating blog fullstack website with Vuejs for front-end and express for back-end'
      },
      {
        title: 'E-commerce with VueJs',
        image: require('../images/e-commerce.png'),
        url: 'https://e-commerce.minzard.xyz/',
        description: 'E-commerce with technology VueJs are integrated with nodeJs, ExpressJs for back-end'
      },
      {
        title: 'Forum with VueJs',
        image: require('../images/overflow.png'),
        url: 'https://lag-overflow.firebaseapp.com/',
        description: 'Creating forum fullstack website integrated with nodeJs and ExpressJs'
      },
      {
        title: 'Movies with ReactJs',
        image: require('../images/movie.png'),
        url: 'https://movie.minzard.xyz/',
        description: 'Creating Movies website with react and integrated with api moviedb'
      }
    ]
  }
  render() {
    const { works } = this.state;

    return (
      <Layout>
        <SEO title="Home" keywords={[`minzard`, `minzard dillah`, `muhammad minzard dillah`]} />
        <h1 style={{ textAlign: 'center' }}>Featured Work</h1>
        <div className="containerCard">
          {works.map((work, index) => (
            <div key={index} className="card">
              <center>
                <div className="borderImage">
                  <a href={work.url} target="_blank" rel="noopener noreferrer">
                    <img src={work.image} alt={work.title}/>
                  </a>
                </div>
              </center>
              <a href={work.url} target="_blank" rel="noopener noreferrer">
                <h3>{work.title}</h3>
              </a>
              <p>{work.description}</p>
            </div>
          ))}
        </div>
        {/* <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <Link to="/page-2/">Go to page 2</Link> */}
      </Layout>
    )
  }
}

export default IndexPage;
