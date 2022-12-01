import Image from 'next/image'

const Profile = () => {
  return (
    <div className='relative w-full h-fit px-16 py-20 flex flex-col justify-between'>
      {/* name intro */}
      <h3 className='font-semibold text-lg tracking-wider'>Biruk Endris</h3>

      <div className='py-5 text-8xl space-y-5'>
        <h1 className=''>Full Stack &</h1>
        <h1 className='px-20'>UI-UX Developer</h1>
      </div>
      <h1>
        <span className='font-semibold text-lg tracking-wider'>
          Full Stack Developer
        </span>
        <span className='text-gray-600'>
          |
          <span className='text-gray-600'>
            React | Node | GraphQL | MongoDB | Next.js | TailwindCSS
          </span>
        </span>
      </h1>
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
