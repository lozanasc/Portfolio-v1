import React , { useRef } from 'react';
import { motion } from 'framer-motion';
import './style/About.css';
import onScreenHook from '../../utilities/useOnScreen';
// Technology assets
import JavaScript from '../../assets/icons/technologies/JS_Icon.svg';
import NodeJS from '../../assets/icons/technologies/NodeJS_Icon.svg';
import ReactJS from '../../assets/icons/technologies/React_Icon.svg';
import Laravel from '../../assets/icons/technologies/Laravel_Icon.svg';
import PHP from '../../assets/icons/technologies/Php_Icon.svg';
import MySQL from '../../assets/icons/technologies/MySQL_Icon.svg';
import Java from '../../assets/icons/technologies/Java_Icon.svg';
import Cpp from '../../assets/icons/technologies/C++_Icon.svg';

// Tool assets
import Git from '../../assets/icons/tools/Git_Icon.svg';
import IntelliJ from '../../assets/icons/tools/IntelliJ_Icon.svg';
import Heroku from '../../assets/icons/tools/Heroku_Icon.svg';
import VSCode from '../../assets/icons/tools/VSCode_Icon.svg';
import AndroidStudio from '../../assets/icons/tools/Android_Studio_Icon.svg';
import Linux from '../../assets/icons/tools/Linux_Icon.svg';
import Trello from '../../assets/icons/tools/Trello_Icon.svg';
import Notion from '../../assets/icons/tools/Notion_Icon.svg';
import Figma from '../../assets/icons/tools/Figma_Icon.svg';
import VisualStudio from '../../assets/icons/tools/Visual_Studio_Icon.svg';

export default function About(){

    
    const aboutPageRef = useRef();
    const isAboutPageOnScreen = onScreenHook(aboutPageRef);
    const TechIcons = [JavaScript, NodeJS, ReactJS, Laravel, PHP, MySQL, Java, Cpp];
    const ToolIcons = [Git, IntelliJ, Heroku, VSCode, AndroidStudio, Linux, Trello, Notion, Figma, VisualStudio];
    let iconDelay = 0;

    return(
        <div 
        ref = {aboutPageRef}
        className="About">
            {
                isAboutPageOnScreen &&
                <motion.div 
                initial = {{opacity: 0}}
                animate = {{opacity: 1}}
                transition = {{delay: 1, duration: 1}}
                className="InnerContainer">
                    <div className="ProfileContainer">
                        <motion.div 
                            initial = {{opacity: 0, scale: 0.9}}
                            animate = {{opacity: 1, scale: 1}}
                            transition = {{delay: 1, duration: 2.5}}
                            className="Profile"/>
                    </div>
                    <div className="MeContainer">
                        <motion.h1
                            initial = {{opacity: 0, y: -25}}
                            animate = {{opacity: 1, y:0}}
                            transition = {{delay: 2, duration: 1}}
                        >
                            A sprinkle about me...               
                        </motion.h1>
                        <motion.p
                            initial = {{opacity: 0, x: -25}}
                            animate = {{opacity: 1, x:0}}
                            transition = {{delay: 2.2, duration: 1}}
                        >
                            I’m currently a senior Computer Science student @ <b>Negros Oriental State University</b>,
                            I <b>enjoy learning</b> just about anything that’s related to Computer Science and Programming, 
                            but I’m currently upskilling on my <b>Web and Mobile development skills</b>.
                        </motion.p>
                        <motion.h2
                            initial = {{opacity: 0, y: -25}}
                            animate = {{opacity: 1, y:0}}
                            transition = {{delay: 2.4, duration: 1}}
                        >
                            Technologies I'm enjoying so far:
                        </motion.h2>
                        <div className="IconGroup">
                            {
                                TechIcons.map((items, key) => 
                                    <motion.img
                                        initial = {{opacity: 0, y: 25}}
                                        animate = {{opacity: 1, y:0}}
                                        transition = {{delay: (iconDelay += 0.15), duration: 1}}
                                        src={items} 
                                        alt="" 
                                        key={key}
                                    />
                                    )
                            }
                        </div>
                        <motion.h2
                            initial = {{opacity: 0, y: -25}}
                            animate = {{opacity: 1, y:0}}
                            transition = {{delay: 2.8, duration: 1}}
                        >
                            Tools I'm familiar with:
                        </motion.h2>
                        <div className="IconGroup">
                            {
                                ToolIcons.map((items, key) => 
                                    <motion.img 
                                        initial = {{opacity: 0, y: 25}}
                                        animate = {{opacity: 1, y:0}}
                                        transition = {{delay: (iconDelay += 0.5), duration: 1}}
                                        src={items} 
                                        alt="" 
                                        key={key}
                                    />
                                    )
                            }
                        </div>
                    </div>
                </motion.div>
            }
        </div>
    );
}