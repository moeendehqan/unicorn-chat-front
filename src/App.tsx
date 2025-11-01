import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import WhyButton from './components/why-button'
import ProfilePage from './pages/profile'
import FriendsPage from './pages/friends'
import SettingsPage from './pages/settings'
import NotFoundPage from './pages/not-found'

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    const saved = localStorage.getItem('theme')
    const initial = saved === 'dark' ? 'dark' : 'light'
    setTheme(initial)
    document.documentElement.setAttribute('data-theme', initial)
  }, [])

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light'
    setTheme(next)
    document.documentElement.setAttribute('data-theme', next)
    localStorage.setItem('theme', next)
  }

  return (
    <Layout theme={theme} onToggleTheme={toggleTheme}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/friends" element={<FriendsPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  )
}

export default App

function HomePage() {
  const [count, setCount] = useState(0)
  return (
    <>
      <div className="flex items-center gap-3">
        <a href="https://vite.dev" target="_blank" aria-label="Vite">
          <img
            src={viteLogo}
            alt="Vite logo"
            className="h-14 p-2 transition-[filter] hover:drop-shadow-[0_0_2em_var(--color-primary)]"
          />
        </a>
        <a href="https://react.dev" target="_blank" aria-label="React">
          <img
            src={reactLogo}
            alt="React logo"
            className="h-14 p-2 transition-[filter] hover:drop-shadow-[0_0_2em_var(--color-accent)] motion-safe:animate-[spin_20s_linear_infinite]"
          />
        </a>
      </div>
      <h1 className="text-2xl sm:text-3xl font-bold my-4">Unicorn Chat</h1>
      <div className="p-4 flex flex-col gap-3">
        <WhyButton />
        <button
          className="w-full sm:w-auto rounded-lg border border-transparent px-4 py-2 text-base font-medium
                     bg-[var(--color-primary)] text-white transition-colors hover:border-[var(--color-accent)]
                     hover:shadow-[0_0_.6em_rgba(127,255,255,0.35)] active:scale-[0.99]"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="opacity-70">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}
