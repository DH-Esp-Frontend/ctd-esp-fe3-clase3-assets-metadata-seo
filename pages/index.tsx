import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import people from "../public/people.jpg"

const Home: NextPage = () => {
  return (
    <div className='landing'>
      <Head>
        <title>Digital House</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content='En Digital House somos una organización 𝘦𝘥𝘵𝘦𝘤𝘩 que ofrece 
        distintas opciones de formación 100% a distancia sobre programación, diseño UX, datos y 
        marketing digital. Entre ellas encontrarás una carrera, cursos intensivos, capacitaciones a 
        empresas, programas con escuelas y más.' />
        <link rel="shortcut icon" href="/logo.png" />
      </Head>
      <div>
       <h1>More than education</h1>
       <h2>Share experiences</h2>
       <button>Apply now</button>
      </div>
     <Image src={people} alt="people" width={800} height={800} />
    </div>
  )
}

export default Home
