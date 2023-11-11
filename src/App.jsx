import React, { useState } from 'react'


import Icon from 'react-icons-kit';
import { arrowLeft } from 'react-icons-kit/feather/arrowLeft';
import { arrowRight } from 'react-icons-kit/feather/arrowRight';
import "./App.css"
import Slide from './component/Slide/Slide';

function App() {
  const [step, setStep] = useState(1);

  // display slide
  showslide(step);

  // click icon (left and right)
  function arrow(e) {
    showslide(setStep(step + e));
    console.log("click")
  }

  function showslide(n) {
    if (n > 4) {
      setStep(1)
    }
    if (n < 1) {
      setStep(4)
    }
  }

  function currentSlide(m) {
    showslide(setStep(m))
    console.log("dot")

  }

  return (
    <div className="App">
      <div className="slideshow-container container my-5">

        {/* left icon */}
        <div className="prev">
          <Icon icon={arrowLeft} size={28} onClick={() => arrow(-1)}></Icon>
        </div>

        {step === 1 && <Slide number="1" color="lightskyblue" />}
        {step === 2 && <Slide number="2" color="lightsalmon" />}
        {step === 3 && <Slide number="3" color="rgb(24, 193, 187)" />}
        {step === 4 && <Slide number="4" color="rgb(113, 113, 233)" />}

        <div className="next">
          <Icon icon={arrowRight} size={28} onClick={() => arrow(+1)}></Icon>
        </div>

        {/* circle icon */}
        <div style={{ textAlign: 'center' }}>
          <span className="dot" onClick={() => currentSlide(4)}></span>
          <span className="dot" onClick={() => currentSlide(3)}></span>
          <span className="dot" onClick={() => currentSlide(2)}></span>
          <span className="dot" onClick={() => currentSlide(1)}></span>
        </div>



      </div>

    </div>

  );
}

export default App;
