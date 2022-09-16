// TODO 支持别名
// import { ReactIcon } from '@/assets' 

import React, { CSSProperties } from 'react'
import { isFunction, omit } from 'lodash-es'
import { ReactIcon } from '../../../assets';
import './index.less'

interface IData {
  icon?: React.ReactNode;
  content: any;
  suffix?: React.ReactNode;
  onClick?: (data: IData) => void;
}

interface IProps {
  data: IData[];
  outerStyle?: CSSProperties | undefined;
  innerStyle?: CSSProperties | undefined;
}

function RpaList(props: IProps) {
  const { outerStyle, innerStyle, data } = props;

  const defaultOuterStyle = {
    background: '#FFFFFF',
    boxShadow: '0px 2px 10px 4px rgba(0, 0, 0, 0.06)',
    borderRadius: '4px',
    border: '1px solid #E9EBEC',
    padding: '8px',
    width: '200px',
    ...outerStyle
  }

  const defaultInnerStyle = {
    padding: '8px',
    cursor: 'pointer',
    ...innerStyle
  }

  return (
    <ul style={defaultOuterStyle} className="wrapper">
      {data.map((item, index) => {
        const { icon, content, suffix, onClick } = item;
        const restProps = omit(item, ['onClick']);
        return (
          <li onClick={() => onClick && isFunction(onClick) && onClick(restProps)} style={defaultInnerStyle} className="flex-justify-between" key={index}>
            <div className="flex-all-center">
              <span className='rap-list-icon'> {icon} </span>
              <span> {content} </span>
            </div>
            <span> {suffix} </span>
          </li>
        )
      })}
    </ul>
  )
}




export default function good() {
  const data: IData[] = [
    {
      icon: <ReactIcon style={{ width: '16px', height: '16px' }} />,
      content: 'first',
      suffix: 'good',
      onClick: (value: IData) => {
        console.log(value);
      }
    },
    {
      icon: <ReactIcon style={{ width: '16px', height: '16px' }} />,
      content: 'send',
      suffix: 'nice',
      onClick: (value: IData) => {
        console.log(value);
      }
    }
  ]

  return <RpaList data={data} />

}


