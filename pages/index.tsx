import Head from 'next/head'
import { FC } from 'react';
import styles from '../styles/index.module.css';
const Home:FC =  function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p className={styles.para}>Hello world!</p>
      </div>
  )
}


export default Home;
