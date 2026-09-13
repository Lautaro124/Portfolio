import {
  FaWhatsapp,
  FaGoogle,
  FaRegBell,
  FaQrcode,
  FaExternalLinkAlt,
  FaLinkedin,
  FaArrowRight,
} from 'react-icons/fa'
import { useTranslation } from 'react-i18next'
import GrupalProject from '../../assets/images/ProyectoGrupal.webp'
import PiDogs from '../../assets/images/PiDogs.webp'
import LoginApp from '../../assets/images/LoginApp.webp'
import Twitch from '../../assets/images/twitch.webp'
import SectionHeading from '../SectionHeading/SectionHeading'
import { TRATO_AGENDA_URL, containerClass, primaryButtonClass, sectionClass } from '../utils'

/*
 * `kind` is derived from the link each project already points at, so the badge
 * and the call to action stay grounded in existing data: `live` for the
 * deployed apps, `linkedin` for the demos published as LinkedIn posts.
 */
type Project = {
  id: string
  source: string
  href: string
  kind: 'live' | 'linkedin'
  nameKey: string
  descriptionKey: string
  altKey: string
}

const projects: Project[] = [
  {
    id: 'recipe',
    source: GrupalProject,
    href: 'https://recipecalendar.vercel.app/',
    kind: 'live',
    nameKey: 'projects.recipe.name',
    descriptionKey: 'projects.recipe.description',
    altKey: 'projects.recipe.image_alt',
  },
  {
    id: 'pidogs',
    source: PiDogs,
    href: 'https://www.linkedin.com/posts/lautaro-gabriel-gonzalez_video-react-express-activity-6836343147270856704-rrEz?utm_source=share&utm_medium=member_desktop',
    kind: 'linkedin',
    nameKey: 'projects.pidogs.name',
    descriptionKey: 'projects.pidogs.description',
    altKey: 'projects.pidogs.image_alt',
  },
  {
    id: 'login',
    source: LoginApp,
    href: 'https://www.linkedin.com/posts/lautaro-gabriel-gonzalez_react-javascript-github-activity-7010739738189967360-K9pR?utm_source=share&utm_medium=member_desktop',
    kind: 'linkedin',
    nameKey: 'projects.login.name',
    descriptionKey: 'projects.login.description',
    altKey: 'projects.login.image_alt',
  },
  {
    id: 'twitch',
    source: Twitch,
    href: 'https://twitch-ten.vercel.app/',
    kind: 'live',
    nameKey: 'projects.twitch.name',
    descriptionKey: 'projects.twitch.description',
    altKey: 'projects.twitch.image_alt',
  },
]

const Portfolio = () => {
  const [t] = useTranslation('global')

  const featureIcons = [
    { id: 'whatsapp', icon: <FaWhatsapp size={20} aria-hidden /> },
    { id: 'calendar', icon: <FaGoogle size={18} aria-hidden /> },
    { id: 'reminder', icon: <FaRegBell size={18} aria-hidden /> },
    { id: 'qr', icon: <FaQrcode size={18} aria-hidden /> },
  ]

  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className={`${sectionClass} bg-gradient-to-b from-black to-gray-900 text-white`}
    >
      <div className={containerClass}>
        <SectionHeading id="projects" title={t('projects.title')} intro={t('projects.intro')} />

        <article className="mb-12 rounded-xl border border-cyan-500/50 bg-gradient-to-br from-gray-900 to-black p-6 shadow-lg shadow-cyan-500/10 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-cyan-300">
            {t('projects.featured_label')}
          </p>
          <h3 className="pt-2 text-2xl font-bold sm:text-3xl">{t('projects.trato.name')}</h3>
          <p className="pt-1 text-lg text-gray-200">{t('projects.trato.tagline')}</p>

          <div className="flex flex-wrap gap-3 pt-5" aria-hidden>
            {featureIcons.map(feature => (
              <span
                key={feature.id}
                className="flex h-10 w-10 items-center justify-center rounded-md border border-gray-600 bg-black/40 text-cyan-300"
              >
                {feature.icon}
              </span>
            ))}
          </div>

          <p className="pt-5 text-gray-300">{t('projects.trato.description')}</p>
          <p className="pt-3 text-gray-300">{t('projects.trato.setup')}</p>
          <p className="pt-3 text-gray-300">{t('projects.trato.pricing')}</p>

          <a
            href={TRATO_AGENDA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`${primaryButtonClass} mt-6`}
          >
            {t('projects.visit')}
            <FaExternalLinkAlt size={14} aria-hidden />
            <span className="sr-only"> {t('projects.new_tab')}</span>
          </a>
        </article>

        <div className="flex flex-col gap-2 pb-6">
          <h3 className="text-xl font-bold sm:text-2xl">{t('projects.more_label')}</h3>
          <p className="text-gray-300">{t('projects.more_intro')}</p>
        </div>

        <ul className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {projects.map(project => {
            const isLive = project.kind === 'live'

            return (
              <li
                key={project.id}
                className="group relative flex flex-col overflow-hidden rounded-xl border border-gray-700 bg-gradient-to-br from-gray-900 to-black shadow-lg shadow-black/40 transition duration-200 hover:-translate-y-1 hover:border-cyan-500/60 hover:shadow-cyan-500/10 focus-within:-translate-y-1 focus-within:border-cyan-400 focus-within:ring-2 focus-within:ring-cyan-400 focus-within:ring-offset-2 focus-within:ring-offset-black motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              >
                <div className="relative overflow-hidden border-b border-gray-800">
                  <img
                    src={project.source}
                    alt={t(project.altKey) as string}
                    width={1100}
                    height={746}
                    loading="lazy"
                    decoding="async"
                    className="aspect-[3/2] w-full object-cover object-top transition-transform duration-300 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"
                    aria-hidden
                  />
                  <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-cyan-500/40 bg-black/70 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-cyan-300 backdrop-blur-sm">
                    {isLive ? (
                      <FaExternalLinkAlt size={10} aria-hidden />
                    ) : (
                      <FaLinkedin size={12} aria-hidden />
                    )}
                    {t(isLive ? 'projects.tag_live' : 'projects.tag_linkedin')}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <h4 className="text-lg font-bold">{t(project.nameKey)}</h4>
                  <p className="flex-1 pt-2 text-sm leading-relaxed text-gray-300">
                    {t(project.descriptionKey)}
                  </p>
                  {/* Stretched link: one accessible link that makes the whole card clickable. */}
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex w-fit items-center gap-2 font-semibold text-cyan-300 transition-colors duration-200 after:absolute after:inset-0 after:rounded-xl group-hover:text-cyan-200 hover:underline focus-visible:underline focus-visible:outline-none"
                  >
                    {t(isLive ? 'projects.cta_live' : 'projects.cta_linkedin')}
                    <FaArrowRight
                      size={12}
                      aria-hidden
                      className="transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
                    />
                    <span className="sr-only">
                      : {t(project.nameKey)} {t('projects.new_tab')}
                    </span>
                  </a>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export default Portfolio
