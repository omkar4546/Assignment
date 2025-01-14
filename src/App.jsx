import { useTranslation } from 'react-i18next'
import './App.css'
import LanguageSelector from './components/Language-selector';

function App() {
 
  const {t}=useTranslation();

  return (
    <>
    <div className="container">
      <div className='body'>
        <LanguageSelector/>
      <h1>{t('greeting')}</h1>
      </div>
    </div>
    </>
  )
}

export default App
