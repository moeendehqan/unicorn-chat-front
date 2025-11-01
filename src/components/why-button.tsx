type WhyButtonProps = {
  href?: string
}

export default function WhyButton({ href = '/why' }: WhyButtonProps) {
  return (
    <a
      href={href}
      aria-label="چرا یونیکورن؟"
      className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm sm:text-base
                 bg-[var(--color-primary)] text-white hover:bg-[color-mix(in oklab,var(--color-primary),black_10%)]
                 shadow-sm transition-colors"
    >
      <span>چرا</span>
    </a>
  )
}