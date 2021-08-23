import React from 'react';
import { motion } from 'framer-motion';
import '../styles/common/paragraph.scss';

export const paragraph = props => (
    <motion.p 
        initial = {props.initial}
        animate = {props.animate}
        transition = {props.transition}
        className="paragraph"
    >
        { props.content }
    </motion.p>
);