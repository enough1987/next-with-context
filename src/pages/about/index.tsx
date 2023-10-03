
import ButtonLink from '@/components/buttonLink';
import Header from '@/components/header';
import React from 'react';

export default React.memo(function About() {
  return <Header name="About">
    <ButtonLink name="Main" href="/" />
  </Header>
});