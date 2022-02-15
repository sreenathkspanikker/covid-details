import React from 'react'
import { Button, ButtonGroup, Col, Figure, Row } from 'react-bootstrap';
import * as Components from "../components";
import ImgSreenath from '../assets/images/img-sreenath.jpeg'

export const About = () => {
  return (
    <Components.Cards className="app-about">
        <Row>
            <Col sm={4}>
                <Figure>
                    <Figure.Image src={ImgSreenath} fluid />
                </Figure>
            </Col>
            <Col sm={8}>
                <article>
                    <Components.Title>
                        SREENATH KS PANIKKER
                    </Components.Title>
                    <h4>Application Development Senior Analyst</h4>
                    <p>
                        I'm an experienced Front-end engineer with advanced level React.Js, Redux, Angular.Js 2x, WebSocket, Git, REST API, JavaScript, JavaScript frameworks, HTML5, SASS, SCSS & Bootstrap. I have worked on several high-profile, dynamically large scale projects over the past 5years. I've had exposure in working with private and small business sectors, and numerous contracts during the past years.

                        I am passionate about clean and semantic code, new technologies, responsive design, learning and updating my skills with the latest technologies, reading/practising about the latest tips and tricks in front end web development. 

                        I am never content to just sit back and let life happen, I want to participate and engage in new things where I can. My ideal working environment would be working with a team of individuals with various skills, backgrounds, capabilities and knowledge, yet have individual goals and expectations and anything I can do to keep moving and keep learning, and getting better, one day at a time!

                        React | React Native | Gatsby | Next | Vue | Nuxt | Angular | Redux | Scrum | Agile | Tensor-flow | Node | Html | Sass | JavaScript | GraphQL | Rest API | Web Socket | Rabbit MQ | Bootstrap | Git | AWS | CICD | Jest
                    </p>
                    <ButtonGroup>
                        <a className='btn btn-outline-primary linkedin' href='https://www.linkedin.com/in/sreenathks/' target="_blank" rel="noreferrer">
                            <Components.Icon name="linkedin"/>
                        </a>
                        <a className='btn btn-outline-primary github' variant='outline-primary github' href='https://github.com/sreenathkspanikker' target="_blank" rel="noreferrer">
                         <Components.Icon name="github"/>
                        </a>
                        <a className='btn btn-outline-primary facebook' href='https://www.facebook.com/sreenathkspanikker' target="_blank" rel="noreferrer">
                            <Components.Icon name="facebook"/>
                        </a>
                    </ButtonGroup>
                </article>
            </Col>
        </Row>
    </Components.Cards>
  )
}
