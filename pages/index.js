import Head from 'next/head';
import React from 'react';
import styles from '../styles/Home.module.css';
import Aside from '../component/Aside';
import Header from '../component/Header';
import Main from '../component/Main';

export default function Home() {
  const onChange = checked => {
    console.log(`switch to ${checked}`);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Native Brand</title>
        <meta name="description" content="Native brand App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Aside />
      <Main />
    </div>
  );
}
