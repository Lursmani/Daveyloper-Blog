import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


const Home: NextPage = () => {
  

  return (
    <div className={styles.container}>
      <Head>
        <title>Daveyloper Blog</title>
        <meta name="description" content="A personal blog of Davit Lursmanashvili" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
    </div>
  )
}

export default Home
