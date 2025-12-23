import { useState } from 'react'
import './App.css'
import Navigation from './components/Navigation'
import { useIntersectionObserver } from './hooks/useInteractionObserver'
import {useScrollToTop} from './hooks/useScrollToTop'
import { Hero } from './components/Hero'

function App() {
  const hasAnimated = useIntersectionObserver();
  const showScrollTop = useScrollToTop()


  return (
    <div className="min-h-screen bg-white text-black flex justify-center items-center">
      <Navigation/>
      <Hero hasANimated={hasAnimated}/>
    </div>
  );
};

export default App
