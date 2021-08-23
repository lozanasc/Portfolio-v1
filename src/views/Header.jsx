import React from 'react';
import '../styles/navbar.scss';
import { motion } from 'framer-motion'
import { Link as NavLink } from 'react-scroll';


function Header(){
    return (
        <motion.nav 
            initial = {{opacity: 0}}
            animate = {{opacity: 1}}
            transition = {{delay: 1, duration: 1.8}}
            className="NavBar"
        >
            <div className="LinkContainer">

                <NavLink 
                    activeClass="active"
                    spy={true}                
                    smooth={true} 
                    duration={1000} 
                    containerId="Content" 
                    to="Home"
                > 
                    HOME 
                </NavLink>

                <NavLink 
                    activeClass="active"
                    spy={true}        
                    smooth={true} 
                    duration={1000} 
                    containerId="Content" 
                    to="About"
                > 
                    ME
                </NavLink>

                <NavLink 
                    activeClass="active" 
                    spy={true}     
                    smooth={true} 
                    duration={1000} 
                    containerId="Content" 
                    to="Projects"
                > 
                    PROJECTS 
                </NavLink>

                <NavLink 
                    activeClass="active" 
                    spy={true}     
                    smooth={true} 
                    duration={1000} 
                    containerId="Content" 
                    to="Contact"
                >
                        CONTACT
                </NavLink>

            </div>
        </motion.nav>
    );
}

export default Header;