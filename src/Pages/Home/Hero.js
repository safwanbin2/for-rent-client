import React from 'react';
import banner from '../../Assets/banner.png';

const Hero = () => {
    return (
        <div className='hero min-h-screen relative' style={{ backgroundImage: `url(${banner})` }}>
            <div className='bg-[#1c1c1cd5] w-full py-10 absolute bottom-20'>
                <div className='w-[95%] md:w-[85%] mx-auto'>
                    <h4 className='text-primary text-2xl font-semibold my-4'>Super Conditioned cars are waiting</h4>
                    <h3 className='text-base-100 text-5xl font-semibold my-4'>Find your match !</h3>
                </div>
            </div>
        </div>
    );
};

export default Hero;