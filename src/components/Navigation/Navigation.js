import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion'
import './style/Navigation.css';

export default function Navigation(){
    return (
        <motion.nav 
        initial = {{opacity: 0, x: -250}}
        animate = {{opacity: 1, x:0}}
        transition = {{duration: 1}}
        className="Navigation">
            <motion.div 
                initial = {{opacity: 0, y: 25}}
                animate = {{opacity: 1, y:0}}
                transition = {{duration: 1.8}}
                className="InnerContainer">
                <Link
                    activeClass="active"
                    spy={true}                
                    smooth={true} 
                    duration={1000} 
                    containerId="Content" 
                    to="Home"
                >
                    HOME
                </Link>
                <Link
                    activeClass="active"
                    spy={true}        
                    smooth={true} 
                    duration={1000}
                    containerId="Content" 
                    to="About"
                >
                    ABOUT
                </Link>
                <Link
                    activeClass="active"
                    spy={true}                
                    smooth={true} 
                    duration={1000} 
                    containerId="Content" 
                    to="Projects"
                >
                    PROJECTS
                </Link>
                <Link
                    activeClass="active"
                    spy={true}                
                    smooth={true} 
                    duration={1000} 
                    containerId="Content" 
                    to="Contact"
                >
                    CONTACT
                </Link>
            </motion.div>
        </motion.nav>
    )
}