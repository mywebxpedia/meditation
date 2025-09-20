import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type CounterState = {
  counts: Record<string, number>
}

const initialState: CounterState = {
  counts: {},
}

const slice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state, action: PayloadAction<string>) {
      const key = action.payload
      state.counts[key] = (state.counts[key] ?? 0) + 1
    },
    setCount(state, action: PayloadAction<{ key: string; value: number }>) {
      state.counts[action.payload.key] = action.payload.value
    },
    resetAll(state) {
      state.counts = {}
    },
  },
})

export const { increment, setCount, resetAll } = slice.actions
export default slice.reducer
