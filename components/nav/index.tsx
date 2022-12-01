import Link from 'next/link'

import { motion } from 'framer-motion'
const Nav = () => {
  return (
    <motion.div
      initial='hidden'
      animate='visible'
      variants={{
        hidden: { opacity: 0, y: -20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { delay: 0.4, ease: 'easeInOut', duration: 0.4 },
        },
      }}
      className='sticky top-0 left-0 flex flex-row w-full justify-between items-center py-4 bg-background z-10'>
      {/* name */}
      <Link href='/'>
        <span className='text-2xl font-bold text-text'>BAKI.</span>
      </Link>
      {/* nav */}
      <div className='hidden md:flex flex-row justify-center items-center gap-10'>
        <Link href='/'>
          <span className='text-lg font-light hover:underline text-text'>
            Home
          </span>
        </Link>
        <Link href='/about'>
          <span className='text-lg font-light hover:underline text-text'>
            About
          </span>
        </Link>
        <Link href='/contact'>
          <span className='text-lg font-light hover:underline text-text'>
            Contact
          </span>
        </Link>
        <Link href='/three'>
          <span className='text-lg font-light hover:underline text-text'>
            3D Profile
          </span>
        </Link>
      </div>
    </motion.div>
  )
}

export default Nav
