import React from 'react'
import ReactDOM from 'react-dom/client'
import { NextUIProvider } from '@nextui-org/react'
import { Provider } from 'react-redux'
import store from './redux/store.ts'
import Router from '@src/Router.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>  
    <React.StrictMode>
      <NextUIProvider>
        <Router />
      </NextUIProvider>
    </React.StrictMode>
  </Provider>
)
