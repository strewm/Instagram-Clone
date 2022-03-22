import React from 'react';

import splashPhone from '../../Images/splash-phone.png';
import splash1 from '../../Images/splash-1.png';
import splash2 from '../../Images/splash-2.png';
import splash3 from '../../Images/splash-3.png';
import './SplashImage.css';


const SplashImage = () => {

    return (
        <div className='splash-image'>
            <img id='splash-image-1' src={splashPhone} alt='splash phone image'></img>
            <img id='splash-image-2' src={splash1} alt='splash phone image'></img>
            <img id='splash-image-3' src={splash2} alt='splash phone image'></img>
            <img id='splash-image-4' src={splash3} alt='splash phone image'></img>
        </div>
    );
};

export default SplashImage;
