import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { links } from '../utils'

type Props = {
  open: boolean
  onNavigate: () => void
}

const MobileNavSection: FC<Props> = ({ open, onNavigate }) => {
  const [t] = useTranslation('global')

  if (!open) return null

  return (
    <nav
      id="mobile-menu"
      aria-label={t('nav.aria_label') as string}
      className="fixed inset-0 top-20 z-40 overflow-y-auto bg-gradient-to-b from-black to-gray-900 md:hidden"
    >
      <ul className="flex flex-col items-center justify-center py-8 text-gray-100">
        {links.map(link => (
          <li key={link.id} className="w-full text-center">
            <a
              href={`#${link.id}`}
              onClick={onNavigate}
              className="block px-4 py-5 text-3xl font-medium transition-colors duration-200 hover:text-cyan-300"
            >
              {t(link.labelKey)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default MobileNavSection
