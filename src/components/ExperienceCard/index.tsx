import React, { useState, createRef } from "react"
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardHeader,
  Col,
} from "reactstrap"
import ColorThief from "colorthief"
import { Fade } from "react-reveal"

interface IProps {
  data: any
}

const ExperienceCard: React.FC<IProps> = ({ data }) => {
  const [colorArrays, setColorArrays] = useState([])
  const imgRef = createRef()

  function getColorArrays() {
    const colorThief = new ColorThief()
    setColorArrays(colorThief.getColor(imgRef.current))
  }

  function rgb(values) {
    return typeof values === "undefined" ? null : `rgb(${values.join(", ")})`
  }

  return (
    <Col lg="4">
      <Fade left duration={1000} distance="40px">
        <Card
          style={{ flex: 1 }}
          className="shadow-lg--hover shadow border-0 text-center rounded"
        >
          <CardHeader style={{ background: rgb(colorArrays) }}>
            <h5 className="text-white">{data.company}</h5>
          </CardHeader>
          <CardBody className="py-5">
            <img
              ref={imgRef as React.RefObject<HTMLImageElement>}
              className=" bg-white rounded-circle mb-3 img-center img-fluid shadow-lg "
              src={data.companylogo}
              width="100"
              height="100"
              onLoad={() => getColorArrays()}
              alt="experience-card"
            />
            <CardTitle tag="h5">{data.role}</CardTitle>
            <CardSubtitle>{data.date}</CardSubtitle>
            <CardText className="description my-3 text-left">
              {data?.desc}
              <ul>
                {data?.descBullets?.map((desc) => (
                  <li key={desc}>{desc}</li>
                ))}
              </ul>
            </CardText>
            <div></div>
          </CardBody>
        </Card>
      </Fade>
    </Col>
  )
}

export { ExperienceCard }
