// import ContactMe from './components/ContactMeSection'
// import HomeSection from './components/HomeSection'
// import Navigation from './components/Navigation'
// import PortofolioSection from './components/PortofolioSection'
// import SkillsSection from './components/SkillsSection'

import dynamic from 'next/dynamic'
import { Container } from 'react-bootstrap'


const ContactMe = dynamic(() => import('../components/ContactMeSection'), {
  loading: () => <p>Test</p>
})
const HomeSection = dynamic(() => import('../components/HomeSection'), {
  loading: () => <p>Test</p>
})
const Navigation = dynamic(() => import('../components/Navigation'), {
  loading: () => <p>Test</p>
})
const PortofolioSection = dynamic(() => import('../components/PortofolioSection'), {
  loading: () => <p>Test</p>
})
const SkillsSection = dynamic(() => import('../components/SkillsSection'), {
  loading: () => <p>Test</p>
})
export default function Home() {
  return (
    <>
      <Container className="px-4">
        <Navigation />
        <HomeSection />
        <SkillsSection />
        <PortofolioSection />
        <ContactMe />
      </Container>
    </>
  )
}
