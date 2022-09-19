import { ReactIcon } from '@/assets'
import React, { ReactNode } from 'react';
import { CSSProperties } from 'react';
import './index.less';

interface IRpaListProps<T> {
  style?: CSSProperties | undefined;
  dataSource: T[];
  renderItem: (item: T, index: number) => ReactNode;
}

export function RpaList<T>(props: IRpaListProps<T>) {
  const { style, dataSource, renderItem } = props;

  const defaultStyle = {
    background: '#FFFFFF',
    boxShadow: '0px 2px 10px 4px rgba(0, 0, 0, 0.06)',
    borderRadius: '4px',
    border: '1px solid #E9EBEC',
    padding: '8px',
    width: '200px',
    ...style
  };

  return (
    <ul style={defaultStyle} className='rpa-list'>
      {dataSource.map((item, index) => {
        return renderItem(item, index);
      })}
    </ul>
  );
}

interface IRpaListItemProps {
  icon?: React.ReactNode;
  content: any;
  suffix?: React.ReactNode;
  onClick?: () => void;
  style?: CSSProperties | undefined;
}

export function RpaListItem(props: IRpaListItemProps) {
  const { style, icon, content, suffix, onClick } = props;
  const defaultStyle = {
    padding: '8px',
    cursor: 'pointer',
    ...style
  };

  return (<li onClick={onClick} style={defaultStyle} className='flex-justify-between'>
    <div className='flex-all-center'>
      <span className='rap-list-icon'> {icon} </span>
      <span> {content} </span>
    </div>
    <span> {suffix} </span>
  </li>
  );
}

export default function A() {
  const data = [
    {
      icon: <ReactIcon style={{ width: '16px', height: '16px' }} />,
      content: 'first',
      suffix: 'good',
      onClick: (item) => {
        console.log(item);
      }
    },
    {
      icon: <ReactIcon style={{ width: '16px', height: '16px' }} />,
      content: 'send',
      suffix: 'nice',
      onClick: (value) => {
        console.log(value);
      }
    }
  ]

  return (
    <RpaList dataSource={data} renderItem={({ icon, content, suffix }, index) => (
      <RpaListItem
        icon={icon}
        content={content}
        suffix={suffix}
        onClick={() => console.log({ icon, content, suffix, index })
        }
      />
    )}
    />
  )
} 