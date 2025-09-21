import React from 'react'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { increment, resetAll } from '../store/counterSlice'

type Props = {
  name: string
  color: string
  accent: string
}

export default function DeityPage({ name, color, accent }: Props) {
  const dispatch = useAppDispatch()
  const count = useAppSelector((state) => state.counter.counts[name] ?? 0)

  return (
    <div className={`max-w-3xl mx-auto p-8 rounded-lg shadow text-center ${color} ${accent} bg-opacity-10`} style={{minHeight: 'calc(100vh - 60px)'}}>
      <h1 style={{fontSize: '5rem'}}>{name}</h1>
      {/* <p className='text-xl mb-4'>Count: <span className='font-mono'></span></p> */}
      <button
        style={{width: 200,height: 200,boxShadow: '0 0 10px rgba(0, 0, 0, .4)', borderRadius: '100%', background: '#fff'}}
        onClick={() => dispatch(increment(name))}
        className='text-3xl'
      >
        {count}
      </button>
      <button style={{
        background: 'rgba(255,255,255,.4)',
        position: 'absolute',
        right: 10,
        bottom: 10,
        width: 120,
        height: 40,
        borderRadius: 10,
      }} onClick={()=>{dispatch(resetAll())}}> Reset</button>
    </div>
  )
}
