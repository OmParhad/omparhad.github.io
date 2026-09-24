import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const CVPage = ({ location }) => {
  return (
    <Layout location={location} title="Om Parhad">
      <SEO title="CV" description="Download Om Parhad's CV." />
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "2rem 1rem" }}>
        <h1>CV</h1>
        <p>
          You can download my CV below and review my background, skills, and experience.
        </p>

        <p>
          <a
            href="/cv/om-parhad-cv.pdf"
            download
            style={{
              display: "inline-block",
              padding: "0.75rem 1.25rem",
              background: "#1d4ed8",
              color: "#fff",
              borderRadius: 6,
              textDecoration: "none",
            }}
          >
            Download CV (PDF)
          </a>
        </p>

        <hr style={{ margin: "2rem 0" }} />

        <h2>Profile</h2>
        <p>
          I am a web developer focused on building clean, responsive, and user-friendly digital experiences.
        </p>

        <h2>Core Skills</h2>
        <ul>
          <li>HTML, CSS, JavaScript</li>
          <li>React and Gatsby</li>
          <li>Responsive web design</li>
          <li>UI implementation and frontend optimization</li>
        </ul>

        <p>
          <Link to="/projects">View projects</Link>
        </p>
      </div>
    </Layout>
  )
}

export default CVPage
