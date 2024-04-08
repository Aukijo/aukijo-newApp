import React, { useState } from 'react'
import style from '../App.module.css'
import ThemeChanger from './ThemeChanger'

import NewDivComponent from './NewDiv'
import AnimatationSamples from './AnimatationSamples'

export default function Hooks() {

  const names = ["Roden", "Melanie","Aishaya","Santuele","Vhenz"]

  const colors = ['White','Yellow','Blue','Black','Orange']
  const [color,setColor] = useState(colors)

  const originalNum = [1,2,3,4,5]
  const [num,setNum] = useState(originalNum)

  const [showDiv,setshowDiv] = useState([]);


  const handleClick =(e)=>{ 

    return e.target.value  === "colorChanger" ? (
      setNum(num.map((x)=> x > 4 ? 1 : x+1)),
      setColor(color.map((x,index) =>color[(index + 1) % colors.length]))

    ) : e.target.value  === "colorChanger" ? (
      alert("Change")
    ) : null ;

  }
 
  const handleAddDiv = (e) => {
    const limitMessage = <div className={style.error}><h1>Limit is Reached!</h1></div>;

    return showDiv.length < 5 ? (setshowDiv(prev =>[...prev, (<NewDivComponent key={showDiv.length}/>)])
      ): !showDiv.includes(limitMessage) ? (setshowDiv(prev =>[...prev,limitMessage]),
      setTimeout(()=> {setshowDiv(prev => prev.filter(item => item !==limitMessage))},550)
      ) : console.log('NaN')
  }

  return (
    <div className={style.container}>
       <button value="colorChanger" onClick={handleClick}>Change Color</button>
       <button value="CompAdder" onClick={handleAddDiv}>Add Div</button>
       {showDiv}
        <ThemeChanger number ={num} textColor ={color} />
       
    </div>
  )
}
