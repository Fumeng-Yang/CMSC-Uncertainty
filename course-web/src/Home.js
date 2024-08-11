import React, { Component } from 'react';
import { Navbar, Nav, Container, Jumbotron, Row, Col, Button } from 'react-bootstrap';

import { withRouter } from './withRouter.js';
import Syllabus from './Syllabus.js';
import People from './People.js';
import Policies from './Policies.js';

import { acknowledgement, course_full_name, course_location, course_number, course_objective, course_objective_long, course_short_name, course_sub_name, course_time } from './config.js';
import Howitworks from './Howitwork.js';

import ggdist from './img/ggdist.png'
import llm from './img/llm-papers.png'
import forecasts2020 from './img/forecasts2020.png'
import { format } from 'date-fns';
class Home extends Component {

    render() {
        return (
            <>
                <Navbar bg="light" expand="lg">
                    <Container className="mt-1">
                        <Navbar.Brand href="#">{course_number}</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto">
                                <Nav.Link href="#">Home</Nav.Link>
                                <Nav.Link href="#howitworks">HTW</Nav.Link>
                                <Nav.Link href="#syllabus">Syllabus</Nav.Link>
                                <Nav.Link href="#crew">Crew</Nav.Link>
                                <Nav.Link href="#policies">Policies</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <Container className="mt-5">
                    <div className="text-left">
                        <h1 className="display-4">{course_full_name}</h1>
                        <p className="lead">{course_sub_name}</p>

                        <p> Time: {course_time}, Location: {course_location} <br/>
                         Last update: {format(new Date(document.lastModified), 'MM/dd/yyyy kk:mm')} 
                         </p>
                        <Row className='desktop-only' >
                            <Col lg={4}><img src={forecasts2020} className='headimage'></img> <figcaption>https://projects.fivethirtyeight.com/2020-election-forecast/</figcaption> </Col>
                            <Col lg={4}><img src={ggdist} className='headimage'></img> <figcaption>https://mjskay.github.io/ggdist/</figcaption> </Col>
                            <Col lg={4}><img src={llm} className='headimage'></img><figcaption>https://analyticsindiamag.com/ai-origins-evolution/the-rise-of-lame-llm-papers/</figcaption> </Col>

                        </Row>

                        <br />
                        <p dangerouslySetInnerHTML={{ __html: course_objective_long }}></p>
                        {/* <p dangerouslySetInnerHTML={{__html:course_objective}}></p> */}


                        <hr className="my-4" />
                        <Howitworks />

                        <Syllabus />

                        <People />

                        <Policies />

                        <>
                            <h2 id='policies'>Acknowledgements</h2>
                            <p dangerouslySetInnerHTML={{ __html: acknowledgement }}></p>
                        </>

                    </div>


                </Container>

                <footer className="footer mt-auto py-3 bg-light">
                    <Container className="text-center">
                        <span className="text-muted">© 2024 University of Maryland, College Park.</span>
                    </Container>
                </footer>
            </>
        )
    }
}



export default withRouter(Home);