import React , {useRef } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'react-hot-toast';
import emailjs from 'emailjs-com';
import ToolTip from 'react-tooltip';
import './style/Contact.css';
import onScreenHook from '../../utilities/useOnScreen';
import Phone from '../../assets/icons/socials/Phone_Icon.svg';
import Email from '../../assets/icons/socials/Email_Icon.svg';
import Location from '../../assets/icons/socials/Location_Icon.svg';

export default function Contact(){

    const toastError = () => toast.error('Something went wrong, please recheck fields!', {
        position: 'bottom-center',
        icon: '😥',
        style: {
            fontFamily: "Work Sans",
            fontWeight: 'bold'
        }
    });
    
    const toastSuccess = (msg) => toast.success(msg, {
        position: 'bottom-center',
        icon: '🎉',
        style: {
            fontFamily: "Work Sans",
            fontWeight: 'bold'
        }
    });

    const sayHello = (e) => {
        e.preventDefault();
        // TODO: Figure out environment variables for React 
        // ! PROTECT THEM CREDENTIALS MY BOI
        emailjs.sendForm(process.env.SERVICE_ID, process.env.TEMPLATE_ID, e.target, process.env.USER_ID)
      .then((result) => {
          result.text === 'OK' && toastSuccess('Message sent!');
      }, (error) => {
          toastError('Something went wrong, inquiry did not send!');
          console.log(error);
      });
    }

    const contactRef = useRef();
    const isOnScreen = onScreenHook(contactRef);

    return (
        <div ref = {contactRef} className="Contact">
            {
                isOnScreen &&
                <motion.div 
                    initial = {{opacity: 0}}
                    animate = {{opacity: 1}}
                    transition = {{duration: 1.5}}
                className="InnerContainer">
                    <motion.div 
                        initial = {{opacity: 0, x: 25}}
                        animate = {{opacity: 1, x:0}}
                        transition = {{delay: 1, duration: 1}}
                    className="ContactInfo">
                        <ToolTip place="top" type="dark" effect="solid" globalEventOff='click'/>
                        <motion.div 
                        whileHover = {{scale: 1.1, fontWeight: 'bold'}}
                        className="Info">
                            <img data-tip="+63-09456477432" data-event='click focus' src={Phone} alt="" />
                            <p>+63 09456477432</p>
                        </motion.div>
                        <motion.div 
                        whileHover = {{scale: 1.1, fontWeight: 'bold'}}
                        className="Info">
                            <img data-tip="Dumaguete City, PH" data-event='click focus' src={Location} alt="" />
                            <p>Dumaguete City, PH</p>
                        </motion.div>
                        <motion.div 
                        whileHover = {{scale: 1.1, fontWeight: 'bold'}}
                        className="Info">
                            <img data-tip="lozanascbusiness@gmail.com" data-event='click focus' src={Email} alt="" />
                            <p>lozanascbusiness@gmail.com</p>
                        </motion.div>
                    </motion.div>
                    <form className = "ContactForm" onSubmit = {sayHello}>
                        <motion.h1
                            initial = {{opacity: 0, y: -25}}
                            animate = {{opacity: 1, y:0}}
                            transition = {{delay: 1, duration: 1}}
                        > Let's collaborate! </motion.h1>
                        <motion.p
                            initial = {{opacity: 0, y: -25}}
                            animate = {{opacity: 1, y:0}}
                            transition = {{delay: 1, duration: 1}}
                        >Let’s build powerful and meaningful applications together!</motion.p>
                        <motion.div 
                            initial = {{opacity: 0, x: -25}}
                            animate = {{opacity: 1, x:0}}
                            transition = {{delay: 1, duration: 1}}
                        className="Input">
                            <label htmlFor="name">
                                <b>Your Name</b>
                                <br/>
                                <input type="text" name="user_name"/>
                            </label>
                        </motion.div>
                        <motion.div 
                            initial = {{opacity: 0, x: -25}}
                            animate = {{opacity: 1, x:0}}
                            transition = {{delay: 1.4, duration: 1}}
                        className="Input">
                            <label htmlFor="email">
                                <b>Your Email</b>
                                <br/>
                                <input type="email" name="user_email"/>
                            </label>
                        </motion.div>
                        <motion.div 
                            initial = {{opacity: 0, x: -25}}
                            animate = {{opacity: 1, x:0}}
                            transition = {{delay: 1.8, duration: 1}}
                        className="Input">
                            <label htmlFor="message">
                                <b>Message</b>
                                <br/>
                                <textarea className = "Message" type="text" name="message"/>
                            </label>
                        </motion.div>
                        <motion.button 
                            whileHover = {{scale: 1.1}}
                            type="submit"
                        >
                            <b>Let's go!</b>
                        </motion.button>
                    </form>
                </motion.div>
            }
        </div>
    );
}