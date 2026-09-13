import { FC, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { useTranslation } from 'react-i18next'
import { links } from '../utils'

type Props = {
  open: boolean
  onNavigate: () => void
  onClose: () => void
}

/*
 * The overlay is rendered through a portal on purpose: the header that owns the
 * toggle uses `backdrop-blur`, and `backdrop-filter` turns that header into the
 * containing block for `position: fixed` descendants. Nested inside it, the
 * panel was sized against the 5rem header box instead of the viewport, so it
 * collapsed out of sight. Portalling to `document.body` keeps it viewport-relative.
 */
const MobileNavSection: FC<Props> = ({ open, onNavigate, onClose }) => {
  const [t] = useTranslation('global')
  const panelRef = useRef<HTMLElement>(null)

  /* Move focus into the panel when it opens so keyboard users land on the links. */
  useEffect(() => {
    if (!open) return
    panelRef.current?.querySelector<HTMLAnchorElement>('a[href]')?.focus()
  }, [open])

  if (!open || typeof document === 'undefined') return null

  return createPortal(
    <div className="fixed inset-x-0 bottom-0 top-20 z-40 md:hidden">
      {/* Tapping the empty area of the sheet closes it, like a dialog scrim. */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-black to-gray-900"
        onClick={onClose}
        aria-hidden
      />
      <nav
        id="mobile-menu"
        ref={panelRef}
        aria-label={t('nav.aria_label') as string}
        className="relative h-full overflow-y-auto overscroll-contain"
        onClick={event => {
          if (event.target === event.currentTarget) onClose()
        }}
      >
        <ul className="flex flex-col items-center justify-center py-8 text-gray-100">
          {links.map(link => (
            <li key={link.id} className="w-full text-center">
              <a
                href={`#${link.id}`}
                onClick={onNavigate}
                className="block px-4 py-5 text-3xl font-medium transition-colors duration-200 hover:text-cyan-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
              >
                {t(link.labelKey)}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>,
    document.body
  )
}

export default MobileNavSection
