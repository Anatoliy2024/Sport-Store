export function ArrowRight({
  onTouchStart,
  onClick,
  className,
}: {
  onTouchStart: () => void
  onClick: () => void
  className: string
}) {
  return (
    <div onTouchStart={onTouchStart} onClick={onClick} className={className}>
      <svg
        width="16"
        height="31"
        viewBox="0 0 16 31"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 29.8944L14.7142 15.4103L1 0.926147"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  )
}
