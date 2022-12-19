import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import i18next from 'i18next'
import { I18nextProvider } from 'react-i18next'
import global_en from './translate/en/global.json'
import global_es from './translate/es/global.json'

i18next.init({
  interpolation: {
    escapeValue: false
  },
  lng: 'es',
  resources: {
    en: {
      global: global_en
    },
    es: {
      global: global_es
    },
  }
})


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
)
