import React, { Component } from 'react';
import { Navbar, Nav, Container, Jumbotron, Row, Col, Button } from 'react-bootstrap';

import { withRouter } from './withRouter.js';
import Syllabus from './Syllabus.js';
import People from './People.js';
import Policies from './Policies.js';
import { course_full_name, course_location, course_number, course_objective, course_objective_long, course_short_name, course_sub_name, course_time } from './config.js';
import Howitworks from './Howitwork.js';


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
                                <Nav.Link href="#staff">Staff</Nav.Link>
                                <Nav.Link href="#policies">Policies</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <Container className="mt-5">
                    <div className="text-left">
                        <h1 className="display-4">{course_full_name}</h1>
                        <p className="lead">{course_sub_name}</p>
                        <p >Time: {course_time}, Location: {course_location}</p>


                        <hr className="my-4" />
                        <p>{course_objective_long}</p>
                        <p>{course_objective}</p>

                        <hr className="my-4" />
                        <Howitworks/>

                        <Syllabus/>
                  
                        <People />

                        <Policies/>

                    </div>


                </Container>

                <footer className="footer mt-auto py-3 bg-light">
                    <Container className="text-center">
                        <span className="text-muted">© 2024 University of Maryland, College Park. </span>
                    </Container>
                </footer>
            </>
        )
    }
}



export default withRouter(Home);