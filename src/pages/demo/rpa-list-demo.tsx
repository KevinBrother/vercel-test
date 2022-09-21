import { ReactIcon } from "@/assets";
import { RpaList } from "@/components";
import { RpaListItem } from "@/components/rap-list";

export default function RpaListDemo() {
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
        key={index}
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