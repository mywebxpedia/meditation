import React from 'react'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { increment } from '../store/counterSlice'

type Props = {
  name: string
  color: string
  accent: string
}

export default function DeityPage({ name, color, accent }: Props) {
  const dispatch = useAppDispatch()
  const count = useAppSelector((s) => s.counter.counts[name] ?? 0)

  return (
    <div className={`max-w-3xl mx-auto p-8 rounded-lg shadow ${color} ${accent} bg-opacity-10`}>
      <h1 className='text-4xl font-bold mb-6'>{name}</h1>
      <p className='text-xl mb-4'>Count: <span className='font-mono'>{count}</span></p>
      <button
        onClick={() => dispatch(increment(name))}
        className='px-6 py-3 rounded-md shadow-lg bg-white/90 hover:bg-white'
      >
        +1
      </button>
    </div>
  )
}
