import Link from 'next/link'

export default function Nav() {
  return (
    <nav className='w-full border-b p-4 bg-white/80 sticky top-0 backdrop-blur'>
      <div className='max-w-5xl mx-auto flex items-center justify-between'>
        <div className='text-lg font-semibold'>Meditation App</div>
        <div className='space-x-3'>
          <Link href='/shiv' className='px-3 py-1 rounded hover:bg-gray-100'>Shiv</Link>
          <Link href='/radha' className='px-3 py-1 rounded hover:bg-gray-100'>Radha</Link>
          <Link href='/krishna' className='px-3 py-1 rounded hover:bg-gray-100'>Krishna</Link>
          <Link href='/waheguru' className='px-3 py-1 rounded hover:bg-gray-100'>Waheguru</Link>
        </div>
      </div>
    </nav>
  )
}
