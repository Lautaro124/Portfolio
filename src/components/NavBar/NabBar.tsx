import { useEffect, useRef, useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'
import DesktopNavSection from '../DesktopNavSection/DesktopNavSection'
import MobileNavSection from '../MobileNavSection/MobileNavSection'
import Logo from '../../assets/Logo.png'

type Language = 'es' | 'en'

const NabBar = () => {
  const [navOpen, setNavOpen] = useState<boolean>(false)
  const [t, i18n] = useTranslation('global')
  const toggleRef = useRef<HTMLButtonElement>(null)

  const currentLanguage: Language = i18n.language === 'en' ? 'en' : 'es'
  const changeLanguage = (lang: Language) => i18n.changeLanguage(lang)

  const closeNav = () => {
    setNavOpen(false)
    toggleRef.current?.focus()
  }

  /*
   * Escape closes the mobile menu and the page stays locked while it is open.
   * Growing past the `md` breakpoint also closes it: the panel is `md:hidden`,
   * so leaving it open on desktop would keep the scroll lock with no way out.
   */
  useEffect(() => {
    if (!navOpen) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeNav()
    }

    const desktop = window.matchMedia('(min-width: 768px)')
    const onBreakpointChange = () => {
      if (desktop.matches) setNavOpen(false)
    }

    document.addEventListener('keydown', onKeyDown)
    desktop.addEventListener('change', onBreakpointChange)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      desktop.removeEventListener('change', onBreakpointChange)
      document.body.style.overflow = ''
    }
  }, [navOpen])

  const languageButtonClass = (lang: Language) =>
    [
      'h-10 px-3 text-sm font-semibold border-2 border-gray-500 transition-colors duration-200',
      lang === currentLanguage
        ? 'bg-cyan-400 text-black border-cyan-400'
        : 'text-gray-200 hover:border-cyan-400 hover:text-cyan-300',
    ].join(' ')

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-gray-800 bg-black/95 text-white backdrop-blur">
      <div className="mx-auto flex h-20 max-w-screen-lg items-center justify-between gap-4 px-4">
        <a href="#home" className="flex items-center gap-3 font-semibold">
          <img className="w-12" src={Logo} alt="" width={56} height={56} />
          <span className="sr-only">Lautaro González</span>
        </a>

        <DesktopNavSection />

        <div className="flex items-center gap-2">
          <div
            className="flex overflow-hidden rounded-md"
            role="group"
            aria-label={t('nav.language') as string}
          >
            <button
              type="button"
              className={`${languageButtonClass('es')} rounded-l-md`}
              aria-label={t('nav.spanish') as string}
              aria-pressed={currentLanguage === 'es'}
              onClick={() => changeLanguage('es')}
            >
              ES
            </button>
            <button
              type="button"
              className={`${languageButtonClass('en')} rounded-r-md`}
              aria-label={t('nav.english') as string}
              aria-pressed={currentLanguage === 'en'}
              onClick={() => changeLanguage('en')}
            >
              EN
            </button>
          </div>

          <button
            type="button"
            ref={toggleRef}
            onClick={() => setNavOpen(open => !open)}
            className="relative z-10 p-2 text-gray-200 md:hidden"
            aria-label={(navOpen ? t('nav.close_menu') : t('nav.open_menu')) as string}
            aria-expanded={navOpen}
            aria-controls="mobile-menu"
          >
            {navOpen ? <FaTimes size={28} aria-hidden /> : <FaBars size={28} aria-hidden />}
          </button>
        </div>
      </div>

      <MobileNavSection open={navOpen} onNavigate={closeNav} onClose={closeNav} />
    </header>
  )
}

export default NabBar
