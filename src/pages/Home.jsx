import Hero from '../components/home/Hero'
import ServicesPreview from '../components/home/ServicesPreview'
import WhyChooseUs from '../components/home/WhyChooseUs'
import Process from '../components/home/Process'
import PortfolioPreview from '../components/home/PortfolioPreview'
import Statistics from '../components/home/Statistics'
import Testimonials from '../components/home/Testimonials'
import CTA from '../components/home/CTA'

const Home = () => {
  return (
    <main>
      <Hero />
      <ServicesPreview />
      <WhyChooseUs />
      <Process />
      <PortfolioPreview />
      <Statistics />
      <Testimonials />
      <CTA />
    </main>
  )
}

export default Home
