import type { NextPage } from 'next'
import Nav from '../components/nav'
import Profile from '../components/profile'
import { motion } from 'framer-motion'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div className=''>
      <Head>
        <title>
          Welcome, I am Biruk Endris a UI/UX Designer and Front-End Developer{' '}
        </title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        {/* add image */}
        <meta
          name='description'
          content='I am Biruk, a UI/UX Designer and Front-End Dev. I specialize in Next.js, Tailwind CSS, and creating user-friendly, efficient, and visually appealing web apps. I am passionate about crafting products that users love and fulfill business needs.'
        />
        <meta
          name='keywords'
          content='portfolio, website, developer, artist, full stack, next.js, tailwind, react, framer motion, typescript, javascript, html, css, node js, express js, aws, telegram bot, bot'
        />
        <meta name='author' content='Biruk Endris' />
      </Head>
      <Nav />
      <Profile />
      <Profile />
      <Profile />
    </div>
  )
}

export default Home
