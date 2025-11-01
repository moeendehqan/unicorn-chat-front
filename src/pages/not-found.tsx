import { AlertCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <section aria-label="یافت نشد" className="space-y-4" dir="rtl">
      <div className="flex items-center gap-2">
        <AlertCircle className="h-5 w-5 text-[var(--color-accent)]" aria-hidden="true" />
        <h1 className="text-base font-semibold">صفحه مورد نظر پیدا نشد</h1>
      </div>
      <p className="text-sm opacity-80">مسیر وارد شده صحیح نیست یا هنوز ساخته نشده است.</p>
      <div className="flex gap-2">
        <Link
          to="/"
          className="w-full inline-flex items-center justify-center gap-2 rounded-lg border border-transparent px-4 py-2 text-sm font-medium bg-[var(--color-primary)] text-white hover:border-[var(--color-accent)] hover:shadow-[0_0_6px_rgba(127,255,255,0.35)]"
        >
          بازگشت به خانه
        </Link>
      </div>
    </section>
  )
}