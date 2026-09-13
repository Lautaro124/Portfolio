import { useTranslation } from 'react-i18next'
import SectionHeading from '../SectionHeading/SectionHeading'
import { containerClass, sectionClass } from '../utils'

const Contact = () => {
  const [t] = useTranslation('global')

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className={`${sectionClass} bg-gradient-to-b from-gray-900 to-black text-white`}
    >
      <div className={containerClass}>
        <SectionHeading id="contact" title={t('contact.title')} intro={t('contact.explain')} />
        <form
          className="mx-auto flex w-full max-w-xl flex-col gap-5"
          action="https://getform.io/f/41b33365-816e-4c56-9a15-5313dc716694"
          method="post"
        >
          <div>
            <label htmlFor="name" className="mb-2 block font-medium">
              {t('contact.name')}
            </label>
            <input
              id="name"
              type="text"
              name="name"
              autoComplete="name"
              required
              placeholder={t('contact.name_placeholder') as string}
              className="w-full rounded-md border-2 border-gray-600 bg-black/30 p-3 text-white placeholder:text-gray-400 focus:border-cyan-400 focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-2 block font-medium">
              {t('contact.email')}
            </label>
            <input
              id="email"
              type="email"
              name="email"
              autoComplete="email"
              required
              placeholder={t('contact.email_placeholder') as string}
              className="w-full rounded-md border-2 border-gray-600 bg-black/30 p-3 text-white placeholder:text-gray-400 focus:border-cyan-400 focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="message" className="mb-2 block font-medium">
              {t('contact.message')}
            </label>
            <textarea
              id="message"
              name="message"
              rows={7}
              required
              placeholder={t('contact.message_placeholder') as string}
              className="w-full rounded-md border-2 border-gray-600 bg-black/30 p-3 text-white placeholder:text-gray-400 focus:border-cyan-400 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-fit rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 font-semibold text-black transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-black"
          >
            {t('contact.submit')}
          </button>
        </form>
        <p className="pt-8 text-center text-gray-300">
          {t('contact.direct')}{' '}
          <a className="font-semibold text-cyan-300 underline hover:text-cyan-200" href="mailto:lautaro.gonzalez4949@gmail.com">
            lautaro.gonzalez4949@gmail.com
          </a>
        </p>
      </div>
    </section>
  )
}

export default Contact