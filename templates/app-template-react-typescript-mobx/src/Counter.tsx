import { observer } from 'mobx-react';
import React from 'react';
import { useCounter } from './store';

export const Counter = observer(() => {
  const counter = useCounter();
  return (
    <div className="Counter">
      <button className="Counter-Button" onClick={() => counter.decrement()}>
        -
      </button>
      <span className="Counter-Count">{counter.count}</span>
      <button className="Counter-Button" onClick={() => counter.increment()}>
        +
      </button>
    </div>
  );
});
