import { useEffect, useState } from 'react'
import { Sun, Bell, Globe, Trash2 } from 'lucide-react'

export default function SettingsPage() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [notifications, setNotifications] = useState<boolean>(true)
  const [lang, setLang] = useState<'fa' | 'en'>('fa')

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    const initialTheme = savedTheme === 'dark' ? 'dark' : 'light'
    setTheme(initialTheme)
    document.documentElement.setAttribute('data-theme', initialTheme)

    const savedNotifs = localStorage.getItem('notifications')
    setNotifications(savedNotifs !== 'off')

    const savedLang = (localStorage.getItem('lang') as 'fa' | 'en' | null) || 'fa'
    setLang(savedLang === 'en' ? 'en' : 'fa')
  }, [])

  const applyTheme = (next: 'light' | 'dark') => {
    setTheme(next)
    document.documentElement.setAttribute('data-theme', next)
    localStorage.setItem('theme', next)
  }

  const toggleNotifications = () => {
    const next = !notifications
    setNotifications(next)
    localStorage.setItem('notifications', next ? 'on' : 'off')
  }

  const changeLang = (next: 'fa' | 'en') => {
    setLang(next)
    localStorage.setItem('lang', next)
  }

  const clearCache = () => {
    localStorage.removeItem('lang')
    localStorage.removeItem('notifications')
  }

  return (
    <section aria-label="تنظیمات" className="space-y-4" dir="rtl">
      <h1 className="text-base font-semibold">تنظیمات</h1>
      <p className="text-xs opacity-70">مدیریت ترجیحات نمایش و رفتار برنامه</p>

      <Card>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sun className="h-4 w-4" aria-hidden="true" />
            <span className="text-sm">حالت نمایش</span>
          </div>
          <div className="inline-flex items-center gap-2">
            <button
              onClick={() => applyTheme('light')}
              aria-pressed={theme === 'light'}
              className={
                `rounded-lg px-3 py-1 text-xs ` +
                (theme === 'light'
                  ? 'bg-[var(--color-primary)] text-white'
                  : 'bg-[var(--color-muted)]/60 text-[var(--color-text)] hover:bg-[var(--color-muted)]')
              }
            >
              روشن
            </button>
            <button
              onClick={() => applyTheme('dark')}
              aria-pressed={theme === 'dark'}
              className={
                `rounded-lg px-3 py-1 text-xs ` +
                (theme === 'dark'
                  ? 'bg-[var(--color-primary)] text-white'
                  : 'bg-[var(--color-muted)]/60 text-[var(--color-text)] hover:bg-[var(--color-muted)]')
              }
            >
              تاریک
            </button>
          </div>
        </div>
      </Card>

      <Card>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Bell className="h-4 w-4" aria-hidden="true" />
            <span className="text-sm">اعلان‌ها</span>
          </div>
          <button
            onClick={toggleNotifications}
            aria-pressed={notifications}
            className={
              `inline-flex items-center gap-2 rounded-lg px-3 py-1 text-xs ` +
              (notifications
                ? 'bg-emerald-500 text-white'
                : 'bg-[var(--color-muted)]/60 text-[var(--color-text)] hover:bg-[var(--color-muted)]')
            }
          >
            {notifications ? 'فعال' : 'غیرفعال'}
          </button>
        </div>
      </Card>

      <Card>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Globe className="h-4 w-4" aria-hidden="true" />
            <span className="text-sm">زبان</span>
          </div>
          <div className="inline-flex items-center gap-2">
            <button
              onClick={() => changeLang('fa')}
              aria-pressed={lang === 'fa'}
              className={
                `rounded-lg px-3 py-1 text-xs ` +
                (lang === 'fa'
                  ? 'bg-[var(--color-primary)] text-white'
                  : 'bg-[var(--color-muted)]/60 text-[var(--color-text)] hover:bg-[var(--color-muted)]')
              }
            >
              فارسی
            </button>
            <button
              onClick={() => changeLang('en')}
              aria-pressed={lang === 'en'}
              className={
                `rounded-lg px-3 py-1 text-xs ` +
                (lang === 'en'
                  ? 'bg-[var(--color-primary)] text-white'
                  : 'bg-[var(--color-muted)]/60 text-[var(--color-text)] hover:bg-[var(--color-muted)]')
              }
            >
              English
            </button>
          </div>
        </div>
      </Card>

      <div className="flex gap-2">
        <button
          onClick={clearCache}
          className="w-full inline-flex items-center justify-center gap-2 rounded-lg border border-transparent px-4 py-2 text-sm font-medium bg-[var(--color-bg)] hover:border-[var(--color-border)]"
        >
          <Trash2 className="h-4 w-4" aria-hidden="true" />
          پاکسازی کش تنظیمات
        </button>
      </div>
    </section>
  )
}

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-xl bg-[var(--color-bg)] p-3 shadow-sm">
      {children}
    </div>
  )
}