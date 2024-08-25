import Footer from './components/Footer/Footer'
import BenefitsSection from './components/Section/BenefitsSection/BenefitsSection'
import FAQSection from './components/Section/FAQSection/FAQSection'
import MediaSection from './components/Section/MediaSection/MediaSection'
import RetentionSection from './components/Section/RetentionSection/RetentionSection'
import SpecialtySection from './components/Section/SpecialtySection/SpecialtySection'


import './css/global.css'

function App() {
  return (
    <>
    <SpecialtySection/>
    <BenefitsSection/>
    <RetentionSection/>
    <FAQSection/>
    <MediaSection/>
    <Footer/>
    </>
  )
}

export default App
