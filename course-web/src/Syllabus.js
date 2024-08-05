import React, { Component } from 'react';
import { withRouter } from './withRouter.js';
import { syllabus, syllabus_intro } from './config.js';

import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw';

import { GiTurtle } from "react-icons/gi";

class Syllabus extends Component {
    state = {}

    componentDidMount() {
        let number = 0
        this.setState({
            'markdown': syllabus
                .split('\n').map(line => {
                    if (line.trim().startsWith('[P#X]')) {
                        let cells = line.split('[P#X]')
                        console.log(cells)
                        return `<div class='row'><div class='col-1'>[P#X]</div><div class='col-11'>${cells[1]} </div></div>`
                    } else {
                        return line
                    }
                })
                .join('\n')
                .replaceAll('\n\n', '###n').replaceAll('\n', '')
                .replaceAll('###n', '\n')
                .replace(/\[P#X\]/g, function () {
                    return `<font class='paper-index paper-index-li'>[P` + (++number) + ']</font>';
                })
        })


    }


    componentDidUpdate() {
        Array.from(document.links)
            .filter(link => link.hostname != window.location.hostname)
            .forEach(link => link.target = '_blank');
    }



    render() {
        return (
            <>
                <h2 id='syllabus'>Syllabus</h2>

                <p dangerouslySetInnerHTML={{ __html: syllabus_intro }}>
                </p>
                <div style={{ 'overflow-x': 'auto' }}>
                    <Markdown
                        rehypePlugins={[rehypeRaw]}
                        remarkPlugins={[remarkGfm]}>{this.state.markdown}</Markdown>
                </div>

            </>
        )
    }
}



export default Syllabus;