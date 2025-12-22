import { useState } from 'react'
import './App.css'
import Navigation from './components/Navigation'
import { useIntersectionObserver } from './hooks/useInteractionObserver'
import {useScrollToTop} from './hooks/useScrollToTop'

function App() {
  const hasAnimated = useIntersectionObserver();
  const showScrollTop = useScrollToTop()


  return (
    <div className="min-h-screen bg-white text-black">
      <Navigation/>
    </div>
  );
};

export default App
