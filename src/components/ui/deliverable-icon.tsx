export type DeliverableIconName =
  | 'analysis'
  | 'ai'
  | 'beforeAfter'
  | 'branding'
  | 'data'
  | 'google'
  | 'interface'
  | 'logo'
  | 'logic'
  | 'risk'
  | 'website'

type DeliverableIconProps = {
  name: DeliverableIconName
}

export function DeliverableIcon({ name }: DeliverableIconProps) {
  return (
    <svg
      aria-hidden="true"
      className="size-5 shrink-0 text-accent-strong"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    >
      {renderIcon(name)}
    </svg>
  )
}

function renderIcon(name: DeliverableIconName) {
  switch (name) {
    case 'analysis':
      return <path d="M4 19V5m0 14h16M8 15l3-4 3 2 5-7" />
    case 'ai':
      return (
        <path d="m12 3 1.3 4.7L18 9l-4.7 1.3L12 15l-1.3-4.7L6 9l4.7-1.3L12 3Zm6 11 .6 2.4L21 17l-2.4.6L18 20l-.6-2.4L15 17l2.4-.6L18 14Z" />
      )
    case 'beforeAfter':
      return <path d="M4 5h16v14H4zM12 5v14M8 9h1m6 6h1" />
    case 'branding':
      return <path d="M5 7h14M5 12h9M5 17h6M4 4h16v16H4z" />
    case 'data':
      return (
        <path d="M5 6c0-1.1 3.1-2 7-2s7 .9 7 2-3.1 2-7 2-7-.9-7-2Zm0 0v6c0 1.1 3.1 2 7 2s7-.9 7-2V6m-14 6v6c0 1.1 3.1 2 7 2s7-.9 7-2v-6" />
      )
    case 'google':
      return (
        <path d="M12 21s6-5.1 6-10a6 6 0 1 0-12 0c0 4.9 6 10 6 10Zm0-7a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
      )
    case 'interface':
      return <path d="M4 5h16v11H4zM8 20h8M12 16v4M8 9h8M8 12h4" />
    case 'logo':
      return (
        <path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Zm6 12 .6 1.4L20 17l-1.4.6L18 19l-.6-1.4L16 17l1.4-.6L18 15Z" />
      )
    case 'logic':
      return <path d="M6 6h4v4H6zM14 14h4v4h-4zM10 8h4v8h-4zM8 10v4m8-4v4" />
    case 'risk':
      return <path d="m12 3 7 3v5c0 4.3-2.9 8-7 10-4.1-2-7-5.7-7-10V6l7-3Zm-3 8 2 2 4-4" />
    case 'website':
      return <path d="M4 5h16v14H4zM4 9h16M8 7h.01M11 7h.01M14 7h.01" />
  }
}
