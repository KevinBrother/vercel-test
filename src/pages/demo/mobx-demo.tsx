import { observer } from 'mobx-react'
import { useState } from 'react'
import { testStore, testStoreService } from '../../stores/testStore'

const NumberMobxTest = observer(function NumberMobxTest() {
  const [numbers, setNumbers] = useState<number[]>([])

  function handleClick() {
    const numbers = testStore.getNumber(2);
    setNumbers(numbers);
  }

  return (
    <div className="border-dashed">
      <button onClick={handleClick}>获取特定number的值</button>
      <div> 数值为： {numbers.length} || {testStore.arr.length} || {testStore.getNumber(2).length}</div>

      {testStore.arr.map(
        (item, index) =>
          <div key={index}>
            {item}
            <button onClick={() => testStore.add(item + 1)}>add</button>
          </div>
      )}
    </div>
  )
})

export default observer(function MobxDemo() {
  const [users, setUsers] = useState<any[]>([])

  function handleSelf(id: string) {
    testStoreService.getUser(id).then((users) => {
      setUsers(users);
    })
  }

  function handleChildren(id: string) {
    testStoreService.getChildren(id).then((users) => {
      setUsers(users);
    })
  }

  return (
    <div>
      <NumberMobxTest />
      <div className='border-dotted'>
        {testStore.users.map(
          (item, index) =>
            <div key={index}>
              {item.id}: {item.name}
              <button onClick={() => testStore.getUser(item.id)}>add</button>
              <button onClick={() => handleSelf(item.id)}> 通过service获取自己。。。 </button>
              <button onClick={() => handleChildren(item.id)}> 通过service获取自己的儿子们 </button>
            </div>
        )}
        // id为1的有
        {testStore.getUser('1').map(
          (item, index) =>
            <div key={index}>
              {item.name}
            </div>
        )}

        {users.map(
          (item, index) =>
            <div key={index}>
              {item.name}
              <button onClick={() => handleChildren(item.id)}> 通过service获取自己的儿子们 </button>
            </div>
        )}
      </div>
    </div>
  )
})


