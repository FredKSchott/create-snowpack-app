import { action, observable } from 'mobx';
import React, { createContext, useContext } from 'react';

class CounterStore {
  @observable count: number = 0;
  @action increment() {
    this.count++;
  }
  @action decrement() {
    this.count--;
  }
}

const counterStore = new CounterStore();

export const useCounter = () =>
  useStoreContext(createContext<CounterStore>(counterStore));

const useStoreContext = <T>(store: React.Context<T>) => useContext(store);
