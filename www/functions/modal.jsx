import React, { useEffect } from 'react';

export default function Modal({ open, onClose, children }) {

    useEffect(() => {
        if (open) {
          let image  = document.querySelector('.modalBody  > div > img ');

          let heightImage = image.naturalHeight;
          let widthtImage = image.naturalWidth;
          let ratio = heightImage / widthtImage

          let heightWindow = window.innerHeight;
          let widthWindow = window.innerWidth;

          if(heightImage > (heightWindow - 80)){
            heightImage = (heightWindow - 80)
            image.style.height = heightImage + "px";

            widthtImage = heightImage / ratio;
            image.style.width = widthtImage + "px";
          }

          if(widthtImage > (widthWindow - 80)){
            widthtImage = (widthWindow - 80)
            image.style.width = widthWindow + "px";

            heightImage = ratio * widthtImage;
            image.style.height = heightImage + "px";
          }

          let closeCross = document.querySelector('.modalBody > button')

          let right = (widthWindow - widthtImage)/2 - 20
          closeCross.style.right = right + "px"

          let top = (heightWindow - heightImage)/2 - 20
          closeCross.style.top = top + "px"


        }
      }, [open]);
    return (
        // backdrop
        <div
          onClick={onClose}
          className={`
            modalTotal
            ${open ? "modalTotalVisible" : "modaTotalInvisible"}
          `}
        >
          {/* modal */}
          <div
            onClick={(e) => e.stopPropagation()}
            className={`
              modalBody
              ${open ? "modalBodyVisible" : "modalBodyInvisible"}
            `}
          >
            <button
              onClick={onClose}
              className="buttonCloseModal"
            >
              <img src="close.png" className="closeImageModal enlightMode"/>
            </button>
            {children}
          </div>
        </div>
      );
}