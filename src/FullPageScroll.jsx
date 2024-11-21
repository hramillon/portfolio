import React, { useEffect, useRef } from 'react';

import Page1 from './functions/page/page1.jsx';
import Page2 from './functions/page/page2.jsx';
import Page3 from './functions/page/page3.jsx';
import Page4 from './functions/page/page4.jsx';
import Page5 from './functions/page/page5.jsx';

const FullPageScroll = () => {

    return (
        <div className='container'>
                <div className="section" id="section1">
                    <Page1 />
                </div>
                <div className="section" id="section2">
                    <Page2 />
                </div>
                <div className="section" id="section3">
                    <Page3 />
                </div>
                <div className="section" id="section4">
                    <Page4 />
                </div>
                <div className="section" id="section5">
                    <Page5 />
                </div>
        </div>
    );
}

export default FullPageScroll