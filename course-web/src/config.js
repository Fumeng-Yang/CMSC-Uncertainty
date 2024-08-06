export const course_number = 'CMSC839E'
export const course_full_name = 'Advanced Topics in Human-Computer Interaction'
export const course_sub_name = 'Uncertainty Communication for Decision-making (Fall 24)'
export const course_short_name = 'uncertainty'
export const course_time = 'MW 2:00pm - 3:15pm'

export const course_objective_long = `
<p>
<b>Description</b>&#8212;This course covers Human-Computer Interaction (HCI) research topics focusing on model uncertainty and decision-making. We will cover a range of models, from linear regression to probabilistic forecasts and AI foundation models, and explore how to help human users understand and manage uncertainty in these computational models. Core topics include

<font class='topic'>statistical communication</font>, 
<font class='topic'>explanability</font>, 
<font class='topic'>decision-making</font>, 
<font class='topic'>uncertainty visualization</font>, and 
<font class='topic'>LLM uncertainty</font>.

The course format includes a combination of presentations, discussions, and lectures. 
 

</p>

<p>
<b>Course objectives</b>&#8212;Students who take this course should have an interest in HCI and/or uncertainty communication. Prior experience with HCI or Visualization courses is beneficial but not required. Assignments are designed to learn project management skills and to provide practical experience for peer-reviewing.

By the end of this course, students should be able to 
<ul>
<li>Describe the background and open problems within the covered topics. </li>
<li>Propose new research projects based on the learned topics. </li>
<li>Choose and justify HCI research methods for their project. </li>
<li>Understand the peer-reviewing process in HCI. </li>
<li>Improve their communication and presentation skills. </li>
</ul>


This course is ideal for first or second-year graduate students. Senior PhD students interested in these topics are also welcome. Undergraduates need permission to enroll.
</p>
`



export const course_location = `PHY 0405 (TBD)`

export const syllabus_intro = `&#128007; = the syllabus above this point is finalized;  &#128034; = where we are in the semester. <br/>
                Most materials will be released publicly on this website. Confidential content (like reviews and signups) will be provided on a UMD google drive. <br/>`
export const syllabus = `|&#128034;&#128007;| Week | Date | Topic | Reading list / Todo | Assignments |

|--|--|-----------|------------------------|-------------------------|--------------|

|| 0 | 08/26/24 | Logistics (~35m) <br/>  Warm-up exercise (~35m) | Bring a visualization you've seen and prepare a short explanation for what it is and why you like or dislike it. [[paste it here]](https://docs.google.com/document/d/1oZ6RmLPrBfHKxGCDE9k_CLYaQXW5ICqtOQsWWHaLYnA/edit?usp=sharing) | [[slack signup]](https://docs.google.com/spreadsheets/d/1aijQfjdMnpEK4kWWKMTXCEMWCLnzrU_qCl9nszDPLPA/edit?gid=0#gid=0) |

| | | 08/28/24 | Warm-up exercise | Bring a visualization you've seen and prepare a short explanation for what it is and why you like or dislike it. [[paste it here]](https://docs.google.com/document/d/1oZ6RmLPrBfHKxGCDE9k_CLYaQXW5ICqtOQsWWHaLYnA/edit?usp=sharing)  | [[slack signup]](https://docs.google.com/spreadsheets/d/1aijQfjdMnpEK4kWWKMTXCEMWCLnzrU_qCl9nszDPLPA/edit?gid=0#gid=0) |

| | 1 | 09/02/24 | Labor day (no class) | | |

| | | 09/04/24 | Lecture: Background knowledge on statistics, uncertainty, and visualization | 
<font class='paper-index-title'>Presentations start next week but do read them and submit your questions! </font>  
[P#X] Statistical rethinking (Chapter 1 The golem of prague) [[link]](https://xcelab.net/rmpubs/sr2/statisticalrethinking2_chapters1and2.pdf)  
[P#X] Why authors don't visualize uncertainty [[link]](https://mucollective.github.io/assets/papers/2019-value-of-uncertainty-vis.pdf)
<font class='paper-index-title'> Only if you haven't taken a vis course before: </font> 
[P#X] Visualization analysis & design (Chapter 5 Marks and channels)  [[link]](https://paul.zhdk.ch/mod/resource/view.php?id=26808&lang=en) 
<font class='paper-index-title'> Optional: </font> <br/>
[P#X] Rethinking the ranks of visual channels  [[link]](https://arxiv.org/abs/2107.11367)  | A1 out <br/>A3 draft out|

| | 2 | 09/09/24 | Quantitative results I - Null Hypothesis Significance Testing (NHST) | 
[P#X] Rethinking statistical analysis methods for CHI  [[link]](https://judyrobertson.typepad.com/files/chi2012_submission_final.pdf)
[P#X] Confusion over measures of evidence (p's) versus errors (a's) in classical statistical testing [[link]](https://www.roma1.infn.it/~dagos/dott-prob_30/Hubbard-Bayarri-2003.pdf) 
[P#X] Statistical tests, p values, confidence intervals, and power: a guide to misinterpretations [[link]](https://link.springer.com/article/10.1007/s10654-016-0149-3) 
| |

| | | 09/11/24 | Quantitative results II - Confidence intervals & Bayesian methods | 
[P#X] Fair statistical communication in HCI  [[link]](https://inria.hal.science/hal-01377894/file/fairstats-last.pdf) 
[P#X] Can visualization alleviate dichotomous thinking? Effects of visual representations on the cliff effect  [[link]](https://arxiv.org/pdf/2002.07671#:~:text=Our%20results%20suggest%20that%20adding,the%20CI%20with%20p%2Dvalues.) 
[P#X] Researcher-centered design of statistics: Why Bayesian statistics better fit the culture and incentives of HCI  [[link]](https://www.mjskay.com/papers/chi_2016_bayes.pdf) [[reviews]]  | |

| |  3 | 09/16/24 | XAI I: Explainable AI | 
[P#X] Questioning the AI: Informing design practices for Explainable AI user experiences [[link]](https://arxiv.org/abs/2001.02478) 
[P#X] Visual analytics in deep learning: An interrogative survey for the next frontiers  [[link]](https://arxiv.org/abs/1801.06889) 
[P#X] CNN explainer: Learning convolutional neural networks with interactive visualization [[link]](https://arxiv.org/abs/2004.15004)  |  |

| | | 09/18/24 | XAI II: What's explaninability? |  
[P#X] Explanation, prediction, and causality: Three sides of the same coin? [[link]](https://osf.io/preprints/osf/u6vz5) 
[P#X] The mythos of model interpretability: In machine learning, the concept of interpretability is both important and slippery [[link]](https://dl.acm.org/doi/pdf/10.1145/3236386.3241340) 
[P#X] Rethinking explainability as a dialogue: A practitioner's perspective [[link]](https://arxiv.org/pdf/2202.01875) 
<font class='paper-index-title'> Optional: </font> <br/>
[P#X] Stop explaining black box machine learning models for high stakes decisions and use interpretable models instead [[link]](https://www.nature.com/articles/s42256-019-0048-x) 
 | A1 due <br/>A2 out |

| | 4 | 09/23/24 | XAI III: User trust | 
[P#X] Effect of confidence and explanation on accuracy and trust calibration in AI-assisted decision making [[link]](https://arxiv.org/pdf/2001.02114)
[P#X] Are explanations helpful? A comparative study of the effects of explanations in AI-assisted decision-making [[link]](https://mingyin.org/paper/IUI-21/iui21.pdf)
[P#X] Uncertainty as a form of transparency: Measuring, communicating, and using uncertainty [[link]](https://arxiv.org/pdf/2011.07586) 
[P#X] Machine explanations and human understanding [[link]](https://arxiv.org/pdf/2202.04092)
 | |

| | | 09/25/24 |  continued   <br/>  Lecture: write a paper (~35m) |  
<font class='paper-index-title'>Priorizing leftover papers, if time, one of the 'fooling' papers:</font> 
[P#X] “How do I fool you?": Manipulating user trust via misleading black box explanation [[link]](https://trustml.github.io/docs/aies20.pdf) 
[P#X] Fooling LIME and SHAP: adversarial attacks on post hoc explanation methods [[link]](https://dl.acm.org/doi/pdf/10.1145/3375627.3375830) 
| | 

| | 5 | 09/30/24 | Uncertainty visualization I - Reasoning about uncertainty | 
[P#X] Risk and uncertainty communication [[link]](https://www.regulation.org.uk/library/2017-Spiegelhalter-Risk_and_Uncertainty_Communication.pdf) 
[P#X] Prospect theory and political science [[link]](http://ndl.ethernet.edu.et/bitstream/123456789/25739/1/51.pdf.pdf)  
<font class='paper-index-title'>Optional:</font> 
[P#X] Risk attitudes of children and adults: Choices over small and large probability gains and losses [[link]](https://link.springer.com/content/pdf/10.1023/A:1016316725855.pdf) <font class='paper-index-title'> (look at EUT and CPT, no need to get into experimental design) </font> 
| |

| | | 10/02/24 | continued <br/> A3 check-in (~15m) |
[P#X] Understanding uncertainty: How lay decision-makers perceive and interpret uncertainty in human-AI decision making [[link]](https://dl.acm.org/doi/pdf/10.1145/3581641.3584033?casa_token=8M6TiDN1pBgAAAAA:jSunNiriqf0BUWPSz3Dmpg2OrD2gklbVKjCK1t8iv9MyVBoF_Ennh9YVT2frDOP4km5i1ymEstI)
[P#X] Fundamentals of data visualization (Chapter 16 Visualizing uncertainty)  [[link]](https://clauswilke.com/dataviz/visualizing-uncertainty.html)
 | A2 due|

| | 6 | 10/07/24 | Uncertainty visualization II - Probalistic forecasts | 
<font class='paper-index-title'>One of the following two papers:</font> 
[P#X] Projecting confidence: How the probabilistic horse race confuses and demobilizes the public  [[link]](https://www.journals.uchicago.edu/doi/abs/10.1086/708682?casa_token=HhOJoDR4AoUAAAAA%3AJ-nPvumIXvz8pVymEOUfd6uw43tUuY5uucODFKvxTHwuLREfmu6-_l_CIUqnXkuWkm0sSyRfIg&journalCode=jop) 
[P#X] Information, incentives, and goals in election forecasts [[link]](http://www.stat.columbia.edu/~gelman/research/published/jdm200907b.pdf) 
<font class='paper-index-title'>One of the following two papers:</font> 
[P#X] Swaying the public? Impacts of election forecast visualizations on emotion, trust, and intention in the 2022 U.S. midterms  [[link]](https://osf.io/qpyna/) [[reviews]] 
[P#X] In dice we trust: Uncertainty displays for maintaining trust in election forecasts over time   [[link]](https://osf.io/9x4nr) [[reviews]] 
[P#X] Watching the election sausage get made: How data journalists visualize the vote counting process in US elections [[link]](https://dl.acm.org/doi/10.1145/3613904.3642329)  
<font class='paper-index-title'>Optional: </font> 
[P#X] The backstory to “Swaying the public”: A design chronicle of election forecast visualizations [[link]](https://osf.io/preprints/osf/927vy) | |

| | | 10/09/24 | (continued) | 
<font class='paper-index-title'>One of the two bus papers:</font> 
[P#X] When (Ish) is my bus?: User-centered visualizations of uncertainty in everyday, mobile predictive systems [[link]](https://idl.cs.washington.edu/files/2016-WhenIsMyBus-CHI.pdf) [[reviews]] 
[P#X] Uncertainty displays using quantile dotplots or CDFs improve transit decision-making  [[link]](https://www.mjskay.com/papers/chi2018-uncertain-bus-decisions.pdf) 
[P#X] Non-expert interpretations of hurricane forecast uncertainty visualizations  [[link]](https://regehr.org/sarah/Ruginskietal2016_NonExpertHurricaneForecastInterpretations.pdf)  
<font class='paper-index-title'>Optional: </font> 
[P#X] Multiple forecast visualizations (MFVs): Trade-offs in trust and performance in multiple COVID-19 forecast visualizations [[link]](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=9904455) 
|  A3 plan due |

| | 7 | 10/14/24 | IEEE VIS  | Fumeng away 	&#x2708;&#xFE0F;; check out the conference program [[link]](https://ieeevis.org/year/2024/info/week-at-a-glance) | midterm week |

| | | 10/16/24 | IEEE VIS | Fumeng away &#x2708;&#xFE0F;; check out the conference program [[link]](https://ieeevis.org/year/2024/info/week-at-a-glance)  | midterm week |

| | 8 | 10/28/24 | Uncertainty visualization III - Tree  | 
[P#X] 
[P#X]  
[P#X]
|   A3 abstract due|

| | | 10/30/24 | (continued)  <br/>  Lecture: write a review (~30m) | 
[P#X]
[P#X]  
| A3 bidding out |

| | 9 | 11/04/24 | LLM uncertainty I - Source| 
<font class='paper-index-title'>The reading list beyond this point is highly uncertain :-) </font> 
[P#X] Uncertainty in natural language generation: From theory to applications [[link]](https://arxiv.org/pdf/2307.15703)
[P#X] Semantic uncertainty: Linguistic invariances for uncertainty estimation in natural language generation [[link]](https://arxiv.org/abs/2302.09664)
<!-- Navigating the Grey Area: How Expressions of Uncertainty and Overconfidence Affect Language Models-->
<font class='paper-index-title'>Optional: </font> 
[P#X] Introduction to uncertainty in deep learning [[link]](https://www.gatsby.ucl.ac.uk/~balaji/balaji-uncertainty-talk-cifar-dlrl.pdf) <font class='paper-index-title'> (until ~p45) </font> 
|  |

| | | 11/06/24 | LLM uncertainty II - Quantification | 
[P#X] Generating with confidence: Uncertainty quantification for black-box large language lodels [[link]](https://arxiv.org/pdf/2305.19187)
[P#X] Shifting attention to relevance: Towards the predictive uncertainty quantification of free-form large language models [[link]](https://arxiv.org/pdf/2307.01379)
[P#X] Look before you leap: An exploratory study of uncertainty measurement for large language models [[link]](https://arxiv.org/pdf/2307.10236)
| A3 bidding due |

| | 10 | 11/11/24 | LLM uncertainty III - User perspective|  
[P#X] "I'm not sure, but...": Examining the impact of large language models' uncertainty expression on user reliance and trust [[link]](https://www.jennwv.com/papers/uncertaintyllms.pdf)  
[P#X] Teaching models to express their uncertainty in words [[link]](https://arxiv.org/pdf/2205.14334)
| |

| | | 11/13/24 |   AI literacy I <br/> Lecture: respond to reviews (~30m) | 
[P#X] Adults' statistical literacy: Meanings, components, responsibilities [[link]](https://citeseerx.ist.psu.edu/document?repid=rep1&type=pdf&doi=f490d421fc7b8af7eba4c3ca997a8388547c55d6)
 | |

| | 11 | 11/18/24 | AI literacy  II | 
[P#X] What is AI literacy? Competencies and design considerations [[link]](https://aiunplugged.lmc.gatech.edu/wp-content/uploads/sites/36/2020/08/CHI-2020-AI-Literacy-Paper-Camera-Ready.pdf) 
[P#X] The effects of perceived AI use on content perceptions [[link]](https://dl.acm.org/doi/pdf/10.1145/3613904.3642076) | 
A3 paper due  |

| | | 11/20/24 | Slots for project presentations | 
| A4 out  |

| | 12 | 11/25/24 | Thanksgiving (no class)  | | |

| | | 11/27/24 | Thanksgiving (no class) | | |

| | 13 | 12/02/24 | Slots for project presentations | | |

| | | 12/04/24 | Slots for project presentations | | |

| | 14 | 12/09/24 | Slots for project presentations (if needed) <br/> Reflection and Q&A | | A4 due |

| | Final | 12/11/24 | | Final exam: Reviews released |  |

| | | 12/17/24 | |  Final exam: The revised paper and responses due | |
`

export const howitworks = `We do a mixture of conventional (presentations, discussions, and projects) and experimental (peer-reviewing) activities. <br/>
We will have a Slack workspace for class communication and for students to look for collabrators. <br/>
Unless otherwise specified, please submit assignments through Gradescope (TBD). The course materials will be synced on Gradescope (hopefully).` 


export const assignments = [
    {
        'name': 'Class presentations',
        'summary': '',
        'divs': [
            {
                'perc': .08,
                'id': 'paper-presentation',
                'requirement': `in each class, students present and discuss 2-3 papers from the paper list. 
                                <a href='https://docs.google.com/spreadsheets/d/18g1-GHFBAHwZIlZvIzBx7lznLUl45462Pa378EBw9fY/edit?usp=sharing'>Sign up here</a> (TBD). `,
                'long_requirement': `
                Each presentation + discussion should be 20-30 minutes. <br/>
                Please sign up for &#8805;1 paper over the course of the semester and &#8805;7 days before your presentation. <br/>
                Presenters from the same class could coordinate and decide how they want to present and lead the discussions. <br/>
                You can reuse any online materials  (e.g., slides, videos, demos) as long as you follow their license and describe the materials in your own language. <br/>
                You can use any guidance online, but at least introduce the problem, present some methods and results, and spike a discussion.  <br/>
                If your presentation paper contains reviews, please also summarize the reviews. 
                `
            },
            {
                'perc': .08,
                'id': 'project-presentation',
                'requirement': `your (group) presentation of A3 outcome + Q&A. `,
                 'long_requirement': `
                Depending on how many papers we have, this presentation could range from 6 to 20 minutes. <br/>
                The Q&A and feedback session could range from 3 to 20 minutes.
                `
            }
        ]
    },

    {
        'name': 'Weekly reading responses',
        'summary': '',
        'divs': [
            {
                'perc': .08,
                'id': 'reading-responses',
                'requirement': 'submit 2-3 questions for each paper by the noon of that class. ',
                'long_requirement': `If not enough signups, you can choose different papers in the list as long as you read 2-3 papers. <br/> 
                The questions will be forwarded to the presenter for leading the discussion. <br/>
                At least 2 questions per week should be non-trivial. <br/> Fumeng probably won't nit-count non-trivial questions every week, but the questions should show that you constantly read and think about the papers. <br/>
                You may forward-read papers in order to write your proposal. In this case, questions are counted even if those papers are removed later. (This is a git-tracked website)`
            }]
    },

    {
        'name': 'Assignments 1-2:',
        'summary': 'design (solo)',
        'divs': [
            {
                'perc': .1,
                'id': 'homeworks-solo',
                'requirement': 'design a visualization or an interface based on a given dataset or problem. 5% each. ',
                'long_requirement': `Expect code implementation or high-quality sketch. <br/>
                                     Substitute the dataset or problem with your research data is possible; ask Fumeng for permission. <br/>
                                     Provide a few paragraphs of justification + your code or sketching process.`
            }]
    },


    {
        'name': 'Assignment 3:',
        'summary': 'position paper',
        'divs': [
            {
                'perc': .05,
                'id': 'project-plan',
                'requirement': 'project proposal (solo) ',
                'long_requirement': `A 1-2 pages proposal outlining the question you'd like to pursue, possible methods, anticipated results, and a timeline.`
            },
            {
                'perc': .01,
                'id': 'abstract-author',
                'requirement': 'abstract & author information (group; not submitting on time will lead to a 0 of A3.3)  ',
                'long_requirement': `Submit your paper title, coauthors, and an abstract (150 to 400 words).`
            },
            {
                'perc': .15,
                'id': 'paper-submission',
                'requirement': 'paper submission (group; no late policy) ',
                'long_requirement':  `A  position paper of 2-3 pages, which outlines your research problem, related work, methods, preliminary results, and future work.`
            }
        ]
    },

    {
        'name': 'Assignment 4:',
        'summary': 'peer-reviewing',
        'divs': [
            {
                'perc': .0,
                'id': 'bidding',
                'requirement': 'bidding & conflicts (solo) ',
                'long_requirement': `Indicate the papers you'd like to review and which papers you are not supposed to review in a spreadsheet.  <br/>
                I may need to write some code in order to do the review assignments...`
            },
            {
                'perc': .1,
                'id': 'peer-reviews',
                'requirement': 'write two peer reviews (solo) ',    
                'long_requirement': `Need to decide how to submit reviews... <br/>
                Fumeng will briefly go through the reviews to ensure they are proper.
                `
            }]
    },
    {
        'name': 'Midterm exam: ',
        'summary': 'likely take-home',
        'divs': [
            {
                'perc': .15,
                'id': 'midterm',
                'requirement': '4-6 questions based on readings and lectures.  Strickly no GPT/Grammarly Go/LLM/etc. ',
                'long_requirement': `
                 Unless we have a TA who can also supervise the exam, this midterm will be take-home. <br/>
                 The first 2-3 questions will be from the reading. Then 2-3 open-ended questions. <br/>
                 Expect a few paragraphs for each question. <br/>
                 Ideas are more important. But do read your answer once to check obvious readability issues.  <br/>
                 For Ph.D. students, these are alike questions you might get from your committee (e.g., Fumeng).`
            }]
    }
    ,
    {
        'name': 'Final exam: ',
        'summary': 'take-home',
        'divs': [
            {
                'perc': .2,
                'id': 'final',
                'requirement': 'the final revised position paper (A3) and review response (no late policy; group) ',
                'long_requirement': `
                 The teaching staff will look at the revised papers, reviews, and responses, and decide a score.
                 `
            }]
    },
    {
        'name': 'Extra credits',
        'summary': '   ',
        'divs': [
            {
                'perc': .1,
                'id': 'extra-credit',
                'requirement': 'exceptional presentation, paper, or participation could earn up to 10% extra credits.'
            }]
    }
]


export const acknowledgement = `
<p>The design of this class has been inspired by classes taught by </p>
<ul>
<li>Jessica Hullman (<a href='https://www.mccormick.northwestern.edu/computer-science/academics/courses/descriptions/497-11.html'>COMP_SCI 497</a>) at Northwestern University </li>
<li>Matthew Kay (<a href='https://www.mccormick.northwestern.edu/computer-science/academics/courses/descriptions/496-24.html'>COMP_SCI 496</a>) at Northwestern University </li>
<li>David H. Laidlaw (<a href='https://cs.brown.edu/courses/csci2370/2022/'>CSCI2370</a>) at Brown University </li>
<li>Jeff Huang (<a href='https://cs.brown.edu/courses/csci2300/'>CSCI2300</a>) at Brown University </li>
<li>Yizheng Chen (<a href='https://surrealyz.github.io/classes/llmsec/llmsec.html'>CMSC818I</a>) at the University of Maryland, College Park </li>
<li>Arvind Satyanarayan (<a href='https://vis.csail.mit.edu/classes/6.859/'>6.859</a>) at MIT  </li>
<li> Chat Wacharamanotham at the University of Zurich.</li>
 </ul>
`



// "[P#X] Rethinking the Ranks of Visual Channels  [[link]](https://arxiv.org/abs/2107.11367) [reviews] <br/> [P#X] The Risks of Ranking: Revisiting Graphical Perception to Model Individual Differences in Visualization Performance  [[link]](https://mucollective.northwestern.edu/files/2022-perception-individual-differences.pdf)"
//  [P#X] Graphical Perception: Theory, Experimentation, and Application to the Development of Graphical Method  [[link]](https://faculty.washington.edu/aragon/classes/hcde511/s12/readings/cleveland84.pdf) <br/>