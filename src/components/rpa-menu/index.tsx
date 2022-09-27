import React from 'react'
import classnames from 'classnames';
import $ from 'jquery';
import './index.less'

interface IRpaMenu {
  text: React.ReactNode,
  key: string;
  onClick: Function;
}
export function RpaMenu({ dataSource, defaultKey }: { dataSource: IRpaMenu[], defaultKey: string }) {

  return (
    <div className="rpa-menu">
      <ul>
        {
          dataSource.map(({ key, text, onClick }) => (
            <li onClick={() => onClick()} key={key} className={classnames({ 'active': defaultKey === key })}>
              <div>{text}</div>
            </li>
          ))
        }
      </ul>
    </div>
  )
  /*   return (
      <div className="rpa-menu-demo">
        <ul>
          <li className="active">
            <div>1212</div>
          </li>
          <li>
            <div>1212</div>
          </li>
          <li><div>adaqw</div></li>
          <li><div>adaqw</div></li>
        </ul>
      </div>
  
    ) */
}
