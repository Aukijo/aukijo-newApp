import React from 'react'
import styles from "../Modules/Colors.module.css"
import '../Modules/color.css'
export default function ThemeChanger({number,textColor}) {

  const customClassName = "box"+number
  return (
    <div>
      <div className={styles.container}>
        <div className={styles["box"+number[0]]}>
          <h1 className={styles[textColor[0]]}>1</h1>
        </div>

        <div className={styles["box"+number[1]]}>
          <h1 className={styles[textColor[1]]}>2</h1>
        </div>

        <div className={styles["box"+number[2]]}>
          <h1 className={styles[textColor[2]]}>3</h1>
        </div>

        <div className={styles["box"+number[3]]}>
          <h1 className={styles[textColor[3]]}>4</h1>
        </div>

        <div className={styles["box"+number[4]]}>
          <h1 className={styles[textColor[4]]}>5</h1>
        </div>
        
      </div>
    </div>
    
  )
}
