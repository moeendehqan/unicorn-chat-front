import React from 'react'
import { NavLink } from 'react-router-dom'
import { User, Users, MessageSquareText, Trophy, Settings } from 'lucide-react'

type IconType = React.ComponentType<React.SVGProps<SVGSVGElement>>
type NavItem = {
  key: string
  label: string
  to: string
  Icon: IconType
}


const items: NavItem[] = [
  { key: 'profile', label: 'پروفایل', to: '/profile', Icon: User },
  { key: 'friends', label: 'دوستان', to: '/friends', Icon: Users },
  { key: 'chat', label: 'چت', to: '/', Icon: MessageSquareText },
  { key: 'achievements', label: 'دستاوردها', to: '/achievements', Icon: Trophy },
  { key: 'settings', label: 'تنظیمات', to: '/settings', Icon: Settings },
]

export default function Navigation() {
  return (
    <nav
      role="navigation"
      aria-label="ناوبری پایین صفحه"
      className="fixed bottom-0 left-1/2 -translate-x-1/2 z-50 w-full max-w-[420px] bg-[var(--color-bg)]/80 backdrop-blur border-t border-[var(--color-border)]"
    >
      <div className="px-2 pb-[env(safe-area-inset-bottom)]" dir="rtl">
        <div className="grid grid-cols-5 gap-1 py-2">
        {items.map(({ key, label, to, Icon }) => (
          <NavLink
            key={key}
            to={to}
            aria-label={label}
            className={({ isActive }) =>
              `group flex flex-col items-center justify-center gap-1 rounded-md px-2 py-2 w-full ` +
              `text-[var(--color-text)] hover:bg-[var(--color-muted)]/60 transition-colors ` +
              (isActive ? 'bg-[var(--color-muted)]/70 font-semibold' : 'font-normal')
            }
          >
            <Icon
              className="h-6 w-6 text-[var(--color-text)]"
              aria-hidden="true"
              strokeWidth={1.6}
            />
            <span className="text-xs leading-4 truncate text-center">
              {label}
            </span>
          </NavLink>
        ))}
        </div>
      </div>
    </nav>
  )
}