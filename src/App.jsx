import Footer from './components/Footer/Footer'
import AboutMeSection from './components/Section/AboutMeSection/AboutMeSection'
import BenefitsSection from './components/Section/BenefitsSection/BenefitsSection'
import FAQSection from './components/Section/FAQSection/FAQSection'
import MediaSection from './components/Section/MediaSection/MediaSection'
import RetentionSection from './components/Section/RetentionSection/RetentionSection'
import SpecialtySection from './components/Section/SpecialtySection/SpecialtySection'
import Whatsapp from './components/Section/Whatsapp/Whatsapp'


import './css/global.css'

function App() {
  return (
    <>
    <SpecialtySection/>
    <BenefitsSection/>
    <AboutMeSection/>
    <RetentionSection/>
    <FAQSection/>
    <MediaSection/>
    <Footer/>
    <Whatsapp/>
    </>
  )
}

export default App
