import React, { Component } from 'react';
import { withRouter } from './withRouter.js';
import {Container, Jumbotron, Row, Col, Card, Button } from 'react-bootstrap';
import { FiExternalLink } from "react-icons/fi";
import ta from './img/huy.png'

class People extends Component { 



    render(){
        return(
            <>
            <h2  id='crew'> Teaching crew</h2>
            <Row>
                <Card className='people-card'>
               <Card.Img variant="top" src="https://www.fmyang.com/img/FumengYang-2024-2-lg.jpg" />
               <Card.Body>
                 <Card.Title><a href="https://www.fmyang.com" target='_blank' className='normal-a'>Fumeng Yang <FiExternalLink /></a></Card.Title>
                 <Card.Text>
                 Instructor<br/>
                 Pronouns: she/her <br/>
                 Hours: M after class to 4:30p<br/>
                 Office: IRB 2216 (for now)
                 </Card.Text>
               </Card.Body>
               </Card>

               <Card className='people-card'>
               <Card.Img variant="top" src={ta} />
               <Card.Body>
                 <Card.Title><a href='https://www.linkedin.com/in/huy-tran-nghiem/' target='_blank' className='normal-a'>Huy Nghiem <FiExternalLink /></a></Card.Title>
                 <Card.Text>
                 Teaching Assistant<br/>
                 Pronouns: he/him <br/>
                 Hours: Th 3-4p <br/>
                 Zoom meeting ID: huynghiem
                 </Card.Text>
               </Card.Body>
               </Card>
             </Row>
             </>
        )
    }
}



export default People;