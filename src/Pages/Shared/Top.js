import React from 'react';
import flame from '../../Assets/flame.png';
import { FiPhoneCall, FiMessageSquare } from 'react-icons/fi';

const Top = () => {
    return (
        <div className='bg-secondary text-base-100 flex justify-center items-center gap-5 py-4'>
            <div className='flex justify-center items-center gap-5'>
                <h3 className='text-2xl'><FiPhoneCall /></h3>
                <div className='text-end'>
                    <p className='font-semibold text-primary'>Call at :</p>
                    <p>+8801830967327</p>
                </div>
            </div>
            <img src={flame} alt="" />
            <div className='flex justify-center items-center gap-5'>
                <div>
                    <p className='font-semibold text-primary'>Send Mail at :</p>
                    <p>safwanridwan321@gmail.com</p>
                </div>
                <h3 className='text-2xl'><FiMessageSquare /></h3>
            </div>
        </div>
    );
};

export default Top;