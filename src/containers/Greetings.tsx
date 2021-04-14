import React, { useEffect } from 'react'
import { Fade } from 'react-reveal'
import { Button, Container, Row, Col } from 'reactstrap'
import { greetings } from '../portfolio'
import code from '../assets/lottie/coding.json'
import GreetingLottie from '../components/DisplayLottie'
import SocialLinks from '../components/SocialLinks'

const Greetings = () => {
  useEffect(() => {
    document.documentElement.scrollTop = 0
    document.scrollingElement.scrollTop = 0
  }, [])

  var TxtType = function (el, toRotate, period) {
    this.toRotate = toRotate
    this.el = el
    this.loopNum = 0
    this.period = parseInt(period, 10) || 2000
    this.txt = ''
    this.tick()
    this.isDeleting = false
  }

  TxtType.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length
    var fullTxt = this.toRotate[i]

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1)
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1)
    }

    this.el.innerHTML = `<span class="typewriter-text">${this.txt}</span>`

    var that = this
    var delta = 200 - Math.random() * 100

    if (this.isDeleting) {
      delta /= 2
    }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period
      this.isDeleting = true
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false
      this.loopNum++
      delta = 500
    }

    setTimeout(function () {
      that.tick()
    }, delta)
  }

  window.onload = function () {
    var elements = document.getElementsByClassName('typewrite')
    for (var i = 0; i < elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-type')
      var period = elements[i].getAttribute('data-period')
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period)
      }
    }
    // INJECT CSS
    var css = document.createElement('style')
    css.type = 'text/css'
    css.innerHTML = '.typewrite > .typewriter-text { color: #fff }'
    document.body.appendChild(css)
  }

  return (
    <Fade top duration={1000} distance="40px">
      <main ref="main">
        <div className="position-relative">
          <section className="section section-lg section-shaped pb-250">
            <div className="shape shape-style-1 bg-gradient-info">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            <Container className="py-lg-md d-flex">
              <div className="col px-0">
                <Row>
                  <Col lg="6">
                    <h1 className="display-3 typewriter-wrapper">
                      <a
                        href=""
                        className="typewrite"
                        data-period="2000"
                        data-type='["Hello, I&apos;m Sudip", "I am a Software Engineer", "Nice to meet you, please take a look around"]'
                      >
                        <span className="typewriter-effect text-white"></span>
                      </a>
                    </h1>
                    <p className="lead text-white">{greetings.description}</p>
                    <SocialLinks />
                    <div className="btn-wrapper my-4">
                      <Button
                        className="btn-white btn-icon mb-3 mb-sm-0 ml-1"
                        color="default"
                        href={greetings.resumeLink}
                      >
                        <span className="btn-inner--icon mr-1">
                          <i className="fa fa-file" />
                        </span>
                        <span className="btn-inner--text">See My Resume</span>
                      </Button>
                    </div>
                  </Col>
                  <Col lg="6">
                    <GreetingLottie animationData={code} />
                  </Col>
                </Row>
              </div>
            </Container>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
          {/* 1st Hero Variation */}
        </div>
      </main>
    </Fade>
  )
}

export default Greetings
