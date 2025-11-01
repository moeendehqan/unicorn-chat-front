import Header from './header'
import Navigation from './navigation'

type LayoutProps = {
  children: React.ReactNode
  theme: 'light' | 'dark'
  onToggleTheme: () => void
}

export default function Layout({ children, theme, onToggleTheme }: LayoutProps) {
  return (
    <div className="min-h-dvh bg-[var(--color-bg)] text-[var(--color-text)]">
      <div className="mx-auto w-full max-w-[420px]">
        <Header theme={theme} onToggleTheme={onToggleTheme} />
        <main role="main" className="px-4 pb-[calc(64px+env(safe-area-inset-bottom))]">
          {children}
        </main>
      </div>
      <Navigation />
    </div>
  )
}