import React, { Component } from 'react';
import { withRouter } from './withRouter.js';
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw';

import { GiTurtle } from "react-icons/gi";

const markdown = `|&#128034;&#128007;| Week | Date | Topic | Reading list / Todo | Assignments |
|--|-------|-----------|------------------------|-------------------------------------|------------------------|
|| 0 | 08/26/24 | Logistics (25m) <br/>  Warm-up exercises (50m) | Bring a visualization you've seen and prepare a short explanation (5m) for what it is and why you like or dislike it | |
| | | 08/28/24 | Warm-up exercises (25m) <br/> Lecture: quantitative analyses (50m) | Bring a visualization you've seen and prepare a short explanation (5m) for what it is and why you like or dislike it  | |
| | 1 | 09/02/24 | Labor day (no class) | | |
| | | 09/04/24 | Graphical perception | [P#X] Graphical Perception: Theory, Experimentation, and Application to the Development of Graphical Method  [[link]](https://faculty.washington.edu/aragon/classes/hcde511/s12/readings/cleveland84.pdf) <br/> [P#X] Visualization Analysis & Design (Chapter 5 Marks and Channels)  [[link]](https://paul.zhdk.ch/mod/resource/view.php?id=26808&lang=en) <br/> [P#X] Rethinking the Ranks of Visual Channels  [[link]](https://arxiv.org/abs/2107.11367) [reviews] <br/> [P#X] The Risks of Ranking: Revisiting Graphical Perception to Model Individual Differences in Visualization Performance  [[link]](https://mucollective.northwestern.edu/files/2022-perception-individual-differences.pdf) | H1 out <br/>H3 draft out|
| | 2 | 09/09/24 | Quantative results I - NHST | [P#X] Rethinking Statistical Analysis Methods for CHI  [[link]](https://judyrobertson.typepad.com/files/chi2012_submission_final.pdf) | |
| | | 09/11/24 | Quantative results II - Confidence Intervals & Bayesian methods | [P#X] Fair Statistical Communication in HCI  [[link]] <br/> [P#X] Researcher-centered design of statistics: Why Bayesian statistics better fit the culture and incentives of HCI  [[link]] <br/> [P#X] Can Visualization Alleviate Dichotomous Thinking? Effects of Visual Representations on the Cliff Effect  [[link]] | |
| |  3 | 09/16/24 | XAI I: Interpretability & explaninability | |  |
| | | 09/18/24 | XAI II: Model architectures | [P#X] Visual analytics in deep learning: An interrogative survey for the next frontiers  [[link]] | H1 due; H2 out |
| | 4 | 09/23/24 | XAI III: Model outputs  |  [P#X] CNN explainer: learning convolutional neural networks with interactive visualization  [[link]] | |
| | | 09/25/24 | (continued)  <br/>  Lecture: how to write a paper (30m) | | |
| | 5 | 09/30/24 | Uncertainty Visualization I - Reasoning about uncertainty | [P#X] Risk and Uncertainty Communication  [[link]] <br/> [P#X] Fundamentals of Data Visualization (Chapter 16)  [[link]] <br/>[P#X] Decision making under uncertainty (TBD which one)  [[link]] | |
| | | 10/02/24 | (continued) | | H2 due;  H3 outline due|
| | 6 | 10/07/24 | Uncertainty Visualization II - Probalistic Forecasts | [P#X] Projecting Confidence: How the Probabilistic Horse Race Confuses and Demobilizes the Public  [[link]] <br/> [P#X] Swaying the Public? Impacts of Election Forecast Visualizations on Emotion, Trust, and Intention in the 2022 U.S. Midterms  [[link]] <br/> [P#X] In Dice We Trust: Uncertainty Displays for Maintaining Trust in Election Forecasts Over Time   [[link]] <br/> [P#X] The Backstory to “Swaying the Public”: A Design Chronicle of Election Forecast Visualizations  [[link]] <br/> [P#X] Watching the Election Sausage Get Made: How Data Journalists Visualize the Vote Counting Process in US Elections [[link]]  | |
| | | 10/09/24 | (continued) | [P#X] When (Ish) Is My Bus?: User-Centered Visualizations of Uncertainty in Everyday, Mobile Predictive Systems Uncertainty Displays Using Quantile Dotplots or CDFs Improve Transit Decision-Making  [[link]] <br/> [P#X] Multiple Forecast Visualizations (MFVs): Trade-Offs in Trust and Performance in Multiple COVID-19 Forecast Visualizations <br/> [P#X] Non-Expert Interpretations of Hurricane Forecast Uncertainty Visualizations  [[link]]  <br/> [P#X] Visual Reasoning Strategies for Effect Size Judgments and Decisions  [[link]] |  |
| | 7 | 10/14/24 | IEEE VIS (no class) | Check out the conference program [[link]](https://ieeevis.org/year/2024/info/week-at-a-glance) | H3 abstract due; midterm out |
| | | 10/16/24 | IEEE VIS (no class) | Check out the conference program [[link]](https://ieeevis.org/year/2024/info/week-at-a-glance)  | midterm due on Friday |
| | 8 | 10/28/24 | Uncertainty Visualization III - Tree / Graph Visualization | [P#X] Perception of Line Attributes for Visualization | H3 bidding out |
| | | 10/30/24 | (continued)  <br/>  Lecture: how to write a review (30m) | | |
| | 9 | 11/04/24 | LM I - LLM Uncertainty | that CHI paper | H3 bidding due <br/>  |
| | | 11/06/24 | (continued)  <br/> Lecture: how to respond to reviews (30m) | | |
| | 10 | 11/11/24 | LM II - LMM Uncertainty | vila  [[link]] [review] | |
| | | 11/13/24 | | | |
| | 11 | 11/18/24 | Animated design   | |  H3 paper due |
| | | 11/20/24 | Slots for project presentations | |  H4 out  |
| | 12 | 11/25/24 | Slots for project presentations (if needed) | | |
| | | 11/27/24 | Thanksgiving (no class) | | |
| | 13 | 12/02/24 | Slots for project presentations | | |
| | | 12/04/24 | Slots for project presentations | | |
| | 14 | 12/09/24 | Reflection and Q&A | | H4 due |
| | Final | 12/11/24 | | Final exam: Reviews released |  |
| | | 12/17/24 | |  Final exam: The revised paper and responses due | |
`
class Syllabus extends Component {
    state = {}

    componentDidMount() {
        let number = 0
        this.setState({'markdown': markdown.replace(/#X/g, function () {
            return ++number;
        })})

       
    }


    componentDidUpdate(){
        Array.from(document.links)
        .filter(link => link.hostname != window.location.hostname)
        .forEach(link => link.target = '_blank');
    }



    render() {
        return (
            <>
                <h2  id='syllabus'>Syllabus</h2>

                <p>&#128007; = the syllabus above this point is finalized;  &#128034; = where we are in the semester</p>

                <Markdown
                    rehypePlugins={[rehypeRaw]}
                    remarkPlugins={[remarkGfm]}>{this.state.markdown}</Markdown>

            </>
        )
    }
}



export default Syllabus;