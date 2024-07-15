import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import ThemeButton from './components/ThemeButton'
import { ThemeProvider } from './context/themecontext'
import {} from './context/themecontext'

function App() {
  const [themeMode, setThemeMode] = useState('light')
  
  const darkTheme = () => {
    setThemeMode('dark')
  }

  const lightTheme = () => {
    setThemeMode('light')
  }

  useEffect(() => {
    document.querySelector('html').classList.remove('dark', 'light')
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])

  return (
    // The children: Card and ThemeButton will have access of these 3 context varaibles/functions in value={{}}
    <ThemeProvider value={{lightTheme, darkTheme, themeMode}}>
      <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                  <ThemeButton />
              </div>

              <div className="flex w-full max-w-sm mx-auto">
                  <Card />
              </div>

          </div>
      </div>
    </ThemeProvider>
  )
}

export default App
