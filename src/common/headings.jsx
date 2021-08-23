import React from 'react';
import {motion} from 'framer-motion';
import '../styles/common/heading.scss';

export const title = props => (
    <motion.h1 
        initial = {props.initial}
        animate = {props.animate}
        transition = {props.transition}
        className="title"
    > 
        {props.content} 
    </motion.h1> );
    
export const heading = props => (
    <motion.h1 
        initial = {props.initial}
        animate = {props.animate}
        transition = {props.transition}
        className="header"
    > 
        {props.content} 
    </motion.h1> );