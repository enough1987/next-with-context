import ButtonLink from '@/components/buttonLink';
import Header from '@/components/header';
import React from 'react';
import { useRouter } from 'next/router';

export default React.memo(function Nested() {
  const route = useRouter();
  const params = route.query.params || [];

  return <>
    <Header name="Nested">
        <ButtonLink name="Main" href="/" />
    </Header>
    {
        params[0] && <p> param 1 : {params[0]} </p>
    }
    {
        params[1] && <p> param 2 : {params[1]} </p>
    }
    {
        params[2] && <p> param 3 : {params[2]} </p>
    }
  </>
});