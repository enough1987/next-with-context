import ButtonLink from '@/components/buttonLink';
import Header from '@/components/header';
import React from 'react';

export default React.memo(function Nested() {
  return <Header name="Nested">
    <ButtonLink name="Main" href="/" />
  </Header>
});