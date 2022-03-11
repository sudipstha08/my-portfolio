import React from "react"
import { Card, CardBody, Badge } from "reactstrap"
import { Fade } from "react-reveal"

interface Education {
  schoolName?: string
  subHeader?: string
  duration?: string
  desc?: string
  descBullets?: string[]
}

interface IProps {
  education: Education
}

const EdutionCard = ({ education }: IProps) => (
  <Fade right duration={1000} distance="40px">
    <Card className="card-lift--hover shadow mt-4">
      <CardBody>
        <div className="d-flex px-3">
          <div className="pl-4">
            <h5 className="text-info">{education.schoolName}</h5>
            <h6>{education.subHeader}</h6>
            <Badge color="info" className="mr-1">
              {education.duration}
            </Badge>
            <p className="description mt-3">
              {education.desc}
              <ul>
                {education?.descBullets?.map((desc) => (
                  <li key={desc}>{desc}</li>
                ))}
              </ul>
            </p>
          </div>
        </div>
      </CardBody>
    </Card>
  </Fade>
)

export { EdutionCard }
