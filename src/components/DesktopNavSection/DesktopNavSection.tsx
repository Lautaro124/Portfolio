import { useTranslation } from 'react-i18next'
import { links } from '../utils'

const DesktopNavSection = () => {
  const [t] = useTranslation('global')

  return (
    <nav aria-label={t('nav.aria_label') as string} className="hidden md:block">
      <ul className="flex items-center">
        {links.map(link => (
          <li key={link.id}>
            <a
              href={`#${link.id}`}
              className="block px-4 py-2 font-medium text-gray-200 transition-colors duration-200 hover:text-cyan-300"
            >
              {t(link.labelKey)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default DesktopNavSection
