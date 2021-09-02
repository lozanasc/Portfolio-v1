import React , {useRef} from 'react';
import './style/Home.css';
import { motion } from 'framer-motion';

import onScreenHook from '../../utilities/useOnScreen';
import GitHub from '../../assets/icons/socials/Github_Icon.svg';
import Facebook from '../../assets/icons/socials/Facebook_Icon.svg';
import LinkedIn from '../../assets/icons/socials/LinkedIn_Icon.svg';

export default function Home(){

    const imageHref = (url) => {
        window.location.replace(url);
    }

    const homeRef = useRef();
    const isOnScreen = onScreenHook(homeRef);

    return (
        <div ref={homeRef} className="Home">
            {
                isOnScreen &&
                <div className="InnerContainer">
                    <motion.h1
                        initial = {{opacity: 0, y: -25}}
                        animate = {{opacity: 1, y:0}}
                        transition = {{delay: 1, duration: 1}}
                    >HELLO THERE! I'M</motion.h1>
                    <motion.h2
                        initial = {{opacity: 0, y: -25}}
                        animate = {{opacity: 1, y:0}}
                        transition = {{delay: 2, duration: 1}}
                    >SEAN CHRISTIAN LOZANA</motion.h2>
                    <motion.p
                        initial = {{opacity: 0, x: -25}}
                        animate = {{opacity: 1, x:0}}
                        transition = {{delay: 2.5, duration: 1}}
                    > • A <b>student</b> philosophically and academically </motion.p>
                    <motion.p
                        initial = {{opacity: 0, x: -25}}
                        animate = {{opacity: 1, x:0}}
                        transition = {{delay: 3, duration: 1}}
                    > • A college senior taking up <b>Computer Science</b> </motion.p>
                    <motion.p
                        initial = {{opacity: 0, x: -25}}
                        animate = {{opacity: 1, x:0}}
                        transition = {{delay: 3.5, duration: 1}}
                    > • 💕's productivity yet a master <b>procrastinator</b> </motion.p>
                    <motion.div 
                        initial = {{opacity: 0, x: -25}}
                        animate = {{opacity: 1, x:0}}
                        transition = {{delay: 4, duration: 1}}
                        className="IconGroup">
                        <motion.img
                            whileTap = {{scale: 1.2}}
                            whileHover = {{scale: 1.2}}
                            onClick = {() => imageHref("https://facebook.com/devzana")}
                            src={Facebook} alt="" />
                        <motion.img 
                            whileTap = {{scale: 1.2}}
                            whileHover = {{scale: 1.2}}
                            onClick = {() => imageHref("https://www.linkedin.com/in/sean-christian-lozana-385711185/")}
                            src={LinkedIn} alt="" />
                        <motion.img 
                            whileTap = {{scale: 1.2}}
                            whileHover = {{scale: 1.2}}
                            onClick = {() => imageHref("https://github.com/lozanasc")}
                            src={GitHub} alt="" />
                    </motion.div>
                </div>
            }
        </div>
    );
}