import React, { Component } from 'react';
import { withRouter } from './withRouter.js';
import { assignments, howitworks } from './config.js'
import { Container, Jumbotron, Row, Col, Card, Button } from 'react-bootstrap';
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw';
import { LiaHandPointRight } from "react-icons/lia";


class Howitworks extends Component {

    state = {

    }

    componentDidMount() {
        let number = 0

        assignments.map(a => {
            a.divs.map(c => {

                if (c.long_requirement)
                    this.setState({ ['hw-' + c.id]: 'none' })
            })
        })

    }

    componentDidUpdate() {
        Array.from(document.links)
            .filter(link => link.hostname != window.location.hostname)
            .forEach(link => link.target = '_blank');
    }


    format(dec) {

        return (Math.round(dec * 100) + '%')

    }

    render() {
        return (
            <>
                <h2 id='howitworks'>How things work</h2>

                <p dangerouslySetInnerHTML={{ __html: howitworks }}></p>

                {assignments.map(a => {
                    return (<div className='div-howitworks'>
                        <h6>{a.name} {a.summary}</h6> 
                        {a.divs.map(c => {
                            return (
                                <Container>
                                    <Row>
                                    <div className='col-auto p-1' style={{'width': '50px'}}><span className='perc'>{this.format(c.perc)}</span> </div> 
                                    <div className='col-10 align-bottom' >
                                    <span dangerouslySetInnerHTML={{ __html: c.requirement }}></span>
                                    {c.long_requirement && <span className='button-detail' onClick={() => {
                                        let display = document.getElementById('hw-' + c.id).style.display

                                        if (display === 'none') this.setState({ ['hw-' + c.id]: 'block' })
                                        else this.setState({ ['hw-' + c.id]: 'none' })

                                    }}>
                                        {document.getElementById('hw-' + c.id) && this.state['hw-' + c.id] === 'none' && <span> <LiaHandPointRight/> more</span>}
                                        {document.getElementById('hw-' + c.id) && this.state['hw-' + c.id] != 'none' &&  <span> <LiaHandPointRight/> less</span>}
                                    </span>}
                                    {c.long_requirement && <span className='details' style={{ 'display': this.state['hw-' + c.id] }} id={'hw-' + c.id}
                                    
                                    dangerouslySetInnerHTML={{__html: c.long_requirement}}>
                                     
                                    </span>}</div>

                                    </Row>
                                   
                                </Container>
                            )
                        })}

                    </div>)
                })}

            </>
        )
    }
}



export default Howitworks;