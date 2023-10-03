
import Button from '@mui/material/Button';
import styles from './index.module.css'
import React from 'react';
import { useCounterContext } from '@/@state/counter';

export default React.memo(function Counter() {
  const { counter, increment, decrement } = useCounterContext();
  
  return (<main className={styles.counter}>
    <p> resault: {counter} </p>

    <Button onClick={increment}> increment</Button>
    <Button onClick={decrement}> decrement</Button>
  </main>)
});