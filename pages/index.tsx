import Link from 'next/link'

export default function Home() {
  return (
    <div className='max-w-2xl mx-auto text-center space-y-6 py-6'>
      <h1 className='text-3xl font-bold'>Meditation App</h1>
      <p>Choose a page to begin.</p>
      <div className='grid grid-cols-2 gap-4'>
        <Link href='/shiv' className='py-4 rounded shadow'>Shiv</Link>
        <Link href='/radha' className='py-4 rounded shadow'>Radha</Link>
        <Link href='/krishna' className='py-4 rounded shadow'>Krishna</Link>
        <Link href='/waheguru' className='py-4 rounded shadow'>Waheguru</Link>
      </div>
    </div>
  )
}
