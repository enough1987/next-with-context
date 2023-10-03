import React, { useEffect } from 'react'


export const CounterContext = React.createContext({
    counter: 0, 
    increment: () => {}, 
    decrement: () => {},
  });

interface ICounterProviderProps {
    initialCount: number;
    children: JSX.Element | JSX.Element[]
}

const COUNTER_STORAGE_KEY = 'counter';

export  const CounterProvider = ({ children, initialCount = 0 }: ICounterProviderProps) => {
    const [counter, setCounter] = React.useState(initialCount)
    
    useEffect(() => setCounter(+(localStorage.getItem(COUNTER_STORAGE_KEY) || 0)), [])
  
    const increment = () => setCounter(prev => {
      localStorage.setItem(COUNTER_STORAGE_KEY, (prev + 1).toString())
      return prev + 1;
    });
    const decrement = () => setCounter(prev => {
      localStorage.setItem(COUNTER_STORAGE_KEY, (prev - 1).toString())
      return prev - 1;
    });
  
    return (
        <CounterContext.Provider value={{ counter, increment, decrement }}>
            {children}
        </CounterContext.Provider>
    )
};

export const useCounterContext = () => React.useContext(CounterContext)