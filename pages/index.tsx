import type { NextPage } from 'next'
import Image from 'next/image'
import people from "../public/people.jpg"

const Home: NextPage = () => {
  return (
    <div className='landing'>
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
