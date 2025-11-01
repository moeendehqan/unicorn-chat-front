import { Camera, Edit, BadgeCheck, Users, MessageSquareText } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function ProfilePage() {
  const name = 'یونیکورن'
  const username = '@unicorn'
  const bio = 'به دنیای چت یونیکورن خوش آمدید! 🤍🦄'

  return (
    <section aria-label="پروفایل" className="space-y-4">
      <div className="relative h-28 w-full rounded-xl bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)]">
        <button
          className="absolute bottom-2 left-2 inline-flex items-center gap-2 rounded-lg bg-white/80 px-3 py-1 text-xs text-[var(--color-text)] shadow-sm hover:bg-white"
          aria-label="تغییر کاور"
        >
          <Camera className="h-4 w-4" />
          <span>تغییر کاور</span>
        </button>
      </div>

      <div className="flex items-center gap-3">
        <div className="relative h-16 w-16 rounded-full bg-[var(--color-bg)] shadow-sm ring-2 ring-[var(--color-primary)]">
          <img
            alt="Avatar"
            className="h-full w-full rounded-full object-cover"
            src="https://api.dicebear.com/9.x/notionists/svg?seed=unicorn&radius=50"
          />
          <button
            className="absolute -bottom-1 -right-1 rounded-full bg-white p-1 shadow hover:bg-white/90"
            aria-label="ویرایش آواتار"
          >
            <Edit className="h-4 w-4" />
          </button>
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-1">
            <h2 className="text-base font-semibold">{name}</h2>
            <BadgeCheck className="h-4 w-4 text-[var(--color-accent)]" aria-hidden="true" />
          </div>
          <div className="text-sm opacity-80">{username}</div>
        </div>
      </div>

      <p className="text-sm leading-6 opacity-90">{bio}</p>

      <div className="grid grid-cols-3 gap-2">
        <Stat label="دوستان" value="128" Icon={Users} />
        <Stat label="گفتگوها" value="76" Icon={MessageSquareText} />
        <Stat label="امتیاز" value="2,450" Icon={BadgeCheck} />
      </div>

      <div className="flex gap-2">
        <Link
          to="/settings"
          className="w-full inline-flex items-center justify-center gap-2 rounded-lg border border-transparent px-4 py-2 text-sm font-medium bg-[var(--color-primary)] text-white hover:border-[var(--color-accent)] hover:shadow-[0_0_6px_rgba(127,255,255,0.35)]"
        >
          <Edit className="h-4 w-4" />
          ویرایش پروفایل
        </Link>
      </div>
    </section>
  )
}

type StatProps = {
  label: string
  value: string
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

function Stat({ label, value, Icon }: StatProps) {
  return (
    <div className="rounded-xl bg-[var(--color-bg)] shadow-sm p-3 text-center">
      <div className="flex items-center justify-center gap-1">
        <Icon className="h-4 w-4" aria-hidden="true" />
        <span className="text-xs opacity-70">{label}</span>
      </div>
      <div className="text-sm font-semibold mt-1">{value}</div>
    </div>
  )
}