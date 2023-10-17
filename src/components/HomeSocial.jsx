import React from 'react';
import { BsFacebook, BsLinkedin, BsTwitter,  } from 'react-icons/bs';

const HomeSocial = () => {
    return (
        <div className='mt-8 flex'>
            <p className='mr-3 text-blue-500'><a  href="https://www.facebook.com/f.adnan.masum/"> <BsFacebook /></a></p>
            <p className='mr-3 text-blue-500'><a href="https://twitter.com/FarhanAdnan0058"> <BsTwitter /></a> </p>
            <p className='mb-3 text-blue-500'><a href="https://www.linkedin.com/in/farhan-adnan-masum-08102a274/"> <BsLinkedin /></a> </p>
        </div>
    );
};

export default HomeSocial;