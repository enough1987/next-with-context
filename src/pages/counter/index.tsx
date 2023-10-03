import ButtonLink from '@/components/buttonLink'
import Counter from '@/pages/counter/components/counter';
import Header from '@/components/header'
import React from 'react';
import { CounterProvider } from '@/@state/counter';

export default React.memo(function CounterPage() {
  return (
    <CounterProvider initialCount={0}>
      <Header name="Counter">
        <ButtonLink name="Main" href="/" />
      </Header>
      <Counter />
    </CounterProvider>
  )
});