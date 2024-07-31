import React, { Component } from 'react';
import { withRouter } from './withRouter.js';
import {Container, Jumbotron, Row, Col, Card, Button } from 'react-bootstrap';

class People extends Component { 



    render(){
        return(
            <>
            <h2  id='staff'> Teaching staff</h2>
            <Row>
                <Card className='people-card'>
               <Card.Img variant="top" src="https://www.fmyang.com/img/FumengYang-2024-2-lg.jpg" />
               <Card.Body>
                 <Card.Title><a href="www.fmyang.com" target='_blank' className='normal-a'>Fumeng Yang</a></Card.Title>
                 <Card.Text>
                 Instructor<br/>
                 Pronouns: she/her <br/>
                 Office hour: MW 1-2 ET
                 </Card.Text>
               </Card.Body>
               </Card>
             </Row>
             </>
        )
    }
}



export default People;