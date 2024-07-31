import React, { Component } from 'react';
import { withRouter } from './withRouter.js';
import {Container, Jumbotron, Row, Col, Card, Button } from 'react-bootstrap';

class Policies extends Component { 



    render(){
        return(
            <>
              <h2  id='policies'>Policies</h2>

              <p>Diversity & Inclusion</p>

              <p>Disabilities</p>

              <p>Lateness</p>

              <p>Collaboration</p>


              <p>Generative AI</p>
             </>
        )
    }
}



export default Policies;