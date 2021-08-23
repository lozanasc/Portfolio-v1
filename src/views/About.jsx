import React, { useRef } from 'react';
import onScreenHook from '../util/useOnScreen';
import '../styles/about.scss';
import { title as Title, heading as Heading } from '../common/headings';
import { paragraph as Paragraph } from '../common/paragraph';
import { motion } from 'framer-motion';
// Technology assets
import JavaScript from '../assets/technologies/JS_Icon.svg';
import NodeJS from '../assets/technologies/NodeJS_Icon.svg';
import ReactJS from '../assets/technologies/React_Icon.svg';
import Laravel from '../assets/technologies/Laravel_Icon.svg';
import PHP from '../assets/technologies/Php_Icon.svg';
import MySQL from '../assets/technologies/MySQL_Icon.svg';
import Java from '../assets/technologies/Java_Icon.svg';
import Cpp from '../assets/technologies/C++_Icon.svg';

// Tool assets
import Git from '../assets/toolings/Git_Icon.svg';
import IntelliJ from '../assets/toolings/IntelliJ_Icon.svg';
import Heroku from '../assets/toolings/Heroku_Icon.svg';
import VSCode from '../assets/toolings/VSCode_Icon.svg';
import AndroidStudio from '../assets/toolings/Android_Studio_Icon.svg';
import Linux from '../assets/toolings/Linux_Icon.svg';
import Trello from '../assets/toolings/Trello_Icon.svg';
import Notion from '../assets/toolings/Notion_Icon.svg';
import Figma from '../assets/toolings/Figma_Icon.svg';
import VisualStudio from '../assets/toolings/Visual_Studio_Icon.svg';

function About(){

    const aboutRef = useRef();
    const isAboutOnScreen = onScreenHook(aboutRef);

    return (
        <div 
            ref = {aboutRef}
            className="About" 
            id="About"
        >
            {
                isAboutOnScreen &&
                <div className="AboutContainer">
                    <motion.div 
                        initial = {{opacity: 0, y: -1000}}
                        animate = {{opacity: 1, y: 0}}
                        transition = {{delay: 1, duration: 2}}
                        className="ProfilePicture"
                    />
                    <div className="InfoContainer">
                        <Title 
                            initial = {{opacity: 0, y: -20}}
                            animate = {{opacity: 1, y: 0}}
                            transition = {{delay: 1, duration: 2}}
                            content = "A sprinkle about me..." 
                        />
                        <Paragraph 
                            initial = {{opacity: 0, y: -20}}
                            animate = {{opacity: 1, y: 0}}
                            transition = {{delay: 1, duration: 3.5}}
                            content = {`I’m currently a senior Computer Science student @ Negros Oriental State University, I enjoy learning just about anything that’s related to Computer Science and Programming, but I’m currently upskilling on my Web and Mobile development skills.`} 
                        />
                        <Heading 
                            initial = {{opacity: 0, y: -20}}
                            animate = {{opacity: 1, y: 0}}
                            transition = {{delay: 1, duration: 2}}
                            content = "Technologies I'm familiar with:"
                        />
                        <div className="TechGroup">
                            <motion.img 
                                initial = {{opacity: 0, y: 20}}
                                animate = {{opacity: 1, y: 0}}
                                transition = {{delay: 1, duration: 2}}
                                src={JavaScript} alt="A square with the letter's JS inside at the lower right side"
                            />
                            <motion.img 
                                initial = {{opacity: 0, y: 20}}
                                animate = {{opacity: 1, y: 0}}
                                transition = {{delay: 1.2, duration: 2}}
                                src={NodeJS} alt="A hexagon with the letter JS inside at the middle"
                            />
                            <motion.img 
                                initial = {{opacity: 0, y: 20}}
                                animate = {{opacity: 1, y: 0}}
                                transition = {{delay: 1.3, duration: 2}}
                                src={ReactJS} alt="A shape of an atom"
                            />
                            <motion.img 
                                initial = {{opacity: 0, y: 20}}
                                animate = {{opacity: 1, y: 0}}
                                transition = {{delay: 1.4, duration: 2}}
                                src={Laravel} alt="A logo formed with a combination of rectangles forming an illusion that represents the letter L"
                            />
                            <motion.img 
                                initial = {{opacity: 0, y: 20}}
                                animate = {{opacity: 1, y: 0}}
                                transition = {{delay: 1.5, duration: 2}}
                                src={PHP} alt="Letter's P, H, P"
                            />
                            <motion.img 
                                initial = {{opacity: 0, y: 20}}
                                animate = {{opacity: 1, y: 0}}
                                transition = {{delay: 1.6, duration: 2}}
                                src={MySQL} alt="The word MySQL with a dolphin over the upper right corner"
                            />
                            <motion.img 
                                initial = {{opacity: 0, y: 20}}
                                animate = {{opacity: 1, y: 0}}
                                transition = {{delay: 1.7, duration: 2}}
                                src={Java} alt="A mug with a good ol' coffe for programmers"
                            />
                            <motion.img 
                                initial = {{opacity: 0, y: 20}}
                                animate = {{opacity: 1, y: 0}}
                                transition = {{delay: 1.8, duration: 2}}
                                src={Cpp} alt="A hexagon with letter's C, +, + inside it located at the middle"
                            />
                    </div>
                    <Heading 
                        initial = {{opacity: 0, y: 20}}
                        animate = {{opacity: 1, y: 0}}
                        transition = {{delay: 1, duration: 2}}
                        content = "Tools I'm familiar with:"
                    />
                    <div className="ToolGroup">
                        <motion.img 
                            initial = {{opacity: 0, y: 20}}
                            animate = {{opacity: 1, y: 0}}
                            transition = {{delay: 1, duration: 2}}
                            src={Git} alt="A diamond with interconnected lines inside it" 
                        />
                        <motion.img 
                            initial = {{opacity: 0, y: 20}}
                            animate = {{opacity: 1, y: 0}}
                            transition = {{delay: 1.2, duration: 2}}
                            src={IntelliJ} alt="A square with the letter's IJ at its upper left and a weird line just below it" 
                        />
                        <motion.img 
                            initial = {{opacity: 0, y: 20}}
                            animate = {{opacity: 1, y: 0}}
                            transition = {{delay: 1.3, duration: 2}}
                            src={Heroku} alt="A border box with the tattered letter H" 
                        />
                        <motion.img 
                            initial = {{opacity: 0, y: 20}}
                            animate = {{opacity: 1, y: 0}}
                            transition = {{delay: 1.4, duration: 2}}
                            src={VSCode} alt="Not sure how I would describe this, its goddamn VSCode" />
                        <motion.img 
                            initial = {{opacity: 0, y: 20}}
                            animate = {{opacity: 1, y: 0}}
                            transition = {{delay: 1.5, duration: 2}}
                            src={AndroidStudio} alt="A compass for drawing..." 
                        />
                        <motion.img 
                            initial = {{opacity: 0, y: 20}}
                            animate = {{opacity: 1, y: 0}}
                            transition = {{delay: 1.6, duration: 2}}
                            src={Linux} alt="A cute sitted penguin smiling, very well behaved" 
                        />
                        <motion.img 
                            initial = {{opacity: 0, y: 20}}
                            animate = {{opacity: 1, y: 0}}
                            transition = {{delay: 1.7, duration: 2}}
                            src={Trello} alt="Not sure..." />
                        <motion.img 
                            initial = {{opacity: 0, y: 20}}
                            animate = {{opacity: 1, y: 0}}
                            transition = {{delay: 1.8, duration: 2}}
                            src={Notion} alt="Isometric square with the letter N on the center" 
                        />
                        <motion.img 
                            initial = {{opacity: 0, y: 20}}
                            animate = {{opacity: 1, y: 0}}
                            transition = {{delay: 1.9, duration: 2}}
                            src={Figma} alt="Not sure about this one too... It's figma doe" 
                        />
                        <motion.img 
                            initial = {{opacity: 0, y: 20}}
                            animate = {{opacity: 1, y: 0}}
                            transition = {{delay: 2, duration: 2}}
                            src={VisualStudio} alt="Visual Studio, need I say more?" 
                        />
                    </div>
                    </div>
                </div>
            }
        </div>
    );
}

export default About;