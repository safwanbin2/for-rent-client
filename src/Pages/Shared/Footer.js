import React from 'react';
import flame from '../../Assets/flame.png';
import { BsFillPhoneFill, BsMailbox } from 'react-icons/bs';
import { GoLocation } from 'react-icons/go';

const Footer = () => {
    return (
        <footer className='bg-secondary text-base-100 flex flex-col justify-center items-center gap-5 py-10'>
            <img src={flame} alt="" />
            <p>@2022 Sexy Cars All Rights Reserved. </p>
            <div className='flex justify-between items-center gap-5'>
                <div className='text-sm flex justify-center gap-2 items-center'>
                    <p><BsFillPhoneFill/></p>
                    <p>Telefon: +48 501 140 391</p>
                </div>
                <div className='text-sm flex justify-center gap-2 items-center'>
                    <p><GoLocation/></p>
                    <p>Lokalizacja: ul. Marii i Bolesława Wysłouchów 49/6, 30-611 Kraków</p>
                </div>
                <div className='text-sm flex justify-center gap-2 items-center'>
                    <p><BsMailbox/></p>
                    <p>Email: biuro@sexycars.pl</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;