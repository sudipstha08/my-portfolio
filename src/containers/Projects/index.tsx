import React from "react"
import { Fade } from "react-reveal"
import { Container, Row } from "reactstrap"
import { projects } from "../../portfolio"
import { ProjectCard } from "../../components"

const Projects = () => (
  <section className="section mb-5">
    <Container>
      <Fade bottom duration={1000} distance="40px">
        <div className="d-flex p-4">
          <div>
            <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
              <i className="ni ni-laptop text-info" />
            </div>
          </div>
          <div className="pl-4">
            <h4 className="display-3 text-info">Projects</h4>
          </div>
        </div>
        <Row className="row-grid align-items-center">
          {projects.map((data) => (
            <ProjectCard data={data} key={`project${Math.random() * 9999}`} />
          ))}
        </Row>
      </Fade>
    </Container>
  </section>
)

export default Projects
