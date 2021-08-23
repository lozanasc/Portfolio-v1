import React, { useRef } from 'react';
import onScreenHook from '../util/useOnScreen';
import { Element } from 'react-scroll';
import { motion } from 'framer-motion';
import '../styles/about.scss';

import { title as Title, heading as Heading } from '../common/headings';
import { paragraph as Paragraph } from '../common/paragraph';

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
    // const isAboutOnScreen = onScreenHook(aboutRef);

    return (
        <Element
            name="About" 
            className="About" 
            id="About"
            ref = {aboutRef}
        >
            
        </Element>
    );
}

export default About;