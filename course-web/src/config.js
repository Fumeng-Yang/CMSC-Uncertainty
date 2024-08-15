export const course_number = 'CMSC839E'
export const course_full_name = 'Advanced Topics in Human-Computer Interaction'
export const course_sub_name = 'Uncertainty Communication for Decision-making (Fall 24)'
export const course_short_name = 'uncertainty'
export const course_time = 'MW 2:00pm - 3:15pm'

export const course_objective_long = `
<p>
<b>Description</b>&#8212;This course covers Human-Computer Interaction (HCI) research topics focusing on model uncertainty and decision-making. We will cover a range of models, from linear regression to probabilistic forecasts and AI foundation models, and explore how to help human users understand and manage uncertainty in these computational models. Core topics include

<font class='topic'>statistical communication</font>, 
<font class='topic'>explainability</font>, 
<font class='topic'>decision-making</font>, 
<font class='topic'>uncertainty visualization</font>, and 
<font class='topic'>LLM uncertainty</font>.

 This course is <b>MS/PhD qualifying</b> in Software Engineering/Programming Languages/HCI.  The class format includes a combination of presentations, discussions, and lectures. 
 

</p>

<p>
<b>Course objectives</b>&#8212;Students who take this course should have an interest in HCI and/or uncertainty communication. Prior experience with HCI or Visualization courses is beneficial but not required. Assignments are designed to learn project management skills and to provide practical experience for peer-reviewing.

By the end of this course, students should be able to 
<ul>
<li>Describe the background and open problems within the covered topics. </li>
<li>Propose new research projects based on the learned topics. </li>
<li>Choose and justify appropriate HCI research methods for their projects. </li>
<li>Understand the peer-reviewing process in HCI. </li>
<li>Improve their communication and presentation skills. </li>
</ul>


This course is ideal for first or second-year graduate students. Senior PhD students interested in these topics are also welcome. Undergraduates need permission to enroll.
</p>
`



export const course_location = `CSI 2120`

export const syllabus_intro = `&#128007; = the syllabus above this point is finalized;  &#128034; = where we are in the semester. <br/>
                Most materials will be released publicly on this website. Confidential content (like reviews and signups) will be released on a UMD google drive. <br/>`


export const howitworks = `We combine conventional activities (presentations, discussions, projects) with experimental ones (peer-reviewing). Canvas will be used for class communication and finding collaborators. Unless specified otherwise, submit assignments through Canvas. Course materials will also be synced on Canvas.`


export const assignments = [
    {
        'name': 'Class presentations',
        'summary': '',
        'divs': [
            {
                'perc': .08,
                'id': 'paper-presentation',
                'requirement': `In each class, students will present and discuss papers from the provided paper list. 
                                <a href='https://docs.google.com/spreadsheets/d/18g1-GHFBAHwZIlZvIzBx7lznLUl45462Pa378EBw9fY/edit?usp=sharing'>Sign up here</a> (TBD). `,
                'long_requirement': `
                Each presentation (including the discussion) should last 20-30 minutes. <br/>
                Please sign up for &#8805;1 paper over the course of the semester, and do so  &#8805;3 days before your scheduled presentation. <br/>
                Presenters in the same class are encouraged to coordinate and decide how they would like to present and lead the discussion. <br/>
               You may reuse any online materials (e.g., slides, videos, demos) as long as you adhere to their licenses and describe the materials in your own words. <br/>
                You may use any online resources as guidance, but make sure to at least introduce the problem, present some methods and results, and stimulate a discussion.  <br/>
               If your presentation paper includes reviews, please also summarize the reviews. 
                `
            },
            {
                'perc': .08,
                'id': 'project-presentation',
                'requirement': `your (group) presentation of the project outcome + Q&A. `,
                'long_requirement': `
                Depending on the number of papers, the presentation could range from 6 to 20 minutes, while the Q&A and feedback session could range from 3 to 20 minutes.
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
                'requirement': 'Submit 1-2 questions for each paper by noon on the day of the class.  ',
                'long_requirement': `
                The questions will be forwarded to the presenter to help lead the discussion. <br/>
                At least 2 questions per week should be non-trivial. While we won't strictly count non-trivial questions every week, your questions should show that you are consistently reading and critically thinking about the papers.  <br/>
               You may read papers in advance to help write your proposal. In this case, your questions will still be counted, even if those papers are later removed. (This is a git-tracked website.)`
            }]
    },

    {
        'name': 'Assignment 1:',
        'summary': 'quantitative analysis [Q]',
        'divs': [
            {
                'perc': .05,
                'id': 'preregistration',
                'requirement': '<a href=\'https://docs.google.com/document/d/1nKzrqqNwtefV-Y9UQkmlNbl8RWWM_zVtLdPjMCLuxC0/edit?usp=sharing\'>Q.1</a> preregistration for an experiment (solo) ',
                'long_requirement': `Write a one-page preregistration for a given experiment. <br/>
                 The dataset will be released next week.`
            },
            {
                'perc': .05,
                'id': 'quant-analysis',
                'requirement': '<a href=\'https://docs.google.com/document/d/1QIWt89rq8cb4UNg4q9XCCW2YAx1NxbSryNUS_rCvAZs/edit?usp=sharing\'>Q.2</a>  your preregistered analysis & report (solo) ',
                'long_requirement': `
                                    Expect a code implementation or a high-quality sketch. <br/>
                                    Provide a few paragraphs of justification, along with your code or the sketching process.`
            }]
    },


    {
        'name': 'Assignment 2:',
        'summary': 'project & paper [P]',
        'divs': [
            {
                'perc': .05,
                'id': 'project-plan',
                'requirement': '<a href=\'https://docs.google.com/document/d/1PX7GW2fauBQ1w-O4Ar6jTIRzgiRn2YK8tX73GRLGcoE/edit?usp=sharing\'>P.1</a> project proposal (solo) ',
                'long_requirement': `Submit a 1-2 page proposal outlining the research question you intend to pursue, possible methods, anticipated results, and a timeline.`
            },
            {
                'perc': .01,
                'id': 'abstract-author',
                'requirement': '<a href=\'https://docs.google.com/document/d/1PX7GW2fauBQ1w-O4Ar6jTIRzgiRn2YK8tX73GRLGcoE/edit?usp=sharing\'>P.2</a>  abstract & author information (group; not submitting on time will result in a 0 of P.3)  ',
                'long_requirement': `Submit your paper title, co-authors, and an abstract (100 to 400 words).`
            },
            {
                'perc': .14,
                'id': 'paper-submission',
                'requirement': '<a href=\'https://docs.google.com/document/d/1PX7GW2fauBQ1w-O4Ar6jTIRzgiRn2YK8tX73GRLGcoE/edit?usp=sharing\'>P.3</a> paper submission (group; no late submissions accepted) ',
                'long_requirement': `Submit a 2-3 page paper that outlines your research problem, related work, methods, preliminary results, and future work.`
            }
        ]
    },

    {
        'name': 'Assignment 3: ',
        'summary': 'peer review [R]',
        'divs': [
            {
                'perc': .01,
                'id': 'bidding',
                'requirement': '<a href=\'https://docs.google.com/document/d/1MOivtgkwJyjpv1Z-ElEC1mC1jJKZO3AHngmAxk9ONL0/edit?usp=sharing\'>R.1</a> bidding & conflict (solo) ',
                'long_requirement': `Indicate in a spreadsheet the papers you’d like to review and those you should not review due to conflicts of interest.  <br/>
                I may need to write some code to help with the review assignments...`
            },
            {
                'perc': .1,
                'id': 'peer-reviews',
                'requirement': '<a href=\'https://docs.google.com/document/d/1MOivtgkwJyjpv1Z-ElEC1mC1jJKZO3AHngmAxk9ONL0/edit?usp=sharing\'>R.2</a>  write two peer reviews (group) ',
                'long_requirement': `Students need to submit two peer reviews (submission method to be determined). <br/>
                Fumeng will briefly review the submissions to ensure they are appropriate.
                `
            }]
    },
    {
        'name': 'Midterm exam: ',
        'summary': 'in-class? take-home? (TBD)',
        'divs': [
            {
                'perc': .15,
                'id': 'midterm',
                'requirement': 'four to six questions based on readings and lectures.  Strictly no GPT, Grammarly Go, LLMs, or similar tools. ',
                'long_requirement': `
                 Unless we have a TA to supervise the exam, this midterm will be take-home. <br/>
                 The first 2-3 questions will be based on the readings, followed by 2-3 open-ended questions. <br/>
                 Expect to write a few paragraphs for each question. The focus is on your idea, but be sure to read your answers for obvious readability issues. <br/>
                For Ph.D. students, these questions are similar to what you might get from your committee (e.g., Fumeng). <br/>
                 Example question: Rank the following six visual channels—length, position, area, angle, luminance, and volume—and justify your ranking.`
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
                'requirement': 'the final revised short paper (P.3) and review response (group; no late submissions accepted) ',
                'long_requirement': `
                The teaching staff will look at the revised papers, the reviews, and your responses, and will then decide on a score. <br/>

This exam will be graded based on the quality of the revised version and how well you respond to the reviews. If you receive a particularly picky review, you only need to respond to it reasonably.
                 `
            }]
    },
    {
        'name': 'Extra credit',
        'summary': '   ',
        'divs': [
            {
                'perc': .1,
                'id': 'extra-credit',
                'requirement': 'exceptional presentation, paper, or participation could earn up to 10% extra credit.'
            }]
    }
]




export const syllabus = `| Week <br/>&#128034;&#128007; | Date | Topics | Reading list (due before the class) | Assignments |

|--|---|-----------|-------------------------|--------------|

| 0 | 08/26/24 | Logistics +  Warm-up exercise |  <font class='paper-index-title'>A reminder: start reading the papers </font>   | QPR out |

| | 08/28/24 | Lecture: Background knowledge on statistics, uncertainty, and visualization <a href='stats_uncertainty.html' target='_blank'>code</a> | 
<font class='paper-index-title'>Presentations start next week, but make sure to read this week's papers and submit your questions! </font>  
[##X] Statistical rethinking (Chapter 1 The golem of prague) [[link]](https://xcelab.net/rmpubs/sr2/statisticalrethinking2_chapters1and2.pdf)  
<font class='paper-index-title'> Only if you haven't taken a vis course before: </font> 
[##X] Visualization analysis & design (Chapter 5 Marks and channels)  [[link]](https://paul.zhdk.ch/mod/resource/view.php?id=26808&lang=en) 
<font class='paper-index-title'> Optional: </font>
[##X] Bad stats: Not what it seems [[link]](https://www.aviz.fr/badstats) 
[##X] Fisher, Neyman-Pearson or NHST? A tutorial for teaching data testing  [[link]](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4347431/)  
[##X] Rethinking the ranks of visual channels  [[link]](https://arxiv.org/abs/2107.11367)  
|

| 1 | 09/02/24 | Labor day (no class) | | |

| | 09/04/24 | Quantitative results I - Null Hypothesis Significance Testing (NHST) | 
[##X] Rethinking statistical analysis methods for CHI  [[link]](https://judyrobertson.typepad.com/files/chi2012_submission_final.pdf)
[##X] Statistical tests, p values, confidence intervals, and power: A guide to misinterpretations [[link]](https://link.springer.com/article/10.1007/s10654-016-0149-3) 
<font class='paper-index-title'> Optional: </font> 
[##X] Confusion over measures of evidence (p's) versus errors (a's) in classical statistical testing [[link]](https://www.roma1.infn.it/~dagos/dott-prob_30/Hubbard-Bayarri-2003.pdf) 
| [Q.1](https://docs.google.com/document/d/1nKzrqqNwtefV-Y9UQkmlNbl8RWWM_zVtLdPjMCLuxC0/edit?usp=sharing) finalized  |

| 2 | 09/09/24 |  Quantitative results II - Confidence intervals & Bayesian methods | 
[##X] Fair statistical communication in HCI  [[link]](https://inria.hal.science/hal-01377894/file/fairstats-last.pdf) 
[##X] Can visualization alleviate dichotomous thinking? Effects of visual representations on the cliff effect  [[link]](https://arxiv.org/pdf/2002.07671#:~:text=Our%20results%20suggest%20that%20adding,the%20CI%20with%20p%2Dvalues.) 
[##X] Researcher-centered design of statistics: Why Bayesian statistics better fit the culture and incentives of HCI  [[link]](https://www.mjskay.com/papers/chi_2016_bayes.pdf) and [reviews]  
| |

| | 09/11/24 | Uncertainty visualization |
[##X] Fundamentals of data visualization (Chapter 16 Visualizing uncertainty)  [[link]](https://clauswilke.com/dataviz/visualizing-uncertainty.html)
[##X] Why authors don't visualize uncertainty [[link]](https://mucollective.github.io/assets/papers/2019-value-of-uncertainty-vis.pdf)
<font class='paper-index-title'>Optional:</font> 
[##X] The UncertaintyVis browser [[link]](https://amitjenaiitbm.github.io/uncertaintyVizBrowser/)
| |

|  3 | 09/16/24 | XAI I: Explainable AI | 
[##X] Questioning the AI: Informing design practices for Explainable AI user experiences [[link]](https://arxiv.org/abs/2001.02478) 
[##X] Visual analytics in deep learning: An interrogative survey for the next frontiers  [[link]](https://arxiv.org/abs/1801.06889) 
[##X] CNN explainer: Learning convolutional neural networks with interactive visualization [[link]](https://arxiv.org/abs/2004.15004) 
 |  |

| | 09/18/24 | XAI II: Explainability |  
[##X] Explanation, prediction, and causality: Three sides of the same coin? [[link]](https://osf.io/preprints/osf/u6vz5) 
[##X] The mythos of model interpretability: In machine learning, the concept of interpretability is both important and slippery [[link]](https://dl.acm.org/doi/pdf/10.1145/3236386.3241340) 
[##X] Rethinking explainability as a dialogue: A practitioner's perspective [[link]](https://arxiv.org/pdf/2202.01875) 
<font class='paper-index-title'> Optional: </font> <br/>
[##X] Stop explaining black box machine learning models for high stakes decisions and use interpretable models instead [[link]](https://www.nature.com/articles/s42256-019-0048-x) 
| Q.1 due <br/>[Q.2](https://docs.google.com/document/d/1QIWt89rq8cb4UNg4q9XCCW2YAx1NxbSryNUS_rCvAZs/edit?usp=sharing) finalized, [dataset] |

| 4 | 09/23/24 |  
XAI III: User trust | 
[##X] Effect of confidence and explanation on accuracy and trust calibration in AI-assisted decision making [[link]](https://arxiv.org/pdf/2001.02114)
[##X] Are explanations helpful? A comparative study of the effects of explanations in AI-assisted decision-making [[link]](https://mingyin.org/paper/IUI-21/iui21.pdf)
[##X] Uncertainty as a form of transparency: Measuring, communicating, and using uncertainty [[link]](https://arxiv.org/pdf/2011.07586)
<font class='paper-index-title'> Optional: </font> <br/>
[##X] Introduction to uncertainty in deep learning [[link]](https://www.gatsby.ucl.ac.uk/~balaji/balaji-uncertainty-talk-cifar-dlrl.pdf) <font class='paper-index-title'> (until ~p45) </font> 
| |

| | 09/25/24 | XAI IV: Wrap-up  <br/> Project check-in (~25m)  |  
[##X] Machine explanations and human understanding [[link]](https://arxiv.org/pdf/2202.04092)
<font class='paper-index-title'>Priorizing leftover papers, if time, one of the 'fooling' papers:</font> 
[##X] “How do I fool you?": Manipulating user trust via misleading black box explanation [[link]](https://trustml.github.io/docs/aies20.pdf) 
[##X] Fooling LIME and SHAP: adversarial attacks on post hoc explanation methods [[link]](https://dl.acm.org/doi/pdf/10.1145/3375627.3375830) 
| [P.1](https://docs.google.com/document/d/1PX7GW2fauBQ1w-O4Ar6jTIRzgiRn2YK8tX73GRLGcoE/edit?usp=sharing) finalized | 

| 5 | 09/30/24 | Reasoning about uncertainty I | 
[##X] Risk and uncertainty communication [[link]](https://www.regulation.org.uk/library/2017-Spiegelhalter-Risk_and_Uncertainty_Communication.pdf) 
[##X] Understanding uncertainty: How lay decision-makers perceive and interpret uncertainty in human-AI decision making [[link]](https://dl.acm.org/doi/pdf/10.1145/3581641.3584033?casa_token=8M6TiDN1pBgAAAAA:jSunNiriqf0BUWPSz3Dmpg2OrD2gklbVKjCK1t8iv9MyVBoF_Ennh9YVT2frDOP4km5i1ymEstI)
<font class='paper-index-title'>Optional:</font> 
[##X] Risk attitudes of children and adults: Choices over small and large probability gains and losses [[link]](https://link.springer.com/content/pdf/10.1023/A:1016316725855.pdf) <font class='paper-index-title'> (look at EUT and CPT, no need to get into experimental design) </font> 
| |

| | 10/02/24 | 
Reasoning about uncertainty II <br/>  Lecture: write a paper (~30m) |
[##X] Prospect theory and political science [[link]](http://ndl.ethernet.edu.et/bitstream/123456789/25739/1/51.pdf.pdf)  
<font class='paper-index-title'>Required reading but no need to present: </font> 
[##X] ggdist: Visualizations of distributions and uncertainty in the grammar of graphic [[link]](https://mucollective.northwestern.edu/files/2023-ggdist.pdf)
[##X] The backstory to “Swaying the public”: A design chronicle of election forecast visualizations [[link]](https://osf.io/preprints/osf/927vy)  <font class='paper-index-title'>(could skip the results) </font> 
|Q.2 due |

| 6 | 10/07/24 | Probalistic forecasts I| 
<font class='paper-index-title'>One of the following two papers:</font> 
[##X] Projecting confidence: How the probabilistic horse race confuses and demobilizes the public  [[link]](https://www.journals.uchicago.edu/doi/abs/10.1086/708682?casa_token=HhOJoDR4AoUAAAAA%3AJ-nPvumIXvz8pVymEOUfd6uw43tUuY5uucODFKvxTHwuLREfmu6-_l_CIUqnXkuWkm0sSyRfIg&journalCode=jop) 
[##X] Information, incentives, and goals in election forecasts [[link]](http://www.stat.columbia.edu/~gelman/research/published/jdm200907b.pdf) 
<font class='paper-index-title'>One of the following two papers:</font> 
[##X] Swaying the public? Impacts of election forecast visualizations on emotion, trust, and intention in the 2022 U.S. midterms  [[link]](https://osf.io/qpyna/) and [reviews](https://docs.google.com/document/d/11tRB6z3S9sXzY6tAjI1vNU1NAEy2K0mEnkcbj4ZEqCc/edit?usp=sharing)
[##X] In dice we trust: Uncertainty displays for maintaining trust in election forecasts over time   [[link]](https://osf.io/9x4nr) and [reviews](https://docs.google.com/document/d/1O200vFb88UilGl5NgE9BWuZF25zO0Rz1Vcl3CUNiXcY/edit?usp=sharing)
[##X] Watching the election sausage get made: How data journalists visualize the vote counting process in US elections [[link]](https://dl.acm.org/doi/10.1145/3613904.3642329)  
| P.1 proposal due  |

| | 10/09/24 | Probalistic forecasts II | 
<font class='paper-index-title'>One of the two bus papers:</font> 
[##X] When (ish) is my bus?: User-centered visualizations of uncertainty in everyday, mobile predictive systems [[link]](https://idl.cs.washington.edu/files/2016-WhenIsMyBus-CHI.pdf) and [reviews] 
[##X] Uncertainty displays using quantile dotplots or CDFs improve transit decision-making  [[link]](https://www.mjskay.com/papers/chi2018-uncertain-bus-decisions.pdf) 
[##X] Effects of ensemble and summary displays on interpretations of geospatial uncertainty data  [[link]](https://cognitiveresearchjournal.springeropen.com/counter/pdf/10.1186/s41235-017-0076-1.pdf)  
<font class='paper-index-title'>Optional: </font> 
[##X] Multiple forecast visualizations (MFVs): Trade-offs in trust and performance in multiple COVID-19 forecast visualizations [[link]](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=9904455) 
| [P.2 & P.3](https://docs.google.com/document/d/1PX7GW2fauBQ1w-O4Ar6jTIRzgiRn2YK8tX73GRLGcoE/edit?usp=sharing) finalized|

| 7 | 10/14/24 | IEEE VIS  | Fumeng away 	&#x2708;&#xFE0F;; check out the conference program [[link]](https://ieeevis.org/year/2024/info/week-at-a-glance) | midterm week |

| | 10/16/24 | IEEE VIS | Fumeng away &#x2708;&#xFE0F;; check out the conference program [[link]](https://ieeevis.org/year/2024/info/week-at-a-glance)  | midterm week |

| 8 | 10/28/24 | Uncertainty in species tree I | 
[##X] Species tree inference (Chapter 1) [[link]](https://press.princeton.edu/books/hardcover/9780691207599/species-tree-inference#preview)
[##X] The timescale of early land plant evolution [[link]](https://www.pnas.org/doi/full/10.1073/pnas.1719588115)
| [R](https://docs.google.com/document/d/1MOivtgkwJyjpv1Z-ElEC1mC1jJKZO3AHngmAxk9ONL0/edit?usp=sharing) finalized &#129310; |

| | 10/30/24 |  Uncertainty in species tree II  <br/>  Lecture: write a review (~30m) | 
[##X] Treevis.net: A tree visualization reference [[link]](https://cs.au.dk/~hjschulz/pdfs/treevisnet.pdf)  <font class='paper-index-title'>(make sure to show the website during your presentation)</font>
[##X] Phylogenetic tree visualization [[link]](https://yulab-smu.top/treedata-book/chapter4.html)
| |

| 9 | 11/04/24 | LLM uncertainty I - Source| 
[##X] Uncertainty in natural language generation: From theory to applications [[link]](https://arxiv.org/pdf/2307.15703)
[##X] Semantic uncertainty: Linguistic invariances for uncertainty estimation in natural language generation [[link]](https://arxiv.org/abs/2302.09664)
<!-- Navigating the Grey Area: How Expressions of Uncertainty and Overconfidence Affect Language Models-->
<font class='paper-index-title'>Optional: </font> 
[##X] A taxonomy for understanding and identifying uncertainty in AI-generated responses [[link]](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4836380)
[##X] How is ChatGPT's behavior changing over time? [[link]](https://arxiv.org/abs/2307.09009)
| P.2 abstract due  |

| | 11/06/24 | LLM uncertainty II - Quantification | 
[##X] Generating with confidence: Uncertainty quantification for black-box large language lodels [[link]](https://arxiv.org/pdf/2305.19187)
[##X] Shifting attention to relevance: Towards the predictive uncertainty quantification of free-form large language models [[link]](https://arxiv.org/pdf/2307.01379)
[##X] Look before you leap: An exploratory study of uncertainty measurement for large language models [[link]](https://arxiv.org/pdf/2307.10236) 
| R.1 bidding out |

| 10 | 11/11/24 | LLM uncertainty III - User perspective|  
[##X] "I'm not sure, but...": Examining the impact of large language models' uncertainty expression on user reliance and trust [[link]](https://www.jennwv.com/papers/uncertaintyllms.pdf)  
[##X] Teaching models to express their uncertainty in words [[link]](https://arxiv.org/pdf/2205.14334)
| |

| | 11/13/24 |   AI literacy I <br/> Lecture: respond to reviews (~30m) | 
[##X] Adults' statistical literacy: Meanings, components, responsibilities [[link]](https://citeseerx.ist.psu.edu/document?repid=rep1&type=pdf&doi=f490d421fc7b8af7eba4c3ca997a8388547c55d6)
|R.1 bidding due |

| 11 | 11/18/24 | AI literacy  II | 
[##X] What is AI literacy? Competencies and design considerations [[link]](https://aiunplugged.lmc.gatech.edu/wp-content/uploads/sites/36/2020/08/CHI-2020-AI-Literacy-Paper-Camera-Ready.pdf) 
[##X] The effects of perceived AI use on content perceptions [[link]](https://dl.acm.org/doi/pdf/10.1145/3613904.3642076) | 
P.2 paper due  |

| | 11/20/24 | Project presentations | <a href='https://docs.google.com/spreadsheets/d/18g1-GHFBAHwZIlZvIzBx7lznLUl45462Pa378EBw9fY/edit?usp=sharing'>Sign up here</a>
| R.2 peer-review out  |

| 12 | 11/25/24 | Thanksgiving (no class)  | | |

| | 11/27/24 | Thanksgiving (no class) | | |

| 13 | 12/02/24 | Project presentations | <a href='https://docs.google.com/spreadsheets/d/18g1-GHFBAHwZIlZvIzBx7lznLUl45462Pa378EBw9fY/edit?usp=sharing'>Sign up here</a>| |

| | 12/04/24 | Project presentations | <a href='https://docs.google.com/spreadsheets/d/18g1-GHFBAHwZIlZvIzBx7lznLUl45462Pa378EBw9fY/edit?usp=sharing'>Sign up here</a>| |

| 14 | 12/09/24 | Project presentations (if needed) <br/> Reflection and Q&A | | R.2 peer-review due |

| Final | 12/11/24 | | Final exam: Reviews released |  |

| | 12/17/24 | |  Final exam: The revised paper and responses due | |
`




// "[##X] Rethinking the Ranks of Visual Channels  [[link]](https://arxiv.org/abs/2107.11367) [reviews] <br/> [##X] The Risks of Ranking: Revisiting Graphical Perception to Model Individual Differences in Visualization Performance  [[link]](https://mucollective.northwestern.edu/files/2022-perception-individual-differences.pdf)"
//  [##X] Graphical Perception: Theory, Experimentation, and Application to the Development of Graphical Method  [[link]](https://faculty.washington.edu/aragon/classes/hcde511/s12/readings/cleveland84.pdf) <br/>

export const collaboration_policy = `
<p> 
We encourage collaboration and discussion among students. However, solo assignments should be primarily completed on your own. You are welcome to seek help from the course staff during office hours or use Canvas to ask questions and discuss with other students. For group projects, collaboration is encouraged on all aspects of the project and the paper.
</p>
`

export const late_policy = `
You have <b>4 slack days</b> to use for any assignments or responses that have a late policy. These days are intended for minor illnesses, special occasions (e.g., interviews), or unexpected scenarios. Late submissions not covered by a slack day will incur a 10% grade deduction per day. Email us before the deadline and specify how many days you'd like to use.
<p>

</p>
`

export const ai_policy = ` <p>The scope of AI tools includes, but is not limited to, GPT, Claude, Gemini, DALL-E, Midjourney, and Hugging Face. In line with the spirit of this course

                    <ul>
                        <li>AI should <b>not</b> be used to <b>directly</b>  complete coursework. This includes, but is not limited to, summarizing papers without reading the original manuscripts or generating substantial portions of your assignments.</li>
                        <li>Clearly <b>mark</b> any content that is directly generated by AI. </li>
                        <li>Be mindful about your <b>reliance</b> on AI, especially in terms of <b>trusting</b> AI-generated content. </li>
                        <li>You may use AI to <b>assist</b> with coursework, such as inquiring about terms, brainstorming, and improving writing. </li>
                        <li>You are encouraged to use AI <b>creatively</b> and share your thoughts and experiences with us.</li>
                        <li>The teaching staff is skilled at identifying AI-generated content. Violations may result in a zero for the affected portion.</li>
                    </ul>
                </p>
`

export const support_text = `
We are committed to the full inclusion of all students. You should expect and demand respect from classmates and staff, and reciprocally, treat others with respect. If any incident challenges this commitment, please inform us immediately.

If you have a disability or condition that requires accommodations, please notify us early in the term. You can speak with us after class or email us for an appointment. For more information, contact Accessibility & Disability Services at (301) 314-7682 or adsfrontdesk@umd.edu.
`



export const acknowledgement = `
<p>The content of this class has been inspired by the classes and talks given by 
Jessica Hullman (<a href='https://www.mccormick.northwestern.edu/computer-science/academics/courses/descriptions/497-11.html'>COMP_SCI 497</a>) at Northwestern University, Matthew Kay (<a href='https://www.mccormick.northwestern.edu/computer-science/academics/courses/descriptions/496-24.html'>COMP_SCI 496</a>) at Northwestern University, 
David H. Laidlaw (<a href='https://cs.brown.edu/courses/csci2370/2022/'>CSCI2370</a>) at Brown University,
Jeff Huang (<a href='https://cs.brown.edu/courses/csci2300/'>CSCI2300</a>) at Brown University,
Yizheng Chen (<a href='https://surrealyz.github.io/classes/llmsec/llmsec.html'>CMSC818I</a>) at the University of Maryland, College Park, 
Arvind Satyanarayan (<a href='https://vis.csail.mit.edu/classes/6.859/'>6.859</a>) at MIT, Abhraneel Sarma and Maryam Hedayati (<a href='https://fumeng-yang.github.io/VIS23-Transparent-Research/'>Transparent Practices</a>) at Northwestern University, 
 Chat Wacharamanotham at the University of Zurich, and Pierre Dragicevic (<a href='https://www.aviz.fr/badstats'>Bad Stats</a>) at Inria, France.

`