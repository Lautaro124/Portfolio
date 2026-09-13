import { useTranslation } from 'react-i18next'
import SectionHeading from '../SectionHeading/SectionHeading'
import { containerClass, sectionClass } from '../utils'

type SkillGroup = {
  id: string
  titleKey: string
  items: string[]
}

const groups: SkillGroup[] = [
  {
    id: 'frontend',
    titleKey: 'skills.frontend',
    items: [
      'React',
      'Next.js (App Router)',
      'TypeScript',
      'JavaScript',
      'React Native',
      'Tailwind CSS',
      'HTML',
      'CSS',
    ],
  },
  {
    id: 'backend',
    titleKey: 'skills.backend',
    items: ['NestJS', 'Node.js'],
  },
  {
    id: 'data',
    titleKey: 'skills.data',
    items: ['PostgreSQL', 'MongoDB', 'Redis', 'RabbitMQ'],
  },
  {
    id: 'quality',
    titleKey: 'skills.quality',
    items: ['Sentry', 'SonarQube', 'Git', 'GitHub'],
  },
]

const Skills = () => {
  const [t] = useTranslation('global')

  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className={`${sectionClass} bg-gradient-to-b from-gray-900 to-black text-white`}
    >
      <div className={containerClass}>
        <SectionHeading id="skills" title={t('skills.title')} intro={t('skills.intro')} />
        <div className="grid gap-6 sm:grid-cols-2">
          {groups.map(group => (
            <div key={group.id} className="rounded-lg border border-gray-700 bg-white/5 p-6">
              <h3 className="text-lg font-bold text-cyan-300">{t(group.titleKey)}</h3>
              <ul className="flex flex-wrap gap-2 pt-4">
                {group.items.map(item => (
                  <li
                    key={item}
                    className="rounded-md border border-gray-600 bg-black/40 px-3 py-1.5 text-sm font-medium text-gray-100"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
