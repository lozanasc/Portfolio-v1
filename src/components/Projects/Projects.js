import React , {useRef} from 'react';
import { motion } from 'framer-motion';
import './style/Projects.css';

import onScreenHook from '../../utilities/useOnScreen';

import JavaScript from '../../assets/icons/technologies/JS_Icon.svg';
import NodeJS from '../../assets/icons/technologies/NodeJS_Icon.svg';
import ReactJS from '../../assets/icons/technologies/React_Icon.svg';
import Laravel from '../../assets/icons/technologies/Laravel_Icon.svg';
import PHP from '../../assets/icons/technologies/Php_Icon.svg';
import MySQL from '../../assets/icons/technologies/MySQL_Icon.svg';
import Java from '../../assets/icons/technologies/Java_Icon.svg';

import EngageAppSample from '../../assets/samples/Engage_Sample.png';
import LibraryMSSample from '../../assets/samples/LMS_Sample.png'
import RestoMSSample from '../../assets/samples/RestoMS_Sample.png'

export default function Projects(){

    const Projects  = [ 
        {
            sample: EngageAppSample,
            title: 'Engage App',
            desc_title: 'Fellowship of the Voice of Zion Inc. App-Based Church Management System',
            desc: ' a system that aids the church organization in managing, automating and organizing daily operations. It handles processes such as databases, communication, community and event and worship presentation programs, among many others.',
            tech_stack: [ ReactJS, NodeJS, MySQL, Java ]
        },
        {
            sample: RestoMSSample,
            title: 'RestoMS',
            desc_title: 'Web-based Restaurant Management System',
            desc: ' A Software Analysis and Design / Software Engineering I project for the 1st semester of AY 2020-2021.' + <br/> + `The main purpose of this project is to hopefully help businesses mainly in the Food Industry to create an overall good experience for Customers when dining in especially with heavy restrictions set by the IATF due to the pandemic. The system does not only serve the purpose of improving 'Customer' experience but also for the Clients' convenience, we aim to create a system that is affordable to implement, easy to use and since the system is developed using Web technologies it can be used almost in any platform available and for this, it already has cut down the cost of having to build different native application codebases in each platform. Another purpose of this project is to encourage the use of Technology more in businesses especially here in the locality.`,
            tech_stack: [ ReactJS, NodeJS, MySQL ]
        },
        {
            sample: LibraryMSSample,
            title: 'Library Management System',
            desc_title: 'Final project for CSC305 - Application Development and Emerging Tech',
            desc: ' a simple Library Management System that has basic CRUD operations implemented in the application, where the user can Register, Login, Create, Update, Edit, and Delete Books in the System.',
            tech_stack: [ JavaScript, Laravel, PHP, MySQL ]
        }
    ]

    const Project = ({sample, title, desc_title, desc, tech_stack}) => {

        const item_ref = useRef();
        const isItemOnScreen = onScreenHook(item_ref);

        return (
            <div 
                ref = {item_ref}
                className="Project"
            >
                {
                    isItemOnScreen &&
                    <>
                        <motion.div 
                            initial = {{opacity: 0}}
                            animate = {{opacity: 1}}
                            transition = {{delay: 1, duration: 1.5}}
                            className="ProjectSample" 
                            style={{backgroundImage: `url(${sample})`}}
                        />
                        <motion.div 
                            initial = {{opacity: 0}}
                            animate = {{opacity: 1}}
                            transition = {{delay: 1.5, duration: 1.5}}
                        className="ProjectInfo">
                            <img src="" alt="" />
                            <h1>{title}</h1>
                            <p>
                                <b>{desc_title}</b> 
                                {desc}
                            </p>
                            <h2>Tech Stack:</h2>
                            <div className="IconGroup">
                                {
                                    tech_stack.map((item, key) => 
                                        <img src={item} alt="" key={key}/>
                                    )
                                }
                            </div>
                        </motion.div>
                    </>
                }
            </div>
        );
    }
    const projectsRef = useRef();

    const isOnScreen = onScreenHook(projectsRef);

    return (
        <div ref={projectsRef} className="Projects">
            {
                isOnScreen &&
                <div className="InnerContainer">
                    {
                        Projects.map((project, key) => 
                            <Project
                                sample = {project.sample}
                                title = {project.title}
                                desc_title = {project.desc_title}
                                desc = {project.desc}
                                tech_stack = {project.tech_stack}
                                key = {key}
                            />
                        )
                    }
                </div>
            }
        </div>
    );
}