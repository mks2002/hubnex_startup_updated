import Hero from '../components/startup/Hero'
import Partner from '../components/startup/Partner'
import Testimonial from '../components/startup/Testimonial'
import Team from '../components/startup/Team'
import Contact from '../components/startup/Contact'
import Field from '../components/startup/Field'
import SwiperCards from '../components/startup/SwiperCards'

const Startup = () => {

  const isMobile = () => {
    const match = window.matchMedia("(max-width:1227px)");
    return (match && match.matches);
  }

  return (
    <div className=' overflow-hidden'>
      <Hero />
      <Partner />
      <Testimonial />
      <Team />
      {isMobile() ? <SwiperCards /> : <Field />}

      <Contact />

    </div>
  )
}

export default Startup