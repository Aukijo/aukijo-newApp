import React, { useState  } from 'react'

import cat from '../Resources/cat.png'
import elephant from '../Resources/elephant.png'
import parrot from '../Resources/parrot.png'
import rabbit from '../Resources/rabbit.png'
import tortoise from '../Resources/tortoise.png'

import styles from '../Modules/animationSample.module.css'

export default function AnimatationSamples() {

    const OriginalText = "Create Now!"
    const [textElement, setTextElement] = useState('');
  
    let timer = null;

    const mouseEnter = () => {
        let i = 0;
        timer = setInterval(() => {
            if (i <= OriginalText.length) {
                
                setTextElement(OriginalText.substring(0, i));
                i++;

            } else {
                clearInterval(timer);
            }
        },40);
    }
    const mouseExit = () => {
            setTextElement("");  
    }
  return (
    <div>
        <div className={styles.logoContainer } onMouseEnter={mouseEnter} onMouseLeave={mouseExit}   >
            <div className={styles.logo}></div>
            <span className={styles.text}>{textElement}</span>
        </div>

        <div className={styles.logoContainer } onMouseEnter={mouseEnter} onMouseLeave={mouseExit}   >
            <div className={styles.logo}></div>
            <span className={styles.text}>{textElement}</span>
        </div>
    </div>
  )
}
