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
            .replaceAll('[link]', '<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>')
                .split('\n').map(line => {
                    if (line.trim().startsWith('[P#X]')) {
                        let cells = line.split('[P#X]')
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