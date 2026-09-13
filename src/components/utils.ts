export interface NavLink {
  id: string
  labelKey: string
}

export const links: NavLink[] = [
  { id: 'home', labelKey: 'nav.home' },
  { id: 'about', labelKey: 'nav.about' },
  { id: 'experience', labelKey: 'nav.experience' },
  { id: 'projects', labelKey: 'nav.projects' },
  { id: 'skills', labelKey: 'nav.skills' },
  { id: 'contact', labelKey: 'nav.contact' },
]

/* Public assets must respect the deploy sub-path (GitHub Pages: /Portfolio/). */
export const RESUME_URL = `${import.meta.env.BASE_URL}Curriculums.pdf`

export const LINKEDIN_URL = 'https://www.linkedin.com/in/lautaro-gabriel-gonzalez/'
export const GITHUB_URL = 'https://github.com/Lautaro124'
export const EMAIL = 'lautaro.gonzalez4949@gmail.com'
export const TRATO_AGENDA_URL = 'https://tratoagenda.com/'

/* Shared style tokens so every section keeps the same rhythm. */
export const sectionClass =
  'w-full scroll-mt-20 px-4 py-20 sm:py-24'
export const containerClass = 'mx-auto flex w-full max-w-screen-lg flex-col'
export const primaryButtonClass =
  'inline-flex w-fit items-center gap-1 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 font-semibold text-black transition-transform duration-200 hover:scale-105'
export const secondaryButtonClass =
  'inline-flex w-fit items-center gap-2 rounded-md border-2 border-gray-500 px-6 py-3 font-semibold text-gray-100 transition-colors duration-200 hover:border-cyan-400 hover:text-cyan-300'
