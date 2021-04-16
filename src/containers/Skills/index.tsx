import React, { Fragment } from "react"
import { Fade } from "react-reveal"
import { Container, Row, Col, UncontrolledTooltip } from "reactstrap"
import { skillsSection } from "../../portfolio"
import { DisplayLottie } from "../../components"
import webdev from "../../assets/lottie/webdev.json"

const Skills = () => (
  <Fade left duration={1000} distance="40px">
    <Container className="text-center my-5 section section-lg">
      <h1 className="h1">{skillsSection.title}</h1>
      <p className="lead">{skillsSection.subTitle}</p>
      <Row>
        <Col lg="6">
          <DisplayLottie animationData={webdev} />
        </Col>
        <Col lg="6">
          <div className="d-flex justify-content-center flex-wrap mb-5">
            {skillsSection?.softwareSkills?.map((skill) => (
              <Fragment key={skill.skillName}>
                <div
                  className="icon icon-lg icon-shape shadow rounded-circle mb-5"
                  id={skill.skillName}
                  style={{ cursor: "pointer", margin: "0 3px" }}
                >
                  <span
                    className="iconify"
                    data-icon={skill.fontAwesomeClassname}
                    data-inline="false"
                  ></span>
                </div>
                <UncontrolledTooltip
                  delay={0}
                  placement="bottom"
                  target={skill.skillName}
                >
                  {skill.skillName}
                </UncontrolledTooltip>
              </Fragment>
            ))}
          </div>
          <div>
            {skillsSection.skills.map((skill) => (
              <p key={`skills${Math.random() * 9999}`}>{skill}</p>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  </Fade>
)

export default Skills
