import Head from 'next/head'
import Content from '../components/searchDB'

export default function Home() {
  return (
    <div>
      <Head>
        <title>DNA Pattern Matching</title>
        <meta name="description" content="A String Matching and Regular Expression Program for DNA Pattern Matching" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Content />
    </div>
  )
}
