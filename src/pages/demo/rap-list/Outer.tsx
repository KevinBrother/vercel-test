// TODO 支持别名
// import { ReactIcon } from '@/assets' 

import React, { useState } from 'react'
import { ReactIcon } from '../../../assets';
import './index.less'

interface IProps {
  icon?: React.ReactNode;
  content: any;
  suffix?: React.ReactNode;
}

// outer-style
// inner-style

export default function RpaList() {

  const outerStyle = {
    padding: '8px'
  }
  const innerStyle = {
    padding: '8px'
  }

  const data: IProps[] = [
    {
      icon: <ReactIcon style={{ width: '16px', height: '16px' }} />,
      content: ';asldjfpoqwefasdf',
      suffix: 'good'
    },
    {
      icon: <ReactIcon style={{ width: '16px', height: '16px' }} />,
      content: ';asldjfpoqwefasdf',
      suffix: 'good'
    }
  ]

  return (
    <div>
      1212
      {data.map(({ icon, content, suffix }, index) => {
        return (
          <div key={index} style={outerStyle} className="wrapper">
            <ul style={innerStyle} className="inner-wrapper">
              <li> <div> {icon} </div></li>
              <li> {content}  </li>
              <li> {suffix}  </li>
            </ul>
          </div>
        )
      })}
    </div>
  )
}


