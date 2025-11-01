type HeaderProps = {
  title?: string
  theme: 'light' | 'dark'
  onToggleTheme: () => void
}

const Header = ({ title = 'Unicorn Chat', theme, onToggleTheme }: HeaderProps) => {
  const isDark = theme === 'dark'
  return (
    <header
      role="banner"
      className="flex items-center justify-between h-14 px-3 rounded-xl shadow-sm bg-[var(--color-bg)] text-[var(--color-text)]"
    >
      <div className="text-base font-semibold truncate">{title}</div>
      <div className="flex items-center gap-2">
        <button
          className="w-auto inline-flex items-center justify-center p-2 rounded-full border border-transparent hover:border-[var(--color-accent)] hover:shadow-[0_0_6px_rgba(127,255,255,0.35)]"
          onClick={onToggleTheme}
          aria-label={isDark ? 'بازگشت به حالت روشن' : 'فعال‌سازی حالت تاریک'}
        >
          <span className="sr-only">{isDark ? 'روشن' : 'تاریک'}</span>
          {isDark ? <SunIcon /> : <MoonIcon />}
        </button>
      </div>
    </header>
  )
}

const SunIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="22"
    height="22"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4 12H2M22 12h-2M5.6 5.6L4.2 4.2M19.8 19.8l-1.4-1.4M18.4 5.6l1.4-1.4M4.2 19.8l1.4-1.4" />
  </svg>
)

const MoonIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="22"
    height="22"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
)

export default Header