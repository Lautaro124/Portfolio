import { useTranslation } from 'react-i18next'
import SectionHeading from '../SectionHeading/SectionHeading'
import { containerClass, sectionClass } from '../utils'

type Job = {
  id: string
  company: string
  roleKey: string
  periodKey: string
}

const jobs: Job[] = [
  {
    id: 'konecta',
    company: 'Konecta',
    roleKey: 'experience.konecta_role',
    periodKey: 'experience.konecta_period',
  },
  {
    id: 'grelec',
    company: 'Grelec',
    roleKey: 'experience.grelec_role',
    periodKey: 'experience.grelec_period',
  },
  {
    id: 'ctl',
    company: 'CTL Information Technology',
    roleKey: 'experience.ctl_role',
    periodKey: 'experience.ctl_period',
  },
]

const Experience = () => {
  const [t] = useTranslation('global')

  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className={`${sectionClass} bg-gradient-to-b from-black to-gray-900 text-white`}
    >
      <div className={containerClass}>
        <SectionHeading id="experience" title={t('experience.title')} intro={t('experience.intro')} />
        <ol className="flex flex-col border-l-2 border-gray-700 pl-6 sm:pl-8">
          {jobs.map(job => (
            <li key={job.id} className="relative pb-10 last:pb-0">
              <span
                className="absolute -left-[1.9rem] top-2 h-3 w-3 rounded-full bg-cyan-400 sm:-left-[2.4rem]"
                aria-hidden
              />
              <p className="text-sm font-semibold uppercase tracking-wide text-cyan-300">
                {t(job.periodKey)}
              </p>
              <h3 className="pt-1 text-xl font-bold sm:text-2xl">{t(job.roleKey)}</h3>
              <p className="text-lg text-gray-300">{job.company}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default Experience
