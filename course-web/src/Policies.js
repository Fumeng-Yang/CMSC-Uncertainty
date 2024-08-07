import React, { Component } from 'react';
import { withRouter } from './withRouter.js';
import { Container, Jumbotron, Row, Col, Card, Button } from 'react-bootstrap';
import { ai_policy, collaboration_policy, late_policy, support_text } from './config.js'

class Policies extends Component {



    render() {
        return (
            <>
                <h2 id='policies'>Policies</h2>

               
                <h6>Lateness</h6>
                <p dangerouslySetInnerHTML={{__html:late_policy}}></p>

                <h6>AI usage</h6>
                <p dangerouslySetInnerHTML={{__html:ai_policy}}></p>


                <h6>Collaboration</h6>
                <p dangerouslySetInnerHTML={{__html:collaboration_policy}}></p>

                
                <h6>Diversity & Inclusion</h6>
                <p dangerouslySetInnerHTML={{__html:support_text}}></p>

            </>
        )
    }
}



export default Policies;