import { RiArrowRightSLine } from 'react-icons/ri'
import { HiOutlineDocumentDownload } from 'react-icons/hi'
import { useTranslation } from 'react-i18next'
import ProfileImage from '../../assets/images/me.webp'
import { RESUME_URL, primaryButtonClass, secondaryButtonClass } from '../utils'

const Home = () => {
  const [t] = useTranslation('global')

  return (
    <section
      id="home"
      aria-labelledby="home-title"
      className="w-full bg-gradient-to-b from-black via-black to-gray-900 px-4 pt-28 pb-20 sm:pt-32"
    >
      <div className="mx-auto flex max-w-screen-lg flex-col-reverse items-center gap-10 md:flex-row md:gap-12">
        <div className="flex w-full flex-col md:w-3/5">
          <p className="text-lg font-medium text-cyan-300">{t('home.eyebrow')}</p>
          <h1 id="home-title" className="text-4xl font-bold text-white sm:text-6xl">
            {t('home.name')}
          </h1>
          <p className="pt-2 text-2xl font-semibold text-gray-200 sm:text-3xl">
            {t('home.role')}
          </p>
          <p className="max-w-xl py-6 text-lg text-gray-300">{t('home.summary')}</p>

          <div className="flex flex-wrap gap-4">
            <a href="#projects" className={primaryButtonClass}>
              {t('home.cta_projects')}
              <RiArrowRightSLine size={24} aria-hidden />
            </a>
            <a href="#contact" className={secondaryButtonClass}>
              {t('home.cta_contact')}
            </a>
            <a href={RESUME_URL} download className={secondaryButtonClass}>
              {t('home.cta_resume')}
              <HiOutlineDocumentDownload size={22} aria-hidden />
            </a>
          </div>
        </div>

        <div className="w-2/3 sm:w-1/2 md:w-2/5">
          <img
            src={ProfileImage}
            alt={t('home.photo_alt') as string}
            width={760}
            height={795}
            decoding="async"
            className="mx-auto w-full rounded-2xl border border-gray-800 shadow-lg shadow-black/50"
          />
        </div>
      </div>
    </section>
  )
}

export default Home
