import { makeAutoObservable } from 'mobx'


class TestStore {
  arr = [1];
  users = [
    {
      id: '1',
      name: 'John',
    },
    {
      id: '1',
      name: 'Mack',
    },
    {
      id: '2',
      name: 'Essen',
    }
  ];

  constructor() {
    makeAutoObservable(this);
  }

  add(value: number) {
    this.arr.push(value);
  }

  getNumber(number: number) {
    const numbers = this.arr.filter(item => item === number) || [];
    return numbers;
  }

  getUser(id: string) {
    const users = this.users.filter(item => item.id === id);
    return users;
  }

}

export const testStore = new TestStore();

export const testStoreService = {
  getUser() {
    return new Promise((resolve, reject) => {
      const users = testStore.getUser('1');
      resolve(users)
    })
  }
}
