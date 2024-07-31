import React, { Component } from 'react';
import { withRouter } from './withRouter.js';
import {Container, Jumbotron, Row, Col, Card, Button } from 'react-bootstrap';
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw';

const markdown = `
Each class: 2-3 presentations (20-30m); sometimes Fumeng will give a lecture.  
Sign up for next week  
Before 9AM on the class day, submit 1-2 questions for each paper.
Except for bidding, submit things on Canvas but view information here (will try to sync these)  

10%	weekly reading responses    
13.0%	course presentations     
10.0%	H1-2: design homeworks    
5.0%	H3 outline    
1.0%	H3 abstract (no late policy; not submitting on time will lead to an 0 of H4)  
1.0%	H3 bidding    
15.0%	H3 paper (no late policy)  
10.0%	H4 write 2 peer reviews   
20.0%	Final exam (take-home): The final revised paper and review response (no late policy)    
15%	Midterm exam (take-home):  2-3  questions  based on previous reading, 1 open-ended question  
`

class Howitworks extends Component { 

    state = {}

    componentDidMount() {
        let number = 0
        this.setState({'markdown': markdown})

       
    }

    componentDidUpdate(){
        Array.from(document.links)
        .filter(link => link.hostname != window.location.hostname)
        .forEach(link => link.target = '_blank');
    }



    render() {
        return (
            <>
                <h2  id='howitworks'>How things work</h2>

                <Markdown
                    rehypePlugins={[rehypeRaw]}
                    remarkPlugins={[remarkGfm]}>{markdown}</Markdown>

            </>
        )
    }
}



export default Howitworks;