import { useState } from 'react'
import { AuthProvider } from './context/AuthContext'
import Home from './pages/Home'
import Login from './pages/Login'

function App() {
  const [activePage, setActivePage] = useState('home')

  return (
    <AuthProvider>
      {activePage === 'home' ? (
        <Home onNavigate={setActivePage} />
      ) : (
        <Login onNavigate={setActivePage} />
      )}
    </AuthProvider>
  )
}

export default App
