import Head from 'next/head'
import Content from '../components/dnaTest'

export default function Test() {
  return (
    <div>
      <Head>
        <title>DNA Test</title>
        <meta name="description" content="A String Matching and Regular Expression Program for DNA Pattern Matching" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Content />
    </div>
  )
}
