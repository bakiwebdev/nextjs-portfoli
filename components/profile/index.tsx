import Image from 'next/image'

const Profile = () => {
  return (
    <div className='relative w-full h-fit px-2 md:px-16 py-20 flex flex-col justify-between gap-2 md:gap-4'>
      {/* profile image */}
      <Image
        src='/images/profile.jpg'
        alt='profile'
        width={100}
        height={100}
        className='rounded-full object-cover h-12 w-12 md:h-20 md:w-20'
      />
      <div className='py-3 md:py-5'>
        <h1 className='text-2xl md:text-6xl font-semibold space-y-5 tracking-wide capitalize'>
          experienced UI/UX designer <br /> and front-end developer
        </h1>
      </div>
      {/* <h3 className='font-extrabold text-2xl tracking-wider'>Biruk Endris</h3> */}
      <p className='text-gray-600 text-lg md:text-2xl tracking-wider md:leading-loose'>
        Hi, I'm Biruk, a <strong>UI/UX Designer and Front-End Dev</strong>. I
        specialize in
        <strong> Next.js</strong>, <strong>Tailwind CSS</strong>, and{' '}
        <em>
          creating user-friendly, efficient, and visually appealing web apps
        </em>
        . I'm passionate about crafting products that users love and fulfill
        business needs.
      </p>
      {/* <h1>
        <span className='font-semibold text-lg tracking-wider'>
          Full Stack Developer
        </span>
        <span className='text-gray-600'>
          |
          <span className='text-gray-600'>
            React | Node | GraphQL | MongoDB | Next.js | TailwindCSS
          </span>
        </span>
      </h1> */}
      {/* profile picture */}
      {/* <Image
        src='/images/profile.jpg'
        alt='profile'
        width={200}
        height={200}
        className='rounded-full object-cover '
      /> */}
    </div>
  )
}

export default Profile
