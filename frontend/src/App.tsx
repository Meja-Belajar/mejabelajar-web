import { useEffect } from 'react'
import './assets/global.css'
import { Button } from '@nextui-org/react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import { AnimatePresence } from 'framer-motion'
import { UserProvider } from './context/UserContext'

const App: React.FC = () => {

  return (
    <>
      <BrowserRouter>
        <UserProvider>

          <AnimatePresence>

            <Routes>
              <Route path="/" element={<Landing />} />
            </Routes>

          </AnimatePresence>
        
        </UserProvider>
      </BrowserRouter>
    </>
  )
}

export default App
