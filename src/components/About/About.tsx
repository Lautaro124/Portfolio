import { useTranslation } from 'react-i18next'
import SectionHeading from '../SectionHeading/SectionHeading'
import { containerClass, sectionClass } from '../utils'

const About = () => {
  const [t] = useTranslation('global')

  const highlights = [
    { titleKey: 'about.focus_title', valueKey: 'about.focus_value' },
    { titleKey: 'about.backend_title', valueKey: 'about.backend_value' },
    { titleKey: 'about.languages_title', valueKey: 'about.languages_value' },
  ]

  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className={`${sectionClass} bg-gradient-to-b from-gray-900 to-black text-white`}
    >
      <div className={containerClass}>
        <SectionHeading id="about" title={t('about.title')} />
        <div className="flex flex-col gap-4 text-lg text-gray-200">
          <p>{t('about.first_part')}</p>
          <p>{t('about.second_part')}</p>
          <p>{t('about.third_part')}</p>
        </div>
        <dl className="mt-10 grid gap-6 sm:grid-cols-3">
          {highlights.map(item => (
            <div
              key={item.titleKey}
              className="rounded-lg border border-gray-700 bg-white/5 p-5"
            >
              <dt className="text-sm font-semibold uppercase tracking-wide text-cyan-300">
                {t(item.titleKey)}
              </dt>
              <dd className="pt-2 text-gray-200">{t(item.valueKey)}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

export default About
