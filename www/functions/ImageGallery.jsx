import React, { useState, useEffect} from 'react';

const allModules = {
    folder1: import.meta.glob('../assets/portfolio/DeltaTech/*.(png|jpeg|svg|jpg)'),
    folder2: import.meta.glob('../assets/portfolio/Blog/*.(png|jpeg|svg|jpg)'),
    folder3: import.meta.glob('../assets/portfolio/Calideo/*.(png|jpeg|svg|jpg)'),
    folder4: import.meta.glob('../assets/portfolio/Speatch/*.(png|jpeg|svg|jpg)'),
    folder5: import.meta.glob('../assets/portfolio/Entraînement/*.(png|jpeg|svg|jpg)'),
    folder6: import.meta.glob('../assets/portfolio/CountryQuiz/*.(png|jpeg|svg|jpg)'),
  };

export default  function ImageGallery({loadedImages}) {

  return (
    <>
      {loadedImages.map(({ path, src }) => (
        <div className={`items ${loadedImages[0]?.path.split('/')[4]}`} key={path}>
          <img src={src} alt={path} className={loadedImages.length}  onClick={() => handleImageClick(src)}/>
        </div>
      ))}
    </>
  );
};