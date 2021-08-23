import React from 'react';
import { Element } from 'react-scroll';
import { motion } from 'framer-motion';
import { title as Title, heading as Heading } from '../common/headings';
import { paragraph as Paragraph } from '../common/paragraph';
import Facebook from '../assets/socials/Facebook_Icon.svg';
import GitHub from '../assets/socials/Github_Icon.svg';
import LinkedIn from '../assets/socials/LinkedIn_Icon.svg';

import '../styles/home.scss';

function Home(){

    return (
        <Element 
            name="Home" 
            className="Home" 
            id="Home"
        >
            <motion.div 
                initial = {{opacity: 0}}
                animate = {{opacity: 1}}
                transition = {{delay: 1, duration: 1}}
                className="InfoContainer"
            >
                <Title 
                    initial = {{opacity: 0, y: -10}}
                    animate = {{opacity: 1, y: 0}}
                    transition = {{delay: 2, duration: 3}}
                    content="HELLO THERE, I'M"
                />
                <Heading 
                    initial = {{opacity: 0, y: -10}}
                    animate = {{opacity: 1, y: 0}}
                    transition = {{delay: 3, duration: 2}}
                    content="SEAN CHRISTIAN LOZANA"
                />
                <Paragraph 
                    initial = {{opacity: 0, x: -150}}
                    animate = {{opacity: 1, x: 0}}
                    transition = {{delay: 1, duration: 4}}
                    content = "• A student philosophically and academically..."
                />
                <Paragraph 
                    initial = {{opacity: 0, x: -150}}
                    animate = {{opacity: 1, x: 0}}
                    transition = {{delay: 2, duration: 3}}
                    content="• A college senior taking up Computer Science"
                />
                <Paragraph 
                    initial = {{opacity: 0, x: -150}}
                    animate = {{opacity: 1, x: 0}}
                    transition = {{delay: 3, duration: 2}}
                    content="• Obsessed with Productivity yet a Master at procrastination"
                />
                <motion.div 
                    initial = {{opacity: 0, y: -10}}
                    animate = {{opacity: 1, y: 0}} 
                    transition = {{delay: 1, duration: 3}}
                    className="ButtonGroup"
                >
                    <motion.img
                        whileHover = {{scale: 1.2}}
                        src={Facebook} 
                        alt="Letter F inside a blue box" 
                        onClick={() => window.location.replace("https://facebook.com/devzana")}
                    />
                    <motion.img
                        whileHover = {{scale: 1.2}}
                        src={GitHub} 
                        alt="An octopus+cat(octocat) like animal inside a circle" 
                        onClick={() => window.location.replace("https://github.com/lozanasc")}
                    />
                    <motion.img 
                        whileHover = {{scale: 1.2}}
                        src={LinkedIn} 
                        alt="Letter's in inside a black border box" 
                        onClick={() => window.location.replace("https://github.com/lozanasc")}
                    />
                </motion.div>
            </motion.div>
        </Element>
    );
}

export default Home;