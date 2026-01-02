import './App.css'
import Navigation from './components/Navigation'
import { useIntersectionObserver } from './hooks/useInteractionObserver'
import {useScrollToTop} from './hooks/useScrollToTop'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import {Contact} from './components/Contact'
import { Footer } from './components/Footer'
import { ScrollToTop } from './components/ScrollToTop'

function App() {
  const hasAnimated = useIntersectionObserver();
  const showScrollTop = useScrollToTop()


  return (
    <div className="min-h-screen bg-white text-black flex flex-col justify-center items-center">
      <Navigation/>
      <Hero hasAnimated={hasAnimated}/>
      <About hasAnimated={hasAnimated}/>
      <Projects hasAnimated={hasAnimated}/>
      <Skills hasAnimated={hasAnimated}/>
      <Contact hasAnimated={hasAnimated}/>
      <Footer/>
      <ScrollToTop showScrollTop={showScrollTop}/>
    </div>
  );
};

export default App
