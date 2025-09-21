import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { store, persistor } from '../store'
import { PersistGate } from 'redux-persist/integration/react'
import Nav from '../components/Nav'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className='min-h-screen'>
          <Nav />
          <main className=''>
            <Component {...pageProps} />
          </main>
        </div>
      </PersistGate>
    </Provider>
  )
}
