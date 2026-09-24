import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const projects = [
  {
    title: "Personal Portfolio Site",
    description:
      "A clean portfolio website built with Gatsby and a custom blog layout to present work, writing, and CV information.",
  },
  {
    title: "Frontend UI Project",
    description:
      "A responsive landing page and marketing-style interface focused on product storytelling and modern design patterns.",
  },
  {
    title: "Blog and Content Platform",
    description:
      "A content-driven website built for publishing articles and personal updates with a minimal reading experience.",
  },
]

const ProjectsPage = ({ location }) => {
  return (
    <Layout location={location} title="Om Parhad">
      <SEO title="Projects" description="Projects by Om Parhad." />
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "2rem 1rem" }}>
        <h1>Projects</h1>
        <p>Here are a few project examples and work highlights.</p>

        {projects.map((project, index) => (
          <article
            key={project.title}
            style={{
              border: "1px solid #ddd",
              borderRadius: 8,
              padding: "1.25rem",
              marginBottom: "1rem",
            }}
          >
            <h2 style={{ marginTop: 0, marginBottom: 8 }}>{index + 1}. {project.title}</h2>
            <p style={{ marginBottom: 0 }}>{project.description}</p>
          </article>
        ))}

        <p>
          <Link to="/cv">Download my CV</Link>
        </p>
      </div>
    </Layout>
  )
}

export default ProjectsPage
