import React from 'react';
import { IoMdColorPalette, IoMdColorFill, } from 'react-icons/io';
import { TbArmchair, TbEngine } from 'react-icons/tb';
import { Link } from 'react-router-dom';

const Car = ({ car }) => {
    const { name, banner, milage, color, sit, turbo, _id } = car;
    return (
        <Link to={`car/${_id}`} className='bg-base-200 p-6 hover:shadow-lg'>
            <h3 className='text-2xl font-semibold text-center mb-4'>{name}</h3>
            <div className='grid' style={{ gridTemplateColumns: "2fr 1fr" }}>
                <img src={banner} alt="" />
                <div>
                    <div className='flex gap-2 my-2'>
                        <p className='text-xl'><IoMdColorPalette /></p>
                        <p>{color}</p>
                    </div>
                    <div className='flex gap-2 my-2'>
                        <p className='text-xl'><IoMdColorFill /></p>
                        <p>{milage}</p>
                    </div>
                    <div className='flex gap-2 my-2'>
                        <p className='text-xl'><TbArmchair /></p>
                        <p>{sit}</p>
                    </div>
                    <div className='flex gap-2 my-2'>
                        <p className='text-xl'><TbEngine /></p>
                        <p>{turbo} turbo</p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Car;