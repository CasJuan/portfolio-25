import './App.css'
import Navigation from './components/Navigation'
import { useIntersectionObserver } from './hooks/useInteractionObserver'
import {useScrollToTop} from './hooks/useScrollToTop'
import { Hero } from './components/Hero'
import { About } from './components/About'

function App() {
  const hasAnimated = useIntersectionObserver();
  const showScrollTop = useScrollToTop()


  return (
    <div className="min-h-screen bg-white text-black flex flex-col justify-center items-center">
      <Navigation/>
      <Hero hasAnimated={hasAnimated}/>
      <About hasAnimated={hasAnimated}/>
    </div>
  );
};

export default App
