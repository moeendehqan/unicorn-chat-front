import { MessageSquareText, Search, UserPlus } from 'lucide-react'
import { Link } from 'react-router-dom'

type Friend = {
  id: number
  name: string
  username: string
  online: boolean
  avatarUrl: string
}

const friends: Friend[] = [
  {
    id: 1,
    name: 'سارا',
    username: '@sara',
    online: true,
    avatarUrl: 'https://api.dicebear.com/9.x/notionists/svg?seed=sara&radius=50',
  },
  {
    id: 2,
    name: 'مانی',
    username: '@mani',
    online: false,
    avatarUrl: 'https://api.dicebear.com/9.x/notionists/svg?seed=mani&radius=50',
  },
  {
    id: 3,
    name: 'آرین',
    username: '@aryan',
    online: true,
    avatarUrl: 'https://api.dicebear.com/9.x/notionists/svg?seed=aryan&radius=50',
  },
]

export default function FriendsPage() {
  return (
    <section aria-label="دوستان" className="space-y-4" dir="rtl">
      <header className="flex items-center gap-2">
        <h1 className="text-base font-semibold">دوستان</h1>
        <span className="text-xs opacity-70">{friends.length} نفر</span>
      </header>

      <div className="flex items-center gap-2">
        <div className="flex-1 inline-flex items-center gap-2 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-2">
          <Search className="h-4 w-4 opacity-70" aria-hidden="true" />
          <input
            placeholder="جستجوی دوستان"
            aria-label="جستجو"
            className="w-full bg-transparent text-sm outline-none"
          />
        </div>
        <button
          className="inline-flex items-center gap-2 rounded-lg border border-transparent px-3 py-2 text-sm font-medium bg-[var(--color-primary)] text-white hover:border-[var(--color-accent)] hover:shadow-[0_0_6px_rgba(127,255,255,0.35)]"
          aria-label="افزودن دوست"
        >
          <UserPlus className="h-4 w-4" aria-hidden="true" />
          افزودن
        </button>
      </div>

      <ul className="space-y-2">
        {friends.map((f) => (
          <FriendItem key={f.id} friend={f} />
        ))}
      </ul>
    </section>
  )
}

function FriendItem({ friend }: { friend: Friend }) {
  const { name, username, online, avatarUrl } = friend
  return (
    <li className="flex items-center justify-between rounded-xl bg-[var(--color-bg)] p-3 shadow-sm">
      <div className="flex items-center gap-3">
        <div className={`h-10 w-10 rounded-full ring-2 ${online ? 'ring-emerald-500' : 'ring-[var(--color-border)]'} overflow-hidden bg-[var(--color-muted)]`}>
          <img alt={name} src={avatarUrl} className="h-full w-full object-cover" />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">{name}</span>
            <span className={`inline-block h-2 w-2 rounded-full ${online ? 'bg-emerald-500' : 'bg-gray-400'}`} aria-label={online ? 'آنلاین' : 'آفلاین'} />
          </div>
          <div className="text-xs opacity-70">{username}</div>
        </div>
      </div>
      <Link
        to="/"
        className="inline-flex items-center gap-2 rounded-lg border border-transparent px-3 py-2 text-xs font-medium bg-[var(--color-primary)] text-white hover:border-[var(--color-accent)] hover:shadow-[0_0_6px_rgba(127,255,255,0.35)]"
        aria-label={`ارسال پیام به ${name}`}
      >
        <MessageSquareText className="h-4 w-4" aria-hidden="true" />
        پیام
      </Link>
    </li>
  )
}