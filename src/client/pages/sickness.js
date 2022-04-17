import Head from 'next/head'
import Content from '../components/addSickness'

export default function Sickness() {
  return (
    <div>
      <Head>
        <title>Add Sickness</title>
        <meta name="description" content="A String Matching and Regular Expression Program for DNA Pattern Matching" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Content />
    </div>
  )
}
