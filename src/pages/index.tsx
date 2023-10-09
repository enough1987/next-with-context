import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '@/components/header'
import ButtonLink from '@/components/buttonLink'
import React from 'react'
import { GetServerSideProps } from 'next/types'

const inter = Inter({ subsets: ['latin'] })


export const getServerSideProps = (async (_context) => {
  const data = await fetch(`${process.env.URL}/api/hello`).then(response => response.json());

  return { props: { data: data.data } }
}) satisfies GetServerSideProps<{
  data: number[]
}>

interface IHomeProps {
  data: number[]
}

export default React.memo(function Home({ data }: IHomeProps) {
  return (
    <>
      <Head>
        <title>Next</title>
        <meta name="description" content="Next + Context" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header name="Main page">
        <ButtonLink name="Counter" href="/counter" />
        <ButtonLink name="About" href="/about" />
        <ButtonLink name="Nested" href="/nested" />
        <ButtonLink name="Nested 2" href="/nested/test" />
        <ButtonLink name="Nested 3" href="/nested/test/3" />
       </Header>
      <main className={`${styles.main} ${inter.className}`}>
        <ul>
          {data.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </main>
    </>
  )
});
