import React from "react"
import { Fade } from "react-reveal"
import { Container, Row } from "reactstrap"
import { experience } from "../../portfolio"
import { ExperienceCard } from "../../components"

const Experience = () => (
  <section className="section section-lg">
    <Container>
      <Fade left duration={1000} distance="40px">
        <div className="d-flex p-4">
          <div>
            <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
              <i className="ni ni-briefcase-24 text-info" />
            </div>
          </div>
          <div className="pl-4">
            <h4 className="display-3 text-info">Experience</h4>
          </div>
        </div>
        <Row className="row-grid align-items-center">
          {experience?.map((data) => (
            <ExperienceCard data={data} key={`exp${Math.random() * 9999}`} />
          ))}
        </Row>
      </Fade>
    </Container>
  </section>
)

export default Experience
