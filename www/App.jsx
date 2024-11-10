import { useEffect, useState } from 'react'
/* page JSX */
import FullPageScroll from './FullPageScroll.jsx';
/* page CSS */
import './css/App.css'
import './css/Light.css'
import './css/page2.css'
import './css/tablette.css'
import './css/smartphone.css'
/* page JS */
import contentOrList from './functionsJs/contentOrList.js';
import portfolioBox from './functionsJs/portfolioBox.js';
import portfolio from './functionsJs/portfolio.js';
import maps from './functionsJs/maps.js';
import checkedlanguage from './functionsJs/checkedlanguage.js';
import darkMode from './functionsJs/darkMode.js';

var section = 1;

function move(change) {
  if (section <=  5 && section >= 1) {
    section = section + change
    console.log(section)
    window.location.href = '#section' + section;
  }
}

function wait(){
  console.log("nothing")
}

/*
------------------------------------------------------------------------------------------------------------------
*/
function App() {

    useEffect(() => {


        var figures = document.getElementsByClassName('figure');
        for (let i = 0; i < figures.length; i++) {
          if(window.innerWidth > 480){
            var heitgh = window.getComputedStyle(figures[i]).height
            figures[i].style.width = heitgh;
          }

        var divTitle = document.getElementsByClassName('title');
        var title = document.getElementsByClassName('wroteTitle');
        var heitgh = window.getComputedStyle(divTitle[0]).height;
        var rect = divTitle[0].getBoundingClientRect();
        var rect2 = title[0].getBoundingClientRect();

        var button = document.getElementsByClassName('mailMe');
        var sizeButton = button[0].getBoundingClientRect();
        sizeButton = sizeButton.width
        var x = rect.right;
        x =x -sizeButton -20
        button[0].style.left = x + 'px';
        
        var y = rect2.bottom
        var heightButton = button[0].getBoundingClientRect();
        heightButton = heightButton.height
        y = y-heightButton -15
        button[0].style.top = y + 'px';
        
        
        }

        portfolio();
        maps();

        /* event listener click */
        contentOrList();
        portfolioBox();
        checkedlanguage();
        /* event listener dark mode */
        darkMode();
        
        window.addEventListener('resize', function() {
          if(window.innerWidth > 480){
            var figures = document.getElementsByClassName('figure');
            for (let i = 0; i < figures.length; i++) {
                var heitgh = window.getComputedStyle(figures[i]).height;
                figures[i].style.width = heitgh;
                
            }
          }

            var divTitle = document.getElementsByClassName('title');
            var title = document.getElementsByClassName('wroteTitle');
            var heitgh = window.getComputedStyle(divTitle[0]).height;
            var rect = divTitle[0].getBoundingClientRect();
            var rect2 = title[0].getBoundingClientRect();

            var button = document.getElementsByClassName('mailMe');
            var sizeButton = button[0].getBoundingClientRect();
            sizeButton = sizeButton.width
            var x = rect.right;
            x =x -sizeButton -20
            button[0].style.left = x + 'px';
            
            var y = rect2.bottom
            var heightButton = button[0].getBoundingClientRect();
            heightButton = heightButton.height
            y = y-heightButton -15
            button[0].style.top = y + 'px';

            portfolio();
            maps();
          });

    }, []);

  return (
    <FullPageScroll/>
  )

}

export default App