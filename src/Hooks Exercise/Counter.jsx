import React from 'react'
import style from '../App.module.css'

import theme from './ColorChange.module.css'
export default function Counter({prop ,theme}) {
  return (
    <div className={style.counterResult}>
        <div className={`${theme}${theme}`}>
          Counter Value: {prop}
        </div>
    </div>
  )
}
