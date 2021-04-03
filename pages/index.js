import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {

  function callServelessFunction() {
    fetch("/.netlify/functions/hello")
    .then(resp => resp.json())
    .then(data => alert(data.message))
  }
  
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to Saturday Meeting 03 Apr 2021!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
        <button onClick={callServelessFunction}>Click me!</button>
      </main>

      <Footer />
    </div>
  )
}
