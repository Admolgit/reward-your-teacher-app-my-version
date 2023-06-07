import React from 'react';
import Navbar from '../components/Navbar'
import Howitworks from '../components/Howitworks'
import Giftbox from '../components/Giftbox'
import Send from '../components/Send'
import Teacher from '../components/Teacher'
import OurPartners from '../components/OurPartners'
function Landing() {
    return (
        <div className="overflow-hidden">
           <Navbar className='drop-shadow-xl'/> 
           <Howitworks className="w-[800px] fit h-[500px]"/>
           <Giftbox/>
           <Send/>
           <Teacher/>
           <OurPartners/>
        </div>
    );
}

export default Landing;