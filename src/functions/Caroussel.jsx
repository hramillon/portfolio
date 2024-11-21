import React, { useState, useEffect } from 'react';
import ImageGallery from './ImageGallery.jsx';

import Modal from './modal.jsx';


/**
 * 
 * @param {*} param0 
 * @returns 
 */

function Button({src,kind}){
  return(
        <button className='button'
                onClick={kind}>
          <img src={src}/>
        </button>
  );
}

export default function Caroussel({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 3000,
  slidesArray
}){

  let length;

  const [open, setOpen] = useState(false)
  const [src, setSrc] = useState('');

  const handleImageClick = () => {
    setSrc(slidesArray[curr].src);
    setOpen(true);  // Ouvre le modal
  };
    /**
     * @setter
     * set the good place of the slide
     */
    const [curr, setCurr] = useState(0);

    /**
     * @function prev
     * set a new current slide by removing one at the current slide
     */
    const prev = () =>{
      length = document.querySelector('.Caroussel img').className;
      setCurr((curr) => (curr == 0 ? length - 1: curr - 1)); 
    }

    /**
     * @function next
     * set a new current slide by adding one at the current slide
     */

    const next = () =>{
      length = document.querySelector('.Caroussel img').className;
      setCurr((curr) => (curr == length - 1 ? 0 : curr + 1)); 
    }

    function toSlide(index) {
      setCurr((curr) => (index)); 
    }

    useEffect(() => {
      if (!autoSlide) return
      const slideInterval = setInterval(next, autoSlideInterval)
      return () => clearInterval(slideInterval)
    }, [])

    useEffect(() => {
      setCurr((curr) => (0));
    }, [slidesArray])


    return(
      <div id='caroussel1'>
        <div className='Caroussel' style={{ transform: `translateX(-${curr * 100}%)` }}>
          {slides}
        </div>
        <div className='buttonDiv'>

          <Button src="left.png" kind={prev}/>

          <Button src="right.png" kind={next}/>

          <button className='increaseSize enlightMode' onClick={handleImageClick}>
            <img src='expand.png'/>
          </button>

        </div>

        <div className='buttonsTodiv'>
          <div className='ButtonsTo'>
            {slidesArray.map((_, i) => (
              <div
                className={`
                bullet 
                ${curr === i ? "uncheckedBullet" : "checkedbullet"}
              `}

              onClick={() => toSlide(i)}
              />
            ))}
          </div>
        </div>

        <Modal open={open} onClose={() => setOpen(false)}>
          <div>
            <img src={src} />
          </div>
        </Modal>
        
      </div>
    );
}