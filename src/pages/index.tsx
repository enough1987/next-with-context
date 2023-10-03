import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '@/components/header'
import ButtonLink from '@/components/buttonLink'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })

export default React.memo(function Home() {
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
       </Header>
      <main className={`${styles.main} ${inter.className}`}>
      </main>
    </>
  )
});
